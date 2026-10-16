const places = [
  { id: "new-york", city: "New York", country: "United States", region: "North America", flag: "🇺🇸", zone: "America/New_York" },
  { id: "los-angeles", city: "Los Angeles", country: "United States", region: "North America", flag: "🇺🇸", zone: "America/Los_Angeles" },
  { id: "chicago", city: "Chicago", country: "United States", region: "North America", flag: "🇺🇸", zone: "America/Chicago" },
  { id: "toronto", city: "Toronto", country: "Canada", region: "North America", flag: "🇨🇦", zone: "America/Toronto" },
  { id: "vancouver", city: "Vancouver", country: "Canada", region: "North America", flag: "🇨🇦", zone: "America/Vancouver" },
  { id: "mexico-city", city: "Mexico City", country: "Mexico", region: "North America", flag: "🇲🇽", zone: "America/Mexico_City" },
  { id: "sao-paulo", city: "São Paulo", country: "Brazil", region: "South America", flag: "🇧🇷", zone: "America/Sao_Paulo" },
  { id: "buenos-aires", city: "Buenos Aires", country: "Argentina", region: "South America", flag: "🇦🇷", zone: "America/Argentina/Buenos_Aires" },
  { id: "london", city: "London", country: "United Kingdom", region: "Europe", flag: "🇬🇧", zone: "Europe/London" },
  { id: "paris", city: "Paris", country: "France", region: "Europe", flag: "🇫🇷", zone: "Europe/Paris" },
  { id: "berlin", city: "Berlin", country: "Germany", region: "Europe", flag: "🇩🇪", zone: "Europe/Berlin" },
  { id: "madrid", city: "Madrid", country: "Spain", region: "Europe", flag: "🇪🇸", zone: "Europe/Madrid" },
  { id: "rome", city: "Rome", country: "Italy", region: "Europe", flag: "🇮🇹", zone: "Europe/Rome" },
  { id: "istanbul", city: "Istanbul", country: "Türkiye", region: "Europe", flag: "🇹🇷", zone: "Europe/Istanbul" },
  { id: "moscow", city: "Moscow", country: "Russia", region: "Europe", flag: "🇷🇺", zone: "Europe/Moscow" },
  { id: "cairo", city: "Cairo", country: "Egypt", region: "Africa", flag: "🇪🇬", zone: "Africa/Cairo" },
  { id: "nairobi", city: "Nairobi", country: "Kenya", region: "Africa", flag: "🇰🇪", zone: "Africa/Nairobi" },
  { id: "dubai", city: "Dubai", country: "United Arab Emirates", region: "Middle East", flag: "🇦🇪", zone: "Asia/Dubai" },
  { id: "mumbai", city: "Mumbai", country: "India", region: "Asia", flag: "🇮🇳", zone: "Asia/Kolkata" },
  { id: "bangkok", city: "Bangkok", country: "Thailand", region: "Asia", flag: "🇹🇭", zone: "Asia/Bangkok" },
  { id: "singapore", city: "Singapore", country: "Singapore", region: "Asia", flag: "🇸🇬", zone: "Asia/Singapore" },
  { id: "hong-kong", city: "Hong Kong", country: "China", region: "Asia", flag: "🇭🇰", zone: "Asia/Hong_Kong" },
  { id: "tokyo", city: "Tokyo", country: "Japan", region: "Asia", flag: "🇯🇵", zone: "Asia/Tokyo" },
  { id: "seoul", city: "Seoul", country: "South Korea", region: "Asia", flag: "🇰🇷", zone: "Asia/Seoul" },
  { id: "shanghai", city: "Shanghai", country: "China", region: "Asia", flag: "🇨🇳", zone: "Asia/Shanghai" },
  { id: "sydney", city: "Sydney", country: "Australia", region: "Oceania", flag: "🇦🇺", zone: "Australia/Sydney" },
  { id: "auckland", city: "Auckland", country: "New Zealand", region: "Oceania", flag: "🇳🇿", zone: "Pacific/Auckland" },
];

