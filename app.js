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
  { id: "tashkent", city: "Tashkent", country: "Uzbekistan", region: "Asia", flag: "🇺🇿", zone: "Asia/Tashkent" },
  { id: "bangkok", city: "Bangkok", country: "Thailand", region: "Asia", flag: "🇹🇭", zone: "Asia/Bangkok" },
  { id: "singapore", city: "Singapore", country: "Singapore", region: "Asia", flag: "🇸🇬", zone: "Asia/Singapore" },
  { id: "hong-kong", city: "Hong Kong", country: "China", region: "Asia", flag: "🇭🇰", zone: "Asia/Hong_Kong" },
  { id: "tokyo", city: "Tokyo", country: "Japan", region: "Asia", flag: "🇯🇵", zone: "Asia/Tokyo" },
  { id: "seoul", city: "Seoul", country: "South Korea", region: "Asia", flag: "🇰🇷", zone: "Asia/Seoul" },
  { id: "shanghai", city: "Shanghai", country: "China", region: "Asia", flag: "🇨🇳", zone: "Asia/Shanghai" },
  { id: "sydney", city: "Sydney", country: "Australia", region: "Oceania", flag: "🇦🇺", zone: "Australia/Sydney" },
  { id: "auckland", city: "Auckland", country: "New Zealand", region: "Oceania", flag: "🇳🇿", zone: "Pacific/Auckland" },
];

