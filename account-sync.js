(() => {
  const accountButton = document.querySelector("#account-button");
  const accountDialog = document.querySelector("#account-dialog");
  const accountStatus = document.querySelector("#account-status");
  const syncIndicator = document.querySelector("#sync-indicator");
  const googleButton = document.querySelector("#google-signin");
  const signoutButton = document.querySelector("#signout");
  const retryButton = document.querySelector("#retry-sync");
  const closeButton = document.querySelector("#close-account-dialog");
  const userMarkerKey = "worldtime.synced-user";
  const syncedKeysPrefix = "worldtime.";
  let supabaseClient = null;
  let currentUser = null;
  let syncReady = false;
  let applyingCloudData = false;
  let saveTimer = null;
  let saveInProgress = false;
  let saveRequested = false;

  function setStatus(message, state = "ready") {
    accountStatus.textContent = message;
    accountStatus.dataset.state = state;
    syncIndicator.textContent = state === "error"
      ? "Sync needs attention"
      : currentUser ? message : "Saved on this device";
    syncIndicator.dataset.state = state;
  }

  function renderAccount() {
    accountButton.textContent = currentUser
      ? currentUser.email || "Your account"
      : "Sign in";
    googleButton.hidden = Boolean(currentUser);
    signoutButton.hidden = !currentUser;
    retryButton.hidden = !currentUser;
  }

  function isPlainObject(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  }

  function getLocalSnapshot() {
    const snapshot = {};
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      if (key?.startsWith(syncedKeysPrefix) && key !== userMarkerKey) {
        snapshot[key] = localStorage.getItem(key);
      }
    }
    return Object.fromEntries(Object.entries(snapshot).sort(([a], [b]) => a.localeCompare(b)));
  }

  function mergeSnapshots(localData, cloudData) {
    const merged = { ...localData, ...cloudData };
    for (const key of ["worldtime.selected-places", "worldtime.friends"]) {
      const localValue = localData[key];
      const cloudValue = cloudData[key];
      if (localValue === undefined || cloudValue === undefined) continue;

      try {
        const localItems = JSON.parse(localValue);
        const cloudItems = JSON.parse(cloudValue);
        if (!Array.isArray(localItems) || !Array.isArray(cloudItems)) continue;
        if (key === "worldtime.selected-places") {
          merged[key] = JSON.stringify([...new Set([...cloudItems, ...localItems])]);
        } else {
          const friendsById = new Map(cloudItems.map((friend) => [friend.id, friend]));
          for (const friend of localItems) {
            if (!friendsById.has(friend.id)) friendsById.set(friend.id, friend);
          }
          merged[key] = JSON.stringify([...friendsById.values()]);
        }
      } catch (error) {
        console.warn(`Could not merge saved data for ${key}.`, error);
      }
    }
    return Object.fromEntries(Object.entries(merged).sort(([a], [b]) => a.localeCompare(b)));
  }

  function normalizeCloudSnapshot(data) {
    return Object.fromEntries(
      Object.entries(data)
        .filter(([key, value]) =>
          key.startsWith(syncedKeysPrefix) &&
          key !== userMarkerKey &&
          typeof value === "string")
        .sort(([a], [b]) => a.localeCompare(b)),
    );
  }

  function applySnapshot(snapshot) {
    applyingCloudData = true;
    try {
      for (let index = localStorage.length - 1; index >= 0; index -= 1) {
        const key = localStorage.key(index);
        if (key?.startsWith(syncedKeysPrefix) && key !== userMarkerKey) {
          localStorage.removeItem(key);
        }
      }
      for (const [key, value] of Object.entries(snapshot)) {
        localStorage.setItem(key, value);
      }
    } finally {
      applyingCloudData = false;
    }
  }

  async function writeSnapshot(snapshot) {
    const { error } = await supabaseClient
      .from("worldtime_data")
      .upsert(
        { user_id: currentUser.id, data: snapshot, updated_at: new Date().toISOString() },
        { onConflict: "user_id" },
      );
    if (error) throw error;
  }

  async function loadAccountData() {
    const { data: row, error } = await supabaseClient
      .from("worldtime_data")
      .select("data")
      .eq("user_id", currentUser.id)
      .maybeSingle();
    if (error) throw error;

    const localData = localStorage.getItem(userMarkerKey) ? {} : getLocalSnapshot();
    const cloudData = isPlainObject(row?.data) ? normalizeCloudSnapshot(row.data) : {};
    const merged = mergeSnapshots(localData, cloudData);
    applySnapshot(merged);

    if (!row || JSON.stringify(merged) !== JSON.stringify(cloudData)) {
      await writeSnapshot(merged);
    }
    localStorage.setItem(userMarkerKey, currentUser.id);
    syncReady = true;
    setStatus("Synced to your account");
  }

  async function initialize() {
    const config = window.WORLDTIME_CONFIG;
    if (!config?.supabaseUrl || !config?.supabaseAnonKey) {
      setStatus("Cloud sync is not configured. Local saves still work.");
      return;
    }
    if (!window.supabase?.createClient) {
      setStatus("The Supabase client could not load. Check your internet connection.", "error");
      return;
    }

    try {
      supabaseClient = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
      const { data, error } = await supabaseClient.auth.getSession();
      if (error) throw error;
      currentUser = data.session?.user ?? null;
      renderAccount();
      if (currentUser) await loadAccountData();
    } catch (error) {
      syncReady = false;
      console.error("Could not initialize account sync.", error);
      setStatus(`Cloud sync could not start: ${error.message}`, "error");
      renderAccount();
    }
  }

  async function saveSnapshot() {
    if (!currentUser || !supabaseClient) return true;
    if (!syncReady) {
      setStatus("Sync is not ready. Retry before saving or signing out.", "error");
      return false;
    }
    if (saveInProgress) {
      saveRequested = true;
      return false;
    }

    saveInProgress = true;
    setStatus("Syncing…");
    try {
      await writeSnapshot(getLocalSnapshot());
      setStatus("Synced to your account");
      return true;
    } catch (error) {
      console.error("Could not save dashboard changes to the account.", error);
      setStatus(`Sync failed: ${error.message}`, "error");
      return false;
    } finally {
      saveInProgress = false;
      if (saveRequested) {
        saveRequested = false;
        scheduleSave();
      }
    }
  }

  function scheduleSave() {
    if (!currentUser || !syncReady) return;
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(() => {
      void saveSnapshot();
    }, 700);
  }

  function trackLocalChanges() {
    const originalSetItem = Storage.prototype.setItem;
    const originalRemoveItem = Storage.prototype.removeItem;
    Storage.prototype.setItem = function (key, value) {
      originalSetItem.call(this, key, value);
      if (this === localStorage && key.startsWith(syncedKeysPrefix) &&
          key !== userMarkerKey && !applyingCloudData) {
        scheduleSave();
      }
    };
    Storage.prototype.removeItem = function (key) {
      originalRemoveItem.call(this, key);
      if (this === localStorage && key.startsWith(syncedKeysPrefix) &&
          key !== userMarkerKey && !applyingCloudData) {
        scheduleSave();
      }
    };
  }

  accountButton.addEventListener("click", () => accountDialog.showModal());
  closeButton.addEventListener("click", () => accountDialog.close());
  accountDialog.addEventListener("click", (event) => {
    if (event.target === accountDialog) accountDialog.close();
  });
  googleButton.addEventListener("click", async () => {
    if (!supabaseClient) {
      setStatus("Add your Supabase URL and anon key to sync-config.js first.", "error");
      return;
    }
    googleButton.disabled = true;
    setStatus("Opening Google sign-in…");
    try {
      const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: window.location.href.split("#")[0] },
      });
      if (error) throw error;
    } catch (error) {
      console.error("Google sign-in failed.", error);
      setStatus(`Google sign-in failed: ${error.message}`, "error");
      googleButton.disabled = false;
    }
  });
  retryButton.addEventListener("click", async () => {
    retryButton.disabled = true;
    if (syncReady) {
      await saveSnapshot();
    } else {
      await initialize();
    }
    retryButton.disabled = false;
  });
  signoutButton.addEventListener("click", async () => {
    signoutButton.disabled = true;
    if (syncReady && !await saveSnapshot()) {
      signoutButton.disabled = false;
      return;
    }
    if (!syncReady && !window.confirm("Cloud sync is not confirmed. Signing out will clear this browser’s dashboard data. Continue?")) {
      signoutButton.disabled = false;
      return;
    }
    try {
      const { error } = await supabaseClient.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error("Could not sign out.", error);
      setStatus(`Sign out failed: ${error.message}`, "error");
      signoutButton.disabled = false;
      return;
    }
    currentUser = null;
    syncReady = false;
    for (let index = localStorage.length - 1; index >= 0; index -= 1) {
      const key = localStorage.key(index);
      if (key?.startsWith(syncedKeysPrefix)) localStorage.removeItem(key);
    }
    window.location.reload();
  });
  window.addEventListener("online", scheduleSave);

  window.worldtimeAccountReady = initialize().finally(trackLocalChanges);
})();