const defaultPlaces = ["new-york", "london", "paris", "dubai", "tokyo", "sydney"];
const storageKey = "worldtime.selected-places";
const clockGrid = document.querySelector("#clock-grid");
const clockCount = document.querySelector("#clock-count");
const emptyState = document.querySelector("#empty-state");
const pickerDialog = document.querySelector("#picker-dialog");
const zoneList = document.querySelector("#zone-list");
const searchInput = document.querySelector("#zone-search");
const noResults = document.querySelector("#no-results");
const localTime = document.querySelector("#local-time");
const localDate = document.querySelector("#local-date");
const localZone = document.querySelector("#local-zone");
const formatStorageKey = "worldtime.time-format";
const format12hButton = document.querySelector("#format-12h");
const format24hButton = document.querySelector("#format-24h");

const formatters = new Map();
let timeFormat = loadTimeFormat();

function loadTimeFormat() {
  try {
    const savedFormat = localStorage.getItem(formatStorageKey);
    return savedFormat === "12h" || savedFormat === "24h" ? savedFormat : "24h";
  } catch (error) {
    console.warn("Could not load the saved time format.", error);
    return "24h";
  }
}

function getFormatter(zone, options) {
  const key = `${zone}:${JSON.stringify(options)}`;
  if (!formatters.has(key)) {
    formatters.set(key, new Intl.DateTimeFormat(undefined, { ...options, timeZone: zone }));
  }
  return formatters.get(key);
}

function formatTime(zone, date = new Date(), seconds = false) {
  return getFormatter(zone, {
    hour: "2-digit",
    minute: "2-digit",
    ...(seconds ? { second: "2-digit" } : {}),
    hourCycle: timeFormat === "12h" ? "h12" : "h23",
  }).format(date);
}

function formatDate(zone, date = new Date()) {
  return getFormatter(zone, {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(date);
}

function localDayNumber(zone, date) {
  const parts = getFormatter(zone, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return Date.UTC(Number(values.year), Number(values.month) - 1, Number(values.day)) / 86_400_000;
}

function getDayDifference(zone, now) {
  const today = localDayNumber(Intl.DateTimeFormat().resolvedOptions().timeZone, now);
  return localDayNumber(zone, now) - today;
}

function loadSelectedPlaces() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (Array.isArray(saved)) {
      return [...new Set(saved.filter((id) => places.some((place) => place.id === id)))];
    }
  } catch (error) {
    console.warn("Could not load saved time zones.", error);
  }
  return defaultPlaces;
}

let selectedPlaceIds = loadSelectedPlaces();

function saveSelectedPlaces() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(selectedPlaceIds));
  } catch (error) {
    console.warn("Could not save selected time zones.", error);
  }
}

function renderCards() {
  const now = new Date();
  const selectedPlaces = selectedPlaceIds
    .map((id) => places.find((place) => place.id === id))
    .filter(Boolean);

  clockCount.textContent = String(selectedPlaces.length);
  emptyState.hidden = selectedPlaces.length > 0;
  clockGrid.hidden = selectedPlaces.length === 0;
  clockGrid.replaceChildren();

  for (const place of selectedPlaces) {
    const difference = getDayDifference(place.zone, now);
    const differenceLabel =
      difference === 0 ? "Today" : difference === 1 ? "Tomorrow" : difference === -1 ? "Yesterday" : difference > 0 ? `+${difference} days` : `${difference} days`;

    const card = document.createElement("article");
    card.className = "clock-card";
    card.innerHTML = `
      <div class="card-top">
        <span class="city-flag" aria-hidden="true">${place.flag}</span>
        <div class="city-meta">
          <p class="city-name">${place.city}</p>
          <p class="city-country">${place.country} · ${place.zone.replaceAll("_", " ")}</p>
        </div>
        <button class="remove-clock" type="button" aria-label="Remove ${place.city}" title="Remove ${place.city}">×</button>
      </div>
      <p class="card-time">${formatTime(place.zone, now)}</p>
      <div class="card-bottom">
        <p class="card-date">${formatDate(place.zone, now)}</p>
        <span class="day-difference ${difference === 0 ? "today" : ""}">${differenceLabel}</span>
      </div>
    `;
    card.querySelector(".remove-clock").addEventListener("click", () => removePlace(place.id));
    clockGrid.append(card);
  }
}