const countryTimeZones = `
AD=Europe/Andorra AE=Asia/Dubai AF=Asia/Kabul AG=America/Antigua AI=America/Anguilla AL=Europe/Tirane
AM=Asia/Yerevan AO=Africa/Luanda AQ=Antarctica/McMurdo AS=Pacific/Pago_Pago AT=Europe/Vienna
AU=Australia/Lord_Howe AW=America/Aruba AX=Europe/Mariehamn AZ=Asia/Baku BA=Europe/Sarajevo
BB=America/Barbados BD=Asia/Dhaka BE=Europe/Brussels BF=Africa/Ouagadougou BG=Europe/Sofia
BH=Asia/Bahrain BI=Africa/Bujumbura BJ=Africa/Porto-Novo BL=America/St_Barthelemy BM=Atlantic/Bermuda
BN=Asia/Brunei BO=America/La_Paz BQ=America/Kralendijk BR=America/Noronha BS=America/Nassau
BT=Asia/Thimphu BW=Africa/Gaborone BY=Europe/Minsk BZ=America/Belize CA=America/St_Johns
CC=Indian/Cocos CD=Africa/Kinshasa CF=Africa/Bangui CG=Africa/Brazzaville CH=Europe/Zurich
CI=Africa/Abidjan CK=Pacific/Rarotonga CL=America/Santiago CM=Africa/Douala CN=Asia/Shanghai
CO=America/Bogota CR=America/Costa_Rica CU=America/Havana CV=Atlantic/Cape_Verde CW=America/Curacao
CX=Indian/Christmas CY=Asia/Nicosia CZ=Europe/Prague DE=Europe/Berlin DJ=Africa/Djibouti
DK=Europe/Copenhagen DM=America/Dominica DO=America/Santo_Domingo DZ=Africa/Algiers EC=America/Guayaquil
EE=Europe/Tallinn EG=Africa/Cairo EH=Africa/El_Aaiun ER=Africa/Asmara ES=Europe/Madrid
ET=Africa/Addis_Ababa FI=Europe/Helsinki FJ=Pacific/Fiji FK=Atlantic/Stanley FM=Pacific/Chuuk
FO=Atlantic/Faroe FR=Europe/Paris GA=Africa/Libreville GB=Europe/London GD=America/Grenada
GE=Asia/Tbilisi GF=America/Cayenne GG=Europe/Guernsey GH=Africa/Accra GI=Europe/Gibraltar
GL=America/Nuuk GM=Africa/Banjul GN=Africa/Conakry GP=America/Guadeloupe GQ=Africa/Malabo
GR=Europe/Athens GS=Atlantic/South_Georgia GT=America/Guatemala GU=Pacific/Guam GW=Africa/Bissau
GY=America/Guyana HK=Asia/Hong_Kong HN=America/Tegucigalpa HR=Europe/Zagreb HT=America/Port-au-Prince
HU=Europe/Budapest ID=Asia/Jakarta IE=Europe/Dublin IL=Asia/Jerusalem IM=Europe/Isle_of_Man
IO=Indian/Chagos IQ=Asia/Baghdad IR=Asia/Tehran IS=Atlantic/Reykjavik IT=Europe/Rome
JE=Europe/Jersey JM=America/Jamaica JO=Asia/Amman JP=Asia/Tokyo KE=Africa/Nairobi
KG=Asia/Bishkek KH=Asia/Phnom_Penh KI=Pacific/Tarawa KM=Indian/Comoro KN=America/St_Kitts
KP=Asia/Pyongyang KR=Asia/Seoul KW=Asia/Kuwait KY=America/Cayman KZ=Asia/Almaty
LA=Asia/Vientiane LB=Asia/Beirut LC=America/St_Lucia LI=Europe/Vaduz LK=Asia/Colombo
LR=Africa/Monrovia LS=Africa/Maseru LT=Europe/Vilnius LU=Europe/Luxembourg LV=Europe/Riga
LY=Africa/Tripoli MA=Africa/Casablanca MC=Europe/Monaco MD=Europe/Chisinau ME=Europe/Podgorica
MF=America/Marigot MG=Indian/Antananarivo MH=Pacific/Majuro MK=Europe/Skopje ML=Africa/Bamako
MM=Asia/Yangon MN=Asia/Ulaanbaatar MO=Asia/Macau MP=Pacific/Saipan MQ=America/Martinique
MR=Africa/Nouakchott MS=America/Montserrat MT=Europe/Malta MU=Indian/Mauritius MV=Indian/Maldives
MW=Africa/Blantyre MX=America/Mexico_City MY=Asia/Kuala_Lumpur MZ=Africa/Maputo NA=Africa/Windhoek
NC=Pacific/Noumea NE=Africa/Niamey NF=Pacific/Norfolk NG=Africa/Lagos NI=America/Managua
NL=Europe/Amsterdam NO=Europe/Oslo NP=Asia/Kathmandu NR=Pacific/Nauru NU=Pacific/Niue
NZ=Pacific/Auckland OM=Asia/Muscat PA=America/Panama PE=America/Lima PF=Pacific/Tahiti
PG=Pacific/Port_Moresby PH=Asia/Manila PK=Asia/Karachi PL=Europe/Warsaw PM=America/Miquelon
PN=Pacific/Pitcairn PR=America/Puerto_Rico PS=Asia/Gaza PT=Europe/Lisbon PW=Pacific/Palau
PY=America/Asuncion QA=Asia/Qatar RE=Indian/Reunion RO=Europe/Bucharest RS=Europe/Belgrade
RU=Europe/Kaliningrad RW=Africa/Kigali SA=Asia/Riyadh SB=Pacific/Guadalcanal SC=Indian/Mahe
SD=Africa/Khartoum SE=Europe/Stockholm SG=Asia/Singapore SH=Atlantic/St_Helena SI=Europe/Ljubljana
SJ=Arctic/Longyearbyen SK=Europe/Bratislava SL=Africa/Freetown SM=Europe/San_Marino SN=Africa/Dakar
SO=Africa/Mogadishu SR=America/Paramaribo SS=Africa/Juba ST=Africa/Sao_Tome SV=America/El_Salvador
SX=America/Lower_Princes SY=Asia/Damascus SZ=Africa/Mbabane TC=America/Grand_Turk TD=Africa/Ndjamena
TF=Indian/Kerguelen TG=Africa/Lome TH=Asia/Bangkok TJ=Asia/Dushanbe TK=Pacific/Fakaofo
TL=Asia/Dili TM=Asia/Ashgabat TN=Africa/Tunis TO=Pacific/Tongatapu TR=Europe/Istanbul
TT=America/Port_of_Spain TV=Pacific/Funafuti TW=Asia/Taipei TZ=Africa/Dar_es_Salaam
UA=Europe/Simferopol UG=Africa/Kampala UM=Pacific/Midway US=America/New_York UY=America/Montevideo
VA=Europe/Vatican VC=America/St_Vincent VE=America/Caracas VG=America/Tortola VI=America/St_Thomas
VN=Asia/Ho_Chi_Minh VU=Pacific/Efate WF=Pacific/Wallis WS=Pacific/Apia YE=Asia/Aden
YT=Indian/Mayotte ZA=Africa/Johannesburg ZM=Africa/Lusaka ZW=Africa/Harare XK=Europe/Belgrade
`.trim().split(/\s+/);
const zoneCountryData = `
AD Europe/Andorra
AE Asia/Dubai
AF Asia/Kabul
AG America/Antigua
AI America/Anguilla
AL Europe/Tirane
AM Asia/Yerevan
AO Africa/Luanda
AQ Antarctica/McMurdo Antarctica/Casey Antarctica/Davis Antarctica/DumontDUrville Antarctica/Mawson Antarctica/Palmer Antarctica/Rothera Antarctica/Syowa Antarctica/Troll Antarctica/Vostok
AR America/Argentina/Buenos_Aires America/Argentina/Cordoba America/Argentina/Salta America/Argentina/Jujuy America/Argentina/Tucuman America/Argentina/Catamarca America/Argentina/La_Rioja America/Argentina/San_Juan America/Argentina/Mendoza America/Argentina/San_Luis America/Argentina/Rio_Gallegos America/Argentina/Ushuaia
AS Pacific/Pago_Pago
AT Europe/Vienna
AU Australia/Lord_Howe Antarctica/Macquarie Australia/Hobart Australia/Melbourne Australia/Sydney Australia/Broken_Hill Australia/Brisbane Australia/Lindeman Australia/Adelaide Australia/Darwin Australia/Perth Australia/Eucla
AW America/Aruba
AX Europe/Mariehamn
AZ Asia/Baku
BA Europe/Sarajevo
BB America/Barbados
BD Asia/Dhaka
BE Europe/Brussels
BF Africa/Ouagadougou
BG Europe/Sofia
BH Asia/Bahrain
BI Africa/Bujumbura
BJ Africa/Porto-Novo
BL America/St_Barthelemy
BM Atlantic/Bermuda
BN Asia/Brunei
BO America/La_Paz
BQ America/Kralendijk
BR America/Noronha America/Belem America/Fortaleza America/Recife America/Araguaina America/Maceio America/Bahia America/Sao_Paulo America/Campo_Grande America/Cuiaba America/Santarem America/Porto_Velho America/Boa_Vista America/Manaus America/Eirunepe America/Rio_Branco
BS America/Nassau
BT Asia/Thimphu
BW Africa/Gaborone
BY Europe/Minsk
BZ America/Belize
CA America/St_Johns America/Halifax America/Glace_Bay America/Moncton America/Goose_Bay America/Blanc-Sablon America/Toronto America/Iqaluit America/Atikokan America/Winnipeg America/Resolute America/Rankin_Inlet America/Regina America/Swift_Current America/Edmonton America/Cambridge_Bay America/Inuvik America/Vancouver America/Creston America/Dawson_Creek America/Fort_Nelson America/Whitehorse America/Dawson
CC Indian/Cocos
CD Africa/Kinshasa Africa/Lubumbashi
CF Africa/Bangui
CG Africa/Brazzaville
CH Europe/Zurich
CI Africa/Abidjan
CK Pacific/Rarotonga
CL America/Santiago America/Coyhaique America/Punta_Arenas Pacific/Easter
CM Africa/Douala
CN Asia/Shanghai Asia/Urumqi
CO America/Bogota
CR America/Costa_Rica
CU America/Havana
CV Atlantic/Cape_Verde
CW America/Curacao
CX Indian/Christmas
CY Asia/Nicosia Asia/Famagusta
CZ Europe/Prague
DE Europe/Berlin Europe/Busingen
DJ Africa/Djibouti
DK Europe/Copenhagen
DM America/Dominica
DO America/Santo_Domingo
DZ Africa/Algiers
EC America/Guayaquil Pacific/Galapagos
EE Europe/Tallinn
EG Africa/Cairo
EH Africa/El_Aaiun
ER Africa/Asmara
ES Europe/Madrid Africa/Ceuta Atlantic/Canary
ET Africa/Addis_Ababa
FI Europe/Helsinki
FJ Pacific/Fiji
FK Atlantic/Stanley
FM Pacific/Chuuk Pacific/Pohnpei Pacific/Kosrae
FO Atlantic/Faroe
FR Europe/Paris
GA Africa/Libreville
GB Europe/London
GD America/Grenada
GE Asia/Tbilisi
GF America/Cayenne
GG Europe/Guernsey
GH Africa/Accra
GI Europe/Gibraltar
GL America/Nuuk America/Danmarkshavn America/Scoresbysund America/Thule
GM Africa/Banjul
GN Africa/Conakry
GP America/Guadeloupe
GQ Africa/Malabo
GR Europe/Athens
GS Atlantic/South_Georgia
GT America/Guatemala
GU Pacific/Guam
GW Africa/Bissau
GY America/Guyana
HK Asia/Hong_Kong
HN America/Tegucigalpa
HR Europe/Zagreb
HT America/Port-au-Prince
HU Europe/Budapest
ID Asia/Jakarta Asia/Pontianak Asia/Makassar Asia/Jayapura
IE Europe/Dublin
IL Asia/Jerusalem
IM Europe/Isle_of_Man
IN Asia/Kolkata
IO Indian/Chagos
IQ Asia/Baghdad
IR Asia/Tehran
IS Atlantic/Reykjavik
IT Europe/Rome
JE Europe/Jersey
JM America/Jamaica
JO Asia/Amman
JP Asia/Tokyo
KE Africa/Nairobi
KG Asia/Bishkek
KH Asia/Phnom_Penh
KI Pacific/Tarawa Pacific/Kanton Pacific/Kiritimati
KM Indian/Comoro
KN America/St_Kitts
KP Asia/Pyongyang
KR Asia/Seoul
KW Asia/Kuwait
KY America/Cayman
KZ Asia/Almaty Asia/Qyzylorda Asia/Qostanay Asia/Aqtobe Asia/Aqtau Asia/Atyrau Asia/Oral
LA Asia/Vientiane
LB Asia/Beirut
LC America/St_Lucia
LI Europe/Vaduz
LK Asia/Colombo
LR Africa/Monrovia
LS Africa/Maseru
LT Europe/Vilnius
LU Europe/Luxembourg
LV Europe/Riga
LY Africa/Tripoli
MA Africa/Casablanca
MC Europe/Monaco
MD Europe/Chisinau
ME Europe/Podgorica
MF America/Marigot
MG Indian/Antananarivo
MH Pacific/Majuro Pacific/Kwajalein
MK Europe/Skopje
ML Africa/Bamako
MM Asia/Yangon
MN Asia/Ulaanbaatar Asia/Hovd
MO Asia/Macau
MP Pacific/Saipan
MQ America/Martinique
MR Africa/Nouakchott
MS America/Montserrat
MT Europe/Malta
MU Indian/Mauritius
MV Indian/Maldives
MW Africa/Blantyre
MX America/Mexico_City America/Cancun America/Merida America/Monterrey America/Matamoros America/Chihuahua America/Ciudad_Juarez America/Ojinaga America/Mazatlan America/Bahia_Banderas America/Hermosillo America/Tijuana
MY Asia/Kuala_Lumpur Asia/Kuching
MZ Africa/Maputo
NA Africa/Windhoek
NC Pacific/Noumea
NE Africa/Niamey
NF Pacific/Norfolk
NG Africa/Lagos
NI America/Managua
NL Europe/Amsterdam
NO Europe/Oslo
NP Asia/Kathmandu
NR Pacific/Nauru
NU Pacific/Niue
NZ Pacific/Auckland Pacific/Chatham
OM Asia/Muscat
PA America/Panama
PE America/Lima
PF Pacific/Tahiti Pacific/Marquesas Pacific/Gambier
PG Pacific/Port_Moresby Pacific/Bougainville
PH Asia/Manila
PK Asia/Karachi
PL Europe/Warsaw
PM America/Miquelon
PN Pacific/Pitcairn
PR America/Puerto_Rico
PS Asia/Gaza Asia/Hebron
PT Europe/Lisbon Atlantic/Madeira Atlantic/Azores
PW Pacific/Palau
PY America/Asuncion
QA Asia/Qatar
RE Indian/Reunion
RO Europe/Bucharest
RS Europe/Belgrade
RU Europe/Kaliningrad Europe/Moscow Europe/Kirov Europe/Volgograd Europe/Astrakhan Europe/Saratov Europe/Ulyanovsk Europe/Samara Asia/Yekaterinburg Asia/Omsk Asia/Novosibirsk Asia/Barnaul Asia/Tomsk Asia/Novokuznetsk Asia/Krasnoyarsk Asia/Irkutsk Asia/Chita Asia/Yakutsk Asia/Khandyga Asia/Vladivostok Asia/Ust-Nera Asia/Magadan Asia/Sakhalin Asia/Srednekolymsk Asia/Kamchatka Asia/Anadyr
RW Africa/Kigali
SA Asia/Riyadh
SB Pacific/Guadalcanal
SC Indian/Mahe
SD Africa/Khartoum
SE Europe/Stockholm
SG Asia/Singapore
SH Atlantic/St_Helena
SI Europe/Ljubljana
SJ Arctic/Longyearbyen
SK Europe/Bratislava
SL Africa/Freetown
SM Europe/San_Marino
SN Africa/Dakar
SO Africa/Mogadishu
SR America/Paramaribo
SS Africa/Juba
ST Africa/Sao_Tome
SV America/El_Salvador
SX America/Lower_Princes
SY Asia/Damascus
SZ Africa/Mbabane
TC America/Grand_Turk
TD Africa/Ndjamena
TF Indian/Kerguelen
TG Africa/Lome
TH Asia/Bangkok
TJ Asia/Dushanbe
TK Pacific/Fakaofo
TL Asia/Dili
TM Asia/Ashgabat
TN Africa/Tunis
TO Pacific/Tongatapu
TR Europe/Istanbul
TT America/Port_of_Spain
TV Pacific/Funafuti
TW Asia/Taipei
TZ Africa/Dar_es_Salaam
UA Europe/Simferopol Europe/Kyiv
UG Africa/Kampala
UM Pacific/Midway Pacific/Wake
US America/New_York America/Detroit America/Kentucky/Louisville America/Kentucky/Monticello America/Indiana/Indianapolis America/Indiana/Vincennes America/Indiana/Winamac America/Indiana/Marengo America/Indiana/Petersburg America/Indiana/Vevay America/Chicago America/Indiana/Tell_City America/Indiana/Knox America/Menominee America/North_Dakota/Center America/North_Dakota/New_Salem America/North_Dakota/Beulah America/Denver America/Boise America/Phoenix America/Los_Angeles America/Anchorage America/Juneau America/Sitka America/Metlakatla America/Yakutat America/Nome America/Adak Pacific/Honolulu
UY America/Montevideo
UZ Asia/Samarkand Asia/Tashkent
VA Europe/Vatican
VC America/St_Vincent
VE America/Caracas
VG America/Tortola
VI America/St_Thomas
VN Asia/Ho_Chi_Minh
VU Pacific/Efate
WF Pacific/Wallis
WS Pacific/Apia
YE Asia/Aden
YT Indian/Mayotte
ZA Africa/Johannesburg
ZM Africa/Lusaka
ZW Africa/Harare
`.trim();
const curatedCountryCodes = new Set([
  "AR", "AE", "AU", "BR", "CA", "CN", "DE", "EG", "ES", "FR", "GB", "HK",
  "IN", "IT", "JP", "KE", "KR", "MX", "NZ", "RU", "SG", "TH", "TR", "US",
  "UZ",
]);
const countryNames = typeof Intl.DisplayNames === "function"
  ? new Intl.DisplayNames(["en"], { type: "region" })
  : null;