function renderTimeFormat() {
  format12hButton.setAttribute("aria-pressed", String(timeFormat === "12h"));
  format24hButton.setAttribute("aria-pressed", String(timeFormat === "24h"));
  updateLocalClock();
  if (pickerDialog.open) renderPicker();
}

function setTimeFormat(format) {
  if (timeFormat === format) return;
  timeFormat = format;
  try {
    localStorage.setItem(formatStorageKey, timeFormat);
  } catch (error) {
    console.warn("Could not save the selected time format.", error);
  }
  renderTimeFormat();
}

function renderPicker() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const filteredPlaces = places.filter((place) =>
    `${place.city} ${place.country} ${place.region} ${place.zone}`
      .toLocaleLowerCase()
      .includes(query),
  );
  const now = new Date();

  zoneList.replaceChildren();
  noResults.hidden = filteredPlaces.length > 0;

  for (const place of filteredPlaces) {
    const isAdded = selectedPlaceIds.includes(place.id);
    const option = document.createElement("button");
    option.className = "zone-option";
    option.type = "button";
    option.disabled = isAdded;
    option.innerHTML = `
      <span class="city-flag" aria-hidden="true">${place.flag}</span>
      <span class="city-meta">
        <span class="city-name">${place.city}</span>
        <span class="city-country">${place.country} · ${place.region}</span>
      </span>
      <span class="${isAdded ? "zone-added" : "zone-current-time"}">${isAdded ? "Added ✓" : formatTime(place.zone, now)}</span>
    `;
    if (!isAdded) {
      option.addEventListener("click", () => addPlace(place.id));
    }
    zoneList.append(option);
  }
}

function addPlace(id) {
  if (!selectedPlaceIds.includes(id)) {
    selectedPlaceIds.push(id);
    saveSelectedPlaces();
    renderCards();
    renderPicker();
  }
}

function removePlace(id) {
  selectedPlaceIds = selectedPlaceIds.filter((placeId) => placeId !== id);
  saveSelectedPlaces();
  renderCards();
  renderPicker();
}

function updateLocalClock() {
  const now = new Date();
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  localZone.textContent = zone.replaceAll("_", " ");
  localTime.textContent = formatTime(zone, now, true);
  localDate.textContent = getFormatter(zone, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(now);
  renderCards();
}

document.querySelector("#open-picker").addEventListener("click", () => {
  pickerDialog.showModal();
  searchInput.value = "";
  renderPicker();
  searchInput.focus();
});

document.querySelector("#empty-add").addEventListener("click", () => {
  document.querySelector("#open-picker").click();
});

document.querySelector("#close-picker").addEventListener("click", () => pickerDialog.close());
format12hButton.addEventListener("click", () => setTimeFormat("12h"));
format24hButton.addEventListener("click", () => setTimeFormat("24h"));
pickerDialog.addEventListener("click", (event) => {
  if (event.target === pickerDialog) pickerDialog.close();
});
searchInput.addEventListener("input", renderPicker);
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !pickerDialog.open && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
    event.preventDefault();
    document.querySelector("#open-picker").click();
  }
});

updateLocalClock();
renderTimeFormat();
renderPicker();
window.setInterval(updateLocalClock, 1000);
window.setInterval(() => {
  if (pickerDialog.open) renderPicker();
}, 30_000);