function countryFlag(code) {
  if (typeof code !== "string" || !/^[A-Z]{2}$/.test(code) || code === "AQ" || code === "XK") return "🌐";
  return String.fromCodePoint(...[...code].map((letter) => 127397 + letter.charCodeAt(0)));
}

function cityFromTimeZone(zone) {
  return zone.split("/").at(-1).replaceAll("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function canonicalTimeZone(zone) {
  try {
    return new Intl.DateTimeFormat("en", { timeZone: zone }).resolvedOptions().timeZone;
  } catch {
    return null;
  }
}

const countryPlaces = countryTimeZones.map((entry) => {
  const [countryCode, zone] = entry.split("=");
  return {
    id: `country-${countryCode.toLowerCase()}`,
    city: cityFromTimeZone(zone),
    country: countryNames?.of(countryCode) ?? countryCode,
    region: zone.split("/")[0],
    flag: countryFlag(countryCode),
    zone,
    countryCode,
  };
});
const countryCodeByTimeZone = new Map();
for (const row of zoneCountryData.split("\n")) {
  const [countryCode, ...zones] = row.trim().split(/\s+/);
  for (const zone of zones) {
    const canonicalZone = canonicalTimeZone(zone);
    if (canonicalZone && !countryCodeByTimeZone.has(canonicalZone)) {
      countryCodeByTimeZone.set(canonicalZone, countryCode);
    }
  }
}

let supportedTimeZones = [];
let hasTimeZoneListing = false;
if (typeof Intl.supportedValuesOf === "function") {
  try {
    supportedTimeZones = [...new Set([...Intl.supportedValuesOf("timeZone"), "UTC"])];
    hasTimeZoneListing = true;
  } catch (error) {
    console.warn("Could not retrieve the browser's supported time zones.", error);
  }
}

const placeByTimeZone = new Map();
function addCatalogPlace(place) {
  const canonicalZone = canonicalTimeZone(place.zone);
  if (!canonicalZone) return;

  const countryCode = place.countryCode ?? countryCodeByTimeZone.get(canonicalZone);
  const flag = countryFlag(countryCode);
  const existingPlace = placeByTimeZone.get(canonicalZone);
  if (existingPlace) {
    existingPlace.searchTerms = `${existingPlace.searchTerms} ${place.city} ${place.country} ${place.countryCode ?? ""} ${place.zone}`;
    return;
  }

  placeByTimeZone.set(canonicalZone, {
    ...place,
    countryCode,
    flag,
    zone: canonicalZone,
    searchTerms: `${place.city} ${place.country} ${place.region} ${place.countryCode ?? ""} ${place.zone}`,
  });
}

for (const place of places) addCatalogPlace(place);
for (const place of countryPlaces) {
  if (!curatedCountryCodes.has(place.countryCode)) addCatalogPlace(place);
}
for (const zone of supportedTimeZones) {
  const canonicalZone = canonicalTimeZone(zone);
  if (!canonicalZone || placeByTimeZone.has(canonicalZone)) continue;

  const zoneParts = canonicalZone.split("/");
  const countryCode = countryCodeByTimeZone.get(canonicalZone);
  const country = countryCode ? countryNames?.of(countryCode) ?? countryCode : zoneParts[0];
  const city = cityFromTimeZone(canonicalZone);
  addCatalogPlace({
    id: `timezone-${canonicalZone.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`,
    city,
    country,
    region: canonicalZone,
    zone: canonicalZone,
  });
}

places.splice(0, places.length, ...placeByTimeZone.values());
const pickerHint = document.querySelector("#picker-hint");
const pickerFootnote = document.querySelector("#picker-footnote");
if (hasTimeZoneListing) {
  pickerHint.textContent = `${placeByTimeZone.size} TIME ZONES AVAILABLE · SEARCH BY CITY OR IANA ZONE`;
} else {
  pickerHint.textContent = "COMMON CITIES & TIME ZONES · SEARCH TO FILTER";
  pickerFootnote.textContent = "This browser cannot list all time zones. Available places use its built-in time-zone support.";
}

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

function formatDayDifference(difference) {
  if (difference === 0) return "Today";
  if (difference === 1) return "Tomorrow";
  if (difference === -1) return "Yesterday";
  return difference > 0 ? `+${difference} days` : `${difference} days`;
}

function loadSelectedPlaces() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (Array.isArray(saved)) {
      const selectedZones = new Set();
      return saved.filter((id) => {
        const place = places.find((candidate) => candidate.id === id);
        if (!place) return false;
        const canonicalZone = canonicalTimeZone(place.zone);
        if (!canonicalZone || selectedZones.has(canonicalZone)) return false;
        selectedZones.add(canonicalZone);
        return true;
      });
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

let draggedPlaceId = null;
let draggedCard = null;
let dropTarget = null;

function clearDropIndicator() {
  if (dropTarget) {
    dropTarget.classList.remove("drop-before", "drop-after", "drop-left", "drop-right");
    dropTarget = null;
  }
}

function getDropPosition(card, clientX, clientY) {
  const targetBounds = card.getBoundingClientRect();
  const sourceBounds = draggedCard.getBoundingClientRect();
  const sharesRow = sourceBounds.top < targetBounds.bottom && sourceBounds.bottom > targetBounds.top;

  if (sharesRow) {
    return clientX < targetBounds.left + targetBounds.width / 2
      ? { position: "before", indicator: "drop-left" }
      : { position: "after", indicator: "drop-right" };
  }

  return clientY < targetBounds.top + targetBounds.height / 2
    ? { position: "before", indicator: "drop-before" }
    : { position: "after", indicator: "drop-after" };
}

function animateCardReorder(previousPositions) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  for (const card of clockGrid.querySelectorAll(".clock-card")) {
    const previousPosition = previousPositions.get(card.dataset.placeId);
    if (!previousPosition) continue;

    const currentPosition = card.getBoundingClientRect();
    const offsetX = previousPosition.left - currentPosition.left;
    const offsetY = previousPosition.top - currentPosition.top;
    if (offsetX || offsetY) {
      card.animate(
        [
          { transform: `translate(${offsetX}px, ${offsetY}px)` },
          { transform: "translate(0, 0)" },
        ],
        { duration: 180, easing: "ease-out" },
      );
    }
  }
}

clockGrid.addEventListener("dragstart", (event) => {
  const card = event.target.closest(".clock-card");
  if (!card || event.target.closest("button")) {
    event.preventDefault();
    return;
  }

  draggedPlaceId = card.dataset.placeId;
  draggedCard = card;
  card.classList.add("is-dragging");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", draggedPlaceId);
});

clockGrid.addEventListener("dragover", (event) => {
  if (!draggedPlaceId) return;

  const card = event.target.closest(".clock-card");
  if (!card || card.dataset.placeId === draggedPlaceId) {
    clearDropIndicator();
    return;
  }

  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  clearDropIndicator();
  dropTarget = card;
  const placement = getDropPosition(card, event.clientX, event.clientY);
  card.classList.add(placement.indicator);
});

clockGrid.addEventListener("drop", (event) => {
  const card = event.target.closest(".clock-card");
  if (!draggedPlaceId || !card || card.dataset.placeId === draggedPlaceId) return;

  event.preventDefault();
  const sourceIndex = selectedPlaceIds.indexOf(draggedPlaceId);
  const targetIndex = selectedPlaceIds.indexOf(card.dataset.placeId);
  if (sourceIndex < 0 || targetIndex < 0) return;

  const position = getDropPosition(card, event.clientX, event.clientY).position;
  const [movedPlaceId] = selectedPlaceIds.splice(sourceIndex, 1);
  const adjustedTargetIndex = targetIndex > sourceIndex ? targetIndex - 1 : targetIndex;
  const insertionIndex = adjustedTargetIndex + (position === "after" ? 1 : 0);
  selectedPlaceIds.splice(insertionIndex, 0, movedPlaceId);
  const previousPositions = new Map(
    [...clockGrid.querySelectorAll(".clock-card")].map((item) => [
      item.dataset.placeId,
      item.getBoundingClientRect(),
    ]),
  );
  saveSelectedPlaces();
  clockGrid.querySelector(".is-dragging")?.classList.remove("is-dragging");
  clearDropIndicator();
  draggedPlaceId = null;
  draggedCard = null;
  renderCards();
  animateCardReorder(previousPositions);
});

clockGrid.addEventListener("dragend", () => {
  clockGrid.querySelector(".is-dragging")?.classList.remove("is-dragging");
  clearDropIndicator();
  draggedPlaceId = null;
  draggedCard = null;
});

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
    const differenceLabel = formatDayDifference(difference);

    const card = document.createElement("article");
    card.className = "clock-card";
    card.draggable = true;
    card.dataset.placeId = place.id;
    card.setAttribute("aria-roledescription", "Draggable time zone");
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

function updateCardClocks(now) {
  for (const card of clockGrid.querySelectorAll(".clock-card")) {
    const place = places.find((candidate) => candidate.id === card.dataset.placeId);
    if (!place) continue;
    const difference = getDayDifference(place.zone, now);
    const differenceLabel = formatDayDifference(difference);
    card.querySelector(".card-time").textContent = formatTime(place.zone, now);
    card.querySelector(".card-date").textContent = formatDate(place.zone, now);
    const differenceElement = card.querySelector(".day-difference");
    differenceElement.textContent = differenceLabel;
    differenceElement.classList.toggle("today", difference === 0);
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
    `${place.searchTerms} ${place.zone}`
      .toLocaleLowerCase()
      .includes(query),
  );
  const visiblePlaces = query ? filteredPlaces : filteredPlaces.slice(0, 50);
  const now = new Date();

  zoneList.replaceChildren();
  noResults.hidden = filteredPlaces.length > 0;

  for (const place of visiblePlaces) {
    const isAdded = selectedPlaceIds.some((id) =>
      canonicalTimeZone(places.find((candidate) => candidate.id === id)?.zone) === place.zone,
    );
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
  const place = places.find((candidate) => candidate.id === id);
  const canonicalZone = place && canonicalTimeZone(place.zone);
  const alreadySelected = canonicalZone && selectedPlaceIds.some((selectedId) => {
    const selectedPlace = places.find((candidate) => candidate.id === selectedId);
    return selectedPlace && canonicalTimeZone(selectedPlace.zone) === canonicalZone;
  });
  if (place && canonicalZone && !alreadySelected) {
    selectedPlaceIds.push(id);
    saveSelectedPlaces();
    renderCards();
    renderPicker();
  }
}

function removePlace(id) {
  const place = places.find((candidate) => candidate.id === id);
  const zone = place && canonicalTimeZone(place.zone);
  selectedPlaceIds = selectedPlaceIds.filter((placeId) => {
    const selectedPlace = places.find((candidate) => candidate.id === placeId);
    return !selectedPlace || canonicalTimeZone(selectedPlace.zone) !== zone;
  });
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
  updateCardClocks(now);
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
renderCards();
renderTimeFormat();
renderPicker();
window.setInterval(updateLocalClock, 1000);
window.setInterval(() => {
  if (pickerDialog.open) renderPicker();
}, 30_000);
