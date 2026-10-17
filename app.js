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
  { id: "kyiv", city: "Kyiv", country: "Ukraine", region: "Europe", flag: "🇺🇦", zone: "Europe/Kyiv" },
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
const timeZoneAliases = new Map();
for (const row of zoneCountryData.split("\n")) {
  const [countryCode, ...zones] = row.trim().split(/\s+/);
  for (const zone of zones) {
    const canonicalZone = canonicalTimeZone(zone);
    if (canonicalZone) {
      if (!countryCodeByTimeZone.has(canonicalZone)) {
        countryCodeByTimeZone.set(canonicalZone, countryCode);
      }
      const aliases = timeZoneAliases.get(canonicalZone) ?? new Set();
      aliases.add(zone);
      timeZoneAliases.set(canonicalZone, aliases);
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
  const aliases = [...(timeZoneAliases.get(canonicalZone) ?? [])].join(" ");
  const existingPlace = placeByTimeZone.get(canonicalZone);
  if (existingPlace) {
    existingPlace.searchTerms = `${existingPlace.searchTerms} ${place.city} ${place.country} ${place.countryCode ?? ""} ${place.zone} ${aliases}`;
    return;
  }

  placeByTimeZone.set(canonicalZone, {
    ...place,
    countryCode,
    flag,
    zone: canonicalZone,
    searchTerms: `${place.city} ${place.country} ${place.region} ${place.countryCode ?? ""} ${place.zone} ${aliases}`,
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
const timezoneSortSelect = document.querySelector("#timezone-sort");
const timezoneSortStorageKey = "worldtime.timezone-sort";
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
const friendsStorageKey = "worldtime.friends";
const timezonesTab = document.querySelector("#tab-timezones");
const friendsTab = document.querySelector("#tab-friends");
const timezonesPanel = document.querySelector("#timezones-panel");
const friendsPanel = document.querySelector("#friends-panel");
const addPlaceButton = document.querySelector("#open-picker");
const addFriendButton = document.querySelector("#open-friend-form");
const friendsGrid = document.querySelector("#friends-grid");
const friendsEmptyState = document.querySelector("#friends-empty-state");
const friendGridViewButton = document.querySelector("#friend-grid-view");
const friendListViewButton = document.querySelector("#friend-list-view");
const friendSearchInput = document.querySelector("#friend-search");
const friendSortSelect = document.querySelector("#friend-sort");
const friendSearchEmpty = document.querySelector("#friend-search-empty");
const friendPreferenceStatus = document.querySelector("#friend-preference-status");
const friendResetButton = document.querySelector("#friend-reset");
const friendSizeButtons = [...document.querySelectorAll("[data-friend-size]")];
const friendViewStorageKey = "worldtime.friend-view";
const friendSizeStorageKey = "worldtime.friend-size";
const friendSortStorageKey = "worldtime.friend-sort";
const friendDialog = document.querySelector("#friend-dialog");
const friendForm = document.querySelector("#friend-form");
const friendNameInput = document.querySelector("#friend-name");
const friendLocationInput = document.querySelector("#friend-location");
const friendZoneSearch = document.querySelector("#friend-zone-search");
const friendZoneList = document.querySelector("#friend-zone-list");
const friendZoneEmpty = document.querySelector("#friend-zone-empty");
const selectedFriendZone = document.querySelector("#selected-friend-zone");
const friendPhotoInput = document.querySelector("#friend-photo");
const photoCropEditor = document.querySelector("#photo-crop-editor");
const photoCropFrame = document.querySelector("#photo-crop-frame");
const photoCropImage = document.querySelector("#photo-crop-image");
const photoZoomInput = document.querySelector("#photo-zoom");
const photoZoomValue = document.querySelector("#photo-zoom-value");
const photoCropReset = document.querySelector("#photo-crop-reset");
const friendFormError = document.querySelector("#friend-form-error");
let activeFriendId = null;
let selectedFriendPlace = null;
let activeTab = "timezones";
let cropImage = null;
let cropImageUrl = null;
let cropScale = 1;
let cropLeft = 0;
let cropTop = 0;
let cropPointer = null;

const formatters = new Map();
let timeFormat = loadTimeFormat();
let friendView = loadFriendView();
let friendSize = loadFriendSize();
let friendSort = loadFriendSort();
let lastLocalTimeSortMinute = -1;
let timezoneSort = loadTimezoneSort();
let lastTimezoneSortMinute = -1;

function loadTimezoneSort() {
  try {
    const saved = localStorage.getItem(timezoneSortStorageKey);
    return ["alphabetical", "local-time", "offset"].includes(saved) ? saved : "custom";
  } catch (error) {
    console.warn("Could not load the saved time zone sort order.", error);
    return "custom";
  }
}

function setTimezoneSort(sort) {
  timezoneSort = sort;
  lastTimezoneSortMinute = Math.floor(Date.now() / 60_000);
  timezoneSortSelect.value = sort;
  try {
    localStorage.setItem(timezoneSortStorageKey, timezoneSort);
  } catch (error) {
    console.warn("Could not save the selected time zone sort order.", error);
  }
  renderCards();
}

function getTimezoneDisplayOrder(now) {
  const selectedPlaces = selectedPlaceIds
    .map((id) => places.find((place) => place.id === id))
    .filter(Boolean);
  if (timezoneSort === "alphabetical") {
    selectedPlaces.sort((a, b) => a.city.localeCompare(b.city, undefined, { sensitivity: "base" }));
  } else if (timezoneSort === "local-time") {
    selectedPlaces.sort((a, b) =>
      getLocalClockMinutes(a.zone, now) - getLocalClockMinutes(b.zone, now) ||
      a.city.localeCompare(b.city, undefined, { sensitivity: "base" }),
    );
  } else if (timezoneSort === "offset") {
    selectedPlaces.sort((a, b) =>
      getZoneOffsetMinutes(b.zone, now) - getZoneOffsetMinutes(a.zone, now) ||
      a.city.localeCompare(b.city, undefined, { sensitivity: "base" }),
    );
  }
  return selectedPlaces;
}

function loadFriendView() {
  try {
    const saved = localStorage.getItem(friendViewStorageKey);
    return saved === "list" ? "list" : "grid";
  } catch (error) {
    console.warn("Could not load the saved friend card layout.", error);
    return "grid";
  }
}

function renderFriendView() {
  const isGrid = friendView === "grid";
  friendsGrid.dataset.view = friendView;
  friendGridViewButton.setAttribute("aria-pressed", String(isGrid));
  friendListViewButton.setAttribute("aria-pressed", String(!isGrid));
}

function setFriendView(view) {
  friendView = view;
  renderFriendView();
  saveFriendPreference(friendViewStorageKey, friendView);
}

function loadFriendSize() {
  try {
    const saved = localStorage.getItem(friendSizeStorageKey);
    return ["compact", "standard", "large"].includes(saved) ? saved : "standard";
  } catch (error) {
    console.warn("Could not load the saved friend card size.", error);
    return "standard";
  }
}

function loadFriendSort() {
  try {
    const saved = localStorage.getItem(friendSortStorageKey);
    return ["alphabetical", "local-time", "offset"].includes(saved) ? saved : "custom";
  } catch (error) {
    console.warn("Could not load the saved friend sort order.", error);
    return "custom";
  }
}

function saveFriendPreference(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn("Could not save friend display preferences.", error);
    return false;
  }
}

function renderFriendPreferences() {
  friendsGrid.dataset.size = friendSize;
  friendSortSelect.value = friendSort;
  for (const button of friendSizeButtons) {
    const isSelected = button.dataset.friendSize === friendSize;
    button.setAttribute("aria-pressed", String(isSelected));
    button.tabIndex = isSelected ? 0 : -1;
  }
}

function setFriendSize(size) {
  friendSize = size;
  renderFriendPreferences();
  friendPreferenceStatus.textContent = saveFriendPreference(friendSizeStorageKey, friendSize)
    ? ""
    : "Card size changed, but could not be saved in this browser.";
}

function setFriendSort(sort) {
  friendSort = sort;
  lastLocalTimeSortMinute = Math.floor(Date.now() / 60_000);
  renderFriendPreferences();
  renderFriends();
  friendPreferenceStatus.textContent = saveFriendPreference(friendSortStorageKey, friendSort)
    ? ""
    : "Sort order changed, but could not be saved in this browser.";
}

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

function formatZoneOffset(zone, date = new Date()) {
  const offset = getFormatter(zone, { timeZoneName: "shortOffset" }).formatToParts(date)
    .find(({ type }) => type === "timeZoneName")?.value;
  return offset?.replace("GMT", "UTC") ?? zone;
}

function getZoneOffsetMinutes(zone, date = new Date()) {
  const offset = getFormatter(zone, { timeZoneName: "shortOffset" }).formatToParts(date)
    .find(({ type }) => type === "timeZoneName")?.value;
  const match = /^(?:GMT|UTC)(?:([+-])(\d{1,2})(?::?(\d{2}))?)?$/.exec(offset ?? "");
  if (!match) throw new Error(`Could not determine the UTC offset for ${zone}.`);
  const minutes = Number(match[2] ?? 0) * 60 + Number(match[3] ?? 0);
  return match[1] === "-" ? -minutes : minutes;
}

function getLocalClockMinutes(zone, date) {
  const parts = getFormatter(zone, {
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return Number(values.hour) * 60 + Number(values.minute);
}

function formatTimeDifference(differenceMinutes) {
  if (differenceMinutes === 0) return "Same time";
  const absoluteMinutes = Math.abs(differenceMinutes);
  const hours = Math.floor(absoluteMinutes / 60);
  const minutes = absoluteMinutes % 60;
  const duration = [
    ...(hours ? [`${hours} ${hours === 1 ? "hr" : "hrs"}`] : []),
    ...(minutes ? [`${minutes} min`] : []),
  ].join(" ");
  return `${differenceMinutes > 0 ? "+" : "−"}${duration} ${differenceMinutes > 0 ? "ahead" : "behind"}`;
}

function getFriendDisplayOrder(now) {
  const search = friendSearchInput.value.trim().toLocaleLowerCase();
  const matches = friends.filter((friend) =>
    `${friend.name} ${friend.location}`.toLocaleLowerCase().includes(search),
  );
  const compareName = (a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
  let compareFriends = () => 0;
  if (friendSort === "alphabetical") {
    compareFriends = compareName;
  } else if (friendSort === "local-time") {
    compareFriends = (a, b) =>
      getLocalClockMinutes(a.zone, now) - getLocalClockMinutes(b.zone, now) || compareName(a, b);
  } else if (friendSort === "offset") {
    compareFriends = (a, b) =>
      getZoneOffsetMinutes(b.zone, now) - getZoneOffsetMinutes(a.zone, now) || compareName(a, b);
  }
  return matches.sort((a, b) =>
    Number(Boolean(b.pinned)) - Number(Boolean(a.pinned)) || compareFriends(a, b),
  );
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

function loadFriends() {
  try {
    const saved = JSON.parse(localStorage.getItem(friendsStorageKey) ?? "[]");
    if (!Array.isArray(saved)) {
      console.warn("Saved friend profiles were not in the expected format.");
      return [];
    }
    const validFriends = saved.filter((friend) =>
      friend &&
      typeof friend.id === "string" &&
      typeof friend.name === "string" &&
      friend.name.trim().length > 0 &&
      typeof friend.location === "string" &&
      friend.location.trim().length > 0 &&
      typeof friend.zone === "string" &&
      canonicalTimeZone(friend.zone) &&
      (friend.photo === null || friend.photo === undefined ||
        (typeof friend.photo === "string" && friend.photo.length <= 700_000 &&
          /^data:image\/jpeg;base64,/.test(friend.photo))),
    );
    if (validFriends.length !== saved.length) {
      console.warn("Some saved friend profiles were invalid and could not be loaded.");
    }
    return validFriends.map((friend) => ({
      id: friend.id,
      name: friend.name.trim().slice(0, 50),
      location: friend.location.trim().slice(0, 80),
      zone: friend.zone,
      photo: friend.photo ?? null,
      pinned: friend.pinned === true,
    }));
  } catch (error) {
    console.warn("Could not load saved friend profiles.", error);
    return [];
  }
}

let friends = loadFriends();

function persistFriends(nextFriends) {
  try {
    localStorage.setItem(friendsStorageKey, JSON.stringify(nextFriends));
    return true;
  } catch (error) {
    console.warn("Could not save friend profiles.", error);
    return false;
  }
}

function updateCount() {
  clockCount.textContent = String(activeTab === "friends" ? friends.length : selectedPlaceIds.length);
}

function setActiveTab(tab) {
  activeTab = tab;
  const showingFriends = tab === "friends";
  timezonesTab.setAttribute("aria-selected", String(!showingFriends));
  timezonesTab.tabIndex = showingFriends ? -1 : 0;
  friendsTab.setAttribute("aria-selected", String(showingFriends));
  friendsTab.tabIndex = showingFriends ? 0 : -1;
  timezonesPanel.hidden = showingFriends;
  friendsPanel.hidden = !showingFriends;
  addPlaceButton.hidden = showingFriends;
  addFriendButton.hidden = !showingFriends;
  document.querySelector("#clocks-heading").textContent = showingFriends ? "My friends" : "Your time zones";
  document.querySelector(".section-caption").textContent = showingFriends
    ? "The people you’re keeping close"
    : "The places you’re keeping close";
  updateCount();
  if (showingFriends) renderFriends();
}

function initialsFor(name) {
  return name.trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function renderFriends(now = new Date()) {
  friendsGrid.replaceChildren();
  const displayedFriends = getFriendDisplayOrder(now);
  const canReorder = friendSort === "custom" && !friendSearchInput.value.trim();
  friendsEmptyState.hidden = friends.length > 0;
  friendSearchEmpty.hidden = friends.length === 0 || displayedFriends.length > 0;
  friendSearchEmpty.textContent = friendSearchEmpty.hidden ? "" : "No friends match your search.";
  friendsGrid.hidden = displayedFriends.length === 0;
  updateCount();

  for (const friend of displayedFriends) {
    const card = document.createElement("article");
    card.className = "friend-card";
    card.draggable = canReorder;
    card.dataset.friendId = friend.id;
    card.setAttribute("aria-roledescription", canReorder ? "Draggable friend profile" : "Friend profile");
    const photoStage = document.createElement("div");
    photoStage.className = "friend-photo-stage";
    if (friend.photo) {
      const photo = document.createElement("img");
      photo.className = "friend-photo";
      photo.src = friend.photo;
      photo.alt = `${friend.name}'s profile`;
      photo.loading = "lazy";
      photoStage.append(photo);
    } else {
      const fallback = document.createElement("div");
      fallback.className = "friend-photo-fallback";
      fallback.textContent = initialsFor(friend.name);
      fallback.setAttribute("aria-hidden", "true");
      photoStage.append(fallback);
    }

    const actions = document.createElement("div");
    actions.className = "friend-card-actions";
    const editButton = document.createElement("button");
    editButton.className = "friend-action";
    editButton.type = "button";
    editButton.textContent = "Edit";
    editButton.setAttribute("aria-label", `Edit ${friend.name}`);
    editButton.addEventListener("click", () => openFriendForm(friend.id));
    const deleteButton = document.createElement("button");
    deleteButton.className = "friend-action friend-delete";
    deleteButton.type = "button";
    deleteButton.textContent = "×";
    deleteButton.title = `Remove ${friend.name}`;
    deleteButton.setAttribute("aria-label", `Remove ${friend.name}`);
    deleteButton.addEventListener("click", () => deleteFriend(friend.id));
    const moveUpButton = document.createElement("button");
    moveUpButton.className = "friend-action friend-move-up";
    moveUpButton.type = "button";
    moveUpButton.textContent = "↑";
    moveUpButton.title = "Move friend earlier";
    moveUpButton.setAttribute("aria-label", `Move ${friend.name} earlier`);
    moveUpButton.disabled = !canReorder || displayedFriends.indexOf(friend) === 0;
    moveUpButton.addEventListener("click", () => moveFriend(friend.id, -1, "up"));
    const moveDownButton = document.createElement("button");
    moveDownButton.className = "friend-action friend-move-down";
    moveDownButton.type = "button";
    moveDownButton.textContent = "↓";
    moveDownButton.title = "Move friend later";
    moveDownButton.setAttribute("aria-label", `Move ${friend.name} later`);
    moveDownButton.disabled = !canReorder || displayedFriends.indexOf(friend) === displayedFriends.length - 1;
    moveDownButton.addEventListener("click", () => moveFriend(friend.id, 1, "down"));
    const pinButton = document.createElement("button");
    pinButton.className = `friend-action friend-pin${friend.pinned ? " is-pinned" : ""}`;
    pinButton.type = "button";
    pinButton.textContent = friend.pinned ? "★" : "☆";
    pinButton.title = friend.pinned ? `Unpin ${friend.name}` : `Pin ${friend.name}`;
    pinButton.setAttribute("aria-label", pinButton.title);
    pinButton.setAttribute("aria-pressed", String(friend.pinned));
    pinButton.addEventListener("click", () => toggleFriendPin(friend.id));
    const reorderActions = document.createElement("div");
    reorderActions.className = "friend-reorder-actions";
    reorderActions.setAttribute("role", "group");
    reorderActions.setAttribute("aria-label", `Reorder ${friend.name}`);
    reorderActions.append(moveUpButton, moveDownButton);
    actions.append(pinButton, editButton, deleteButton, reorderActions);

    const glassPanel = document.createElement("div");
    glassPanel.className = "friend-glass-panel";
    const details = document.createElement("div");
    details.className = "friend-meta";
    const name = document.createElement("h3");
    name.className = "friend-name";
    name.textContent = friend.name;
    const location = document.createElement("p");
    location.className = "friend-location";
    location.textContent = friend.location;
    details.append(name, location);
    const identity = document.createElement("div");
    identity.className = "friend-card-identity";
    identity.append(details);

    const time = document.createElement("p");
    time.className = "friend-time";
    time.dataset.friendTime = "";
    time.textContent = formatTime(friend.zone, now, true);
    const timeRow = document.createElement("div");
    timeRow.className = "friend-time-row";
    const localHour = Number(getFormatter(friend.zone, {
      hour: "numeric",
      hourCycle: "h23",
    }).formatToParts(now).find(({ type }) => type === "hour")?.value ?? 0);
    const isAwake = localHour >= 7 && localHour < 22;
    const wakingStatus = document.createElement("span");
    wakingStatus.className = `friend-waking-status${isAwake ? " is-awake" : ""}`;
    wakingStatus.dataset.friendStatus = "";
    wakingStatus.dataset.awake = String(isAwake);
    wakingStatus.setAttribute("aria-label", isAwake ? "Within typical waking hours" : "Outside typical waking hours");
    wakingStatus.title = isAwake ? "Within typical waking hours" : "Outside typical waking hours";
    wakingStatus.textContent = isAwake ? "●" : "☾";
    timeRow.append(time, wakingStatus);
    const difference = document.createElement("span");
    difference.className = "friend-time-difference";
    difference.dataset.friendDifference = "";
    difference.textContent = formatTimeDifference(
      getZoneOffsetMinutes(friend.zone, now) -
      getZoneOffsetMinutes(Intl.DateTimeFormat().resolvedOptions().timeZone, now),
    );
    const date = document.createElement("p");
    date.className = "friend-date";
    date.dataset.friendDate = "";
    date.textContent = formatDate(friend.zone, now);
    const offset = document.createElement("span");
    offset.className = "friend-offset";
    offset.dataset.friendOffset = "";
    offset.textContent = formatZoneOffset(friend.zone, now);
    const clockDetails = document.createElement("div");
    clockDetails.className = "friend-clock-details";
    clockDetails.append(date, offset, difference);
    const zone = document.createElement("p");
    zone.className = "friend-zone";
    zone.textContent = friend.zone.replaceAll("_", " ");
    glassPanel.append(identity, zone, timeRow, clockDetails);
    glassPanel.append(actions);
    card.append(photoStage, glassPanel);
    friendsGrid.append(card);
  }
}

function animateFriendReorder(previousPositions) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  for (const card of friendsGrid.querySelectorAll(".friend-card")) {
    const previousPosition = previousPositions.get(card.dataset.friendId);
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

function moveFriend(friendId, direction, focusAction) {
  if (friendSort !== "custom" || friendSearchInput.value.trim()) return;
  const orderedFriends = getFriendDisplayOrder(new Date());
  const sourceIndex = orderedFriends.findIndex((friend) => friend.id === friendId);
  const targetIndex = sourceIndex + direction;
  if (sourceIndex < 0 || targetIndex < 0 || targetIndex >= orderedFriends.length) return;

  const previousPositions = new Map(
    [...friendsGrid.querySelectorAll(".friend-card")].map((card) => [
      card.dataset.friendId,
      card.getBoundingClientRect(),
    ]),
  );
  const nextFriends = [...orderedFriends];
  const [friend] = nextFriends.splice(sourceIndex, 1);
  nextFriends.splice(targetIndex, 0, friend);
  if (!persistFriends(nextFriends)) {
    window.alert("Could not save the new friend order because browser storage is unavailable.");
    return;
  }

  friends = nextFriends;
  renderFriends();
  animateFriendReorder(previousPositions);
  friendsGrid.querySelector(`[data-friend-id="${CSS.escape(friendId)}"] .friend-move-${focusAction}`)?.focus();
}

function toggleFriendPin(friendId) {
  const nextFriends = friends.map((friend) =>
    friend.id === friendId ? { ...friend, pinned: !friend.pinned } : friend,
  );
  if (!persistFriends(nextFriends)) {
    window.alert("Could not save this favorite because browser storage is unavailable.");
    return;
  }
  friends = nextFriends;
  renderFriends();
  friendsGrid.querySelector(`[data-friend-id="${CSS.escape(friendId)}"] .friend-pin`)?.focus();
}

let draggedFriendId = null;
let draggedFriendCard = null;
let friendDropTarget = null;

function clearFriendDropIndicator() {
  friendDropTarget?.classList.remove("friend-drop-before", "friend-drop-after");
  friendDropTarget = null;
}

friendsGrid.addEventListener("dragstart", (event) => {
  if (friendSort !== "custom" || friendSearchInput.value.trim()) {
    event.preventDefault();
    return;
  }
  const card = event.target.closest(".friend-card");
  if (!card || event.target.closest("button")) {
    event.preventDefault();
    return;
  }
  draggedFriendId = card.dataset.friendId;
  draggedFriendCard = card;
  card.classList.add("friend-is-dragging");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", draggedFriendId);
});

friendsGrid.addEventListener("dragover", (event) => {
  if (!draggedFriendId) return;
  const card = event.target.closest(".friend-card");
  if (!card || card.dataset.friendId === draggedFriendId) {
    clearFriendDropIndicator();
    return;
  }
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  clearFriendDropIndicator();
  friendDropTarget = card;
  const source = draggedFriendCard.getBoundingClientRect();
  const target = card.getBoundingClientRect();
  const isBefore = source.top < target.bottom && source.bottom > target.top
    ? event.clientX < target.left + target.width / 2
    : event.clientY < target.top + target.height / 2;
  card.classList.add(isBefore ? "friend-drop-before" : "friend-drop-after");
});

friendsGrid.addEventListener("drop", (event) => {
  const card = event.target.closest(".friend-card");
  if (!draggedFriendId || !card || card.dataset.friendId === draggedFriendId) return;
  event.preventDefault();

  const orderedFriends = getFriendDisplayOrder(new Date());
  const sourceIndex = orderedFriends.findIndex((friend) => friend.id === draggedFriendId);
  const targetIndex = orderedFriends.findIndex((friend) => friend.id === card.dataset.friendId);
  if (sourceIndex < 0 || targetIndex < 0) return;
  const source = draggedFriendCard.getBoundingClientRect();
  const target = card.getBoundingClientRect();
  const isBefore = source.top < target.bottom && source.bottom > target.top
    ? event.clientX < target.left + target.width / 2
    : event.clientY < target.top + target.height / 2;
  const insertionIndex = targetIndex + (isBefore ? 0 : 1) - (sourceIndex < targetIndex ? 1 : 0);
  if (insertionIndex === sourceIndex) return;

  const previousPositions = new Map(
    [...friendsGrid.querySelectorAll(".friend-card")].map((item) => [
      item.dataset.friendId,
      item.getBoundingClientRect(),
    ]),
  );
  const nextFriends = [...orderedFriends];
  const [friend] = nextFriends.splice(sourceIndex, 1);
  nextFriends.splice(insertionIndex, 0, friend);
  if (!persistFriends(nextFriends)) {
    window.alert("Could not save the new friend order because browser storage is unavailable.");
    return;
  }
  friends = nextFriends;
  clearFriendDropIndicator();
  draggedFriendCard?.classList.remove("friend-is-dragging");
  draggedFriendId = null;
  draggedFriendCard = null;
  renderFriends();
  animateFriendReorder(previousPositions);
});

friendsGrid.addEventListener("dragend", () => {
  draggedFriendCard?.classList.remove("friend-is-dragging");
  clearFriendDropIndicator();
  draggedFriendId = null;
  draggedFriendCard = null;
});

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
  if (timezoneSort !== "custom") {
    event.preventDefault();
    return;
  }
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
  if (timezoneSort !== "custom") return;
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
  const selectedPlaces = getTimezoneDisplayOrder(now);

  updateCount();
  emptyState.hidden = selectedPlaces.length > 0;
  clockGrid.hidden = selectedPlaces.length === 0;
  clockGrid.replaceChildren();

  for (const place of selectedPlaces) {
    const difference = getDayDifference(place.zone, now);
    const differenceLabel = formatDayDifference(difference);

    const card = document.createElement("article");
    card.className = "clock-card";
    card.draggable = timezoneSort === "custom";
    card.dataset.placeId = place.id;
    card.setAttribute("aria-roledescription", timezoneSort === "custom" ? "Draggable time zone" : "Time zone");
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
  if (timezoneSort === "local-time" || timezoneSort === "offset") {
    const currentMinute = Math.floor(now.getTime() / 60_000);
    if (currentMinute !== lastTimezoneSortMinute) {
      lastTimezoneSortMinute = currentMinute;
      const expectedOrder = getTimezoneDisplayOrder(now).map((place) => place.id);
      const renderedOrder = [...clockGrid.querySelectorAll(".clock-card")]
        .map((card) => card.dataset.placeId);
      if (expectedOrder.join("\0") !== renderedOrder.join("\0")) {
        renderCards();
        return;
      }
    }
  }
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

function updateFriendClocks(now) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (friendSort === "local-time") {
    const currentMinute = Math.floor(now.getTime() / 60_000);
    if (currentMinute !== lastLocalTimeSortMinute) {
      lastLocalTimeSortMinute = currentMinute;
      const expectedOrder = getFriendDisplayOrder(now).map((friend) => friend.id);
      const renderedOrder = [...friendsGrid.querySelectorAll(".friend-card")]
        .map((card) => card.dataset.friendId);
      if (expectedOrder.join("\0") !== renderedOrder.join("\0")) {
        renderFriends(now);
        return;
      }
    }
  }
  const localZoneId = Intl.DateTimeFormat().resolvedOptions().timeZone;
  for (const card of friendsGrid.querySelectorAll(".friend-card")) {
    const friend = friends.find((candidate) => candidate.id === card.dataset.friendId);
    if (!friend) continue;

    const time = card.querySelector("[data-friend-time]");
    const nextTime = formatTime(friend.zone, now, true);
    if (time.textContent !== nextTime) {
      if (!reduceMotion) {
        time.style.opacity = "0.7";
        window.requestAnimationFrame(() => {
          time.style.opacity = "1";
        });
      }
      time.textContent = nextTime;
    }
    card.querySelector("[data-friend-date]").textContent = formatDate(friend.zone, now);
    card.querySelector("[data-friend-offset]").textContent = formatZoneOffset(friend.zone, now);
    const localHour = Number(getFormatter(friend.zone, {
      hour: "numeric",
      hourCycle: "h23",
    }).formatToParts(now).find(({ type }) => type === "hour")?.value ?? 0);
    const isAwake = localHour >= 7 && localHour < 22;
    const wakingStatus = card.querySelector("[data-friend-status]");
    wakingStatus.dataset.awake = String(isAwake);
    wakingStatus.classList.toggle("is-awake", isAwake);
    wakingStatus.setAttribute("aria-label", isAwake ? "Within typical waking hours" : "Outside typical waking hours");
    wakingStatus.title = isAwake ? "Within typical waking hours" : "Outside typical waking hours";
    wakingStatus.textContent = isAwake ? "●" : "☾";
    const difference = getZoneOffsetMinutes(friend.zone, now) - getZoneOffsetMinutes(localZoneId, now);
    card.querySelector("[data-friend-difference]").textContent = formatTimeDifference(difference);
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
  updateFriendClocks(now);
}

function renderFriendZoneOptions() {
  const query = friendZoneSearch.value.trim().toLocaleLowerCase();
  const filteredPlaces = places.filter((place) =>
    `${place.searchTerms} ${place.zone}`.toLocaleLowerCase().includes(query),
  );
  const visiblePlaces = query ? filteredPlaces.slice(0, 80) : filteredPlaces.slice(0, 40);
  friendZoneList.replaceChildren();
  friendZoneEmpty.hidden = filteredPlaces.length > 0;

  for (const place of visiblePlaces) {
    const matchingAlias = [...(timeZoneAliases.get(place.zone) ?? [])]
      .find((alias) => alias.toLocaleLowerCase() === query);
    const optionZone = matchingAlias ?? place.zone;
    const optionCity = matchingAlias ? cityFromTimeZone(matchingAlias) : place.city;
    const option = document.createElement("button");
    option.className = "friend-zone-option";
    option.type = "button";
    option.setAttribute("aria-pressed", String(
      selectedFriendPlace && canonicalTimeZone(selectedFriendPlace.zone) === place.zone,
    ));
    const flag = document.createElement("span");
    flag.className = "city-flag";
    flag.textContent = place.flag;
    flag.setAttribute("aria-hidden", "true");
    const meta = document.createElement("span");
    meta.className = "city-meta";
    const city = document.createElement("span");
    city.className = "city-name";
    city.textContent = optionCity;
    const country = document.createElement("span");
    country.className = "city-country";
    country.textContent = `${place.country} · ${optionZone}`;
    meta.append(city, country);
    const currentTime = document.createElement("span");
    currentTime.className = "zone-current-time";
    currentTime.textContent = formatTime(optionZone);
    option.append(flag, meta, currentTime);
    option.addEventListener("click", () => {
      selectedFriendPlace = { ...place, city: optionCity, zone: optionZone };
      friendLocationInput.value = place.country;
      selectedFriendZone.textContent = `${optionCity}, ${place.country} · ${optionZone}`;
      renderFriendZoneOptions();
    });
    friendZoneList.append(option);
  }
}

function openFriendForm(friendId = null) {
  activeFriendId = friendId;
  const friend = friends.find((candidate) => candidate.id === friendId);
  clearPhotoCrop();
  friendForm.reset();
  friendFormError.hidden = true;
  friendFormError.textContent = "";
  friendZoneSearch.value = "";
  if (friend) {
    friendNameInput.value = friend.name;
    friendLocationInput.value = friend.location;
    const matchedPlace = places.find((place) => canonicalTimeZone(place.zone) === canonicalTimeZone(friend.zone));
    selectedFriendPlace = matchedPlace
      ? { ...matchedPlace, zone: friend.zone, city: cityFromTimeZone(friend.zone) }
      : null;
    document.querySelector("#friend-dialog-title").textContent = "Edit friend";
    friendForm.querySelector('[type="submit"]').textContent = "Save changes";
  } else {
    selectedFriendPlace = null;
    document.querySelector("#friend-dialog-title").textContent = "Add a friend";
    friendForm.querySelector('[type="submit"]').textContent = "Save profile";
  }
  selectedFriendZone.textContent = selectedFriendPlace
    ? `${selectedFriendPlace.city}, ${selectedFriendPlace.country} · ${selectedFriendPlace.zone}`
    : "Choose a place from the results below.";
  if (friend?.photo) {
    loadPhotoForCropping(friend.photo).catch((error) => {
      friendFormError.textContent = error instanceof Error
        ? error.message
        : "Could not load this profile photo for editing.";
      friendFormError.hidden = false;
    });
  }
  renderFriendZoneOptions();
  friendDialog.showModal();
  friendNameInput.focus();
}

function clearPhotoCrop() {
  if (cropImageUrl) URL.revokeObjectURL(cropImageUrl);
  cropImageUrl = null;
  cropImage = null;
  cropPointer = null;
  cropScale = 1;
  cropLeft = 0;
  cropTop = 0;
  photoCropImage.removeAttribute("src");
  photoCropEditor.hidden = true;
  photoZoomInput.value = "1";
  photoZoomValue.textContent = "100%";
}

function constrainPhotoCrop() {
  if (!cropImage) return;
  const frame = photoCropFrame.getBoundingClientRect();
  const imageWidth = cropImage.naturalWidth * cropScale;
  const imageHeight = cropImage.naturalHeight * cropScale;
  cropLeft = Math.min(0, Math.max(frame.width - imageWidth, cropLeft));
  cropTop = Math.min(0, Math.max(frame.height - imageHeight, cropTop));
  photoCropImage.style.width = `${imageWidth}px`;
  photoCropImage.style.height = `${imageHeight}px`;
  photoCropImage.style.left = `${cropLeft}px`;
  photoCropImage.style.top = `${cropTop}px`;
}

function setPhotoZoom(zoom, preserveCenter = true) {
  if (!cropImage) return;
  const frame = photoCropFrame.getBoundingClientRect();
  const focusX = (frame.width / 2 - cropLeft) / cropScale;
  const focusY = (frame.height / 2 - cropTop) / cropScale;
  cropScale = Math.max(frame.width / cropImage.naturalWidth, frame.height / cropImage.naturalHeight) * zoom;
  cropLeft = preserveCenter ? frame.width / 2 - focusX * cropScale : (frame.width - cropImage.naturalWidth * cropScale) / 2;
  cropTop = preserveCenter ? frame.height / 2 - focusY * cropScale : (frame.height - cropImage.naturalHeight * cropScale) / 2;
  photoZoomValue.textContent = `${Math.round(zoom * 100)}%`;
  constrainPhotoCrop();
}

async function loadPhotoForCropping(source) {
  const isFile = source instanceof File;
  if (isFile && !source.type.startsWith("image/")) {
    throw new Error("Choose an image file for the profile photo.");
  }
  if (isFile && source.size > 15 * 1024 * 1024) {
    throw new Error("That image is too large. Choose a photo under 15 MB.");
  }

  const nextUrl = isFile ? URL.createObjectURL(source) : source;
  try {
    const image = new Image();
    image.src = nextUrl;
    await image.decode();
    if (cropImageUrl) URL.revokeObjectURL(cropImageUrl);
    cropImageUrl = isFile ? nextUrl : null;
    cropImage = image;
    photoCropImage.src = nextUrl;
    photoCropEditor.hidden = false;
    photoZoomInput.value = "1";
    setPhotoZoom(1, false);
  } catch (error) {
    if (isFile) URL.revokeObjectURL(nextUrl);
    console.warn("Could not process uploaded friend photo.", error);
    throw new Error("Could not read that photo. Try a different image file.");
  }
}

async function exportPhotoCrop() {
  if (!cropImage) return null;
  const frame = photoCropFrame.getBoundingClientRect();
  const sourceX = -cropLeft / cropScale;
  const sourceY = -cropTop / cropScale;
  const sourceWidth = frame.width / cropScale;
  const sourceHeight = frame.height / cropScale;
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 610;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Your browser could not prepare that image.");
  context.drawImage(
    cropImage,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight,
    0,
    0,
    canvas.width,
    canvas.height,
  );
  const dataUrl = canvas.toDataURL("image/jpeg", 0.84);
  if (dataUrl.length > 700_000) {
    throw new Error("That photo is still too large to save. Choose a smaller image.");
  }
  return dataUrl;
}

friendPhotoInput.addEventListener("change", async () => {
  const file = friendPhotoInput.files[0];
  if (!file) return;
  friendFormError.hidden = true;
  try {
    await loadPhotoForCropping(file);
  } catch (error) {
    friendPhotoInput.value = "";
    friendFormError.textContent = error instanceof Error
      ? error.message
      : "Could not read that photo. Try a different image file.";
    friendFormError.hidden = false;
  }
});

photoZoomInput.addEventListener("input", () => {
  setPhotoZoom(Number(photoZoomInput.value));
});

photoCropReset.addEventListener("click", () => {
  photoZoomInput.value = "1";
  setPhotoZoom(1, false);
});

photoCropFrame.addEventListener("pointerdown", (event) => {
  if (!cropImage) return;
  cropPointer = {
    id: event.pointerId,
    x: event.clientX,
    y: event.clientY,
    left: cropLeft,
    top: cropTop,
  };
  photoCropFrame.setPointerCapture(event.pointerId);
});

photoCropFrame.addEventListener("pointermove", (event) => {
  if (!cropPointer || cropPointer.id !== event.pointerId) return;
  cropLeft = cropPointer.left + event.clientX - cropPointer.x;
  cropTop = cropPointer.top + event.clientY - cropPointer.y;
  constrainPhotoCrop();
});

photoCropFrame.addEventListener("pointerup", (event) => {
  if (cropPointer?.id === event.pointerId) cropPointer = null;
});
photoCropFrame.addEventListener("pointercancel", () => {
  cropPointer = null;
});

window.addEventListener("resize", () => {
  if (cropImage) setPhotoZoom(Number(photoZoomInput.value));
});

friendForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  friendFormError.hidden = true;
  friendFormError.textContent = "";
  const name = friendNameInput.value.trim();
  const location = friendLocationInput.value.trim();
  if (!name || name.length > 50) {
    friendFormError.textContent = "Enter a name of 1 to 50 characters.";
    friendFormError.hidden = false;
    friendNameInput.focus();
    return;
  }
  if (!location || location.length > 80) {
    friendFormError.textContent = "Enter a country or location of 1 to 80 characters.";
    friendFormError.hidden = false;
    friendLocationInput.focus();
    return;
  }
  if (!selectedFriendPlace || !canonicalTimeZone(selectedFriendPlace.zone)) {
    friendFormError.textContent = "Search for and select a valid time zone.";
    friendFormError.hidden = false;
    friendZoneSearch.focus();
    return;
  }

  const submitButton = friendForm.querySelector('[type="submit"]');
  submitButton.disabled = true;
  try {
    const existing = friends.find((friend) => friend.id === activeFriendId);
    const photo = cropImage ? await exportPhotoCrop() : existing?.photo ?? null;
    const updatedFriend = {
      id: existing?.id ?? crypto.randomUUID(),
      name,
      location,
      zone: selectedFriendPlace.zone,
      photo,
      pinned: existing?.pinned ?? false,
    };
    const nextFriends = existing
      ? friends.map((friend) => friend.id === existing.id ? updatedFriend : friend)
      : [...friends, updatedFriend];
    if (!persistFriends(nextFriends)) {
      friendFormError.textContent = "Could not save this profile. Browser storage may be full; try a smaller photo.";
      friendFormError.hidden = false;
      return;
    }
    friends = nextFriends;
    friendDialog.close();
    renderFriends();
  } catch (error) {
    friendFormError.textContent = error instanceof Error
      ? error.message
      : "Could not save this profile. Please try again.";
    friendFormError.hidden = false;
  } finally {
    submitButton.disabled = false;
  }
});

function deleteFriend(friendId) {
  const friend = friends.find((candidate) => candidate.id === friendId);
  if (!friend || !window.confirm(`Remove ${friend.name} from My friends?`)) return;
  const nextFriends = friends.filter((candidate) => candidate.id !== friendId);
  if (!persistFriends(nextFriends)) {
    window.alert("Could not remove this profile because browser storage is unavailable.");
    return;
  }
  friends = nextFriends;
  renderFriends();
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

timezonesTab.addEventListener("click", () => setActiveTab("timezones"));
friendsTab.addEventListener("click", () => setActiveTab("friends"));
timezoneSortSelect.addEventListener("change", () => setTimezoneSort(timezoneSortSelect.value));
friendGridViewButton.addEventListener("click", () => setFriendView("grid"));
friendListViewButton.addEventListener("click", () => setFriendView("list"));
friendSearchInput.addEventListener("input", () => renderFriends());
friendSortSelect.addEventListener("change", () => setFriendSort(friendSortSelect.value));
for (const button of friendSizeButtons) {
  button.addEventListener("click", () => setFriendSize(button.dataset.friendSize));
  button.addEventListener("keydown", (event) => {
    const index = friendSizeButtons.indexOf(button);
    const nextIndex = event.key === "ArrowRight" ? (index + 1) % friendSizeButtons.length
      : event.key === "ArrowLeft" ? (index - 1 + friendSizeButtons.length) % friendSizeButtons.length
        : event.key === "Home" ? 0
          : event.key === "End" ? friendSizeButtons.length - 1
            : -1;
    if (nextIndex < 0) return;
    event.preventDefault();
    const nextButton = friendSizeButtons[nextIndex];
    setFriendSize(nextButton.dataset.friendSize);
    nextButton.focus();
  });
}
friendResetButton.addEventListener("click", () => {
  friendView = "grid";
  friendSize = "standard";
  friendSort = "custom";
  friendSearchInput.value = "";
  renderFriendView();
  renderFriendPreferences();
  renderFriends();
  const saved = [
    saveFriendPreference(friendViewStorageKey, friendView),
    saveFriendPreference(friendSizeStorageKey, friendSize),
    saveFriendPreference(friendSortStorageKey, friendSort),
  ].every(Boolean);
  friendPreferenceStatus.textContent = saved
    ? "Friend display settings reset to defaults."
    : "Settings reset for now, but could not be saved in this browser.";
});
for (const tab of [timezonesTab, friendsTab]) {
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const nextTab = event.key === "Home" || event.key === "ArrowLeft"
      ? timezonesTab
      : friendsTab;
    setActiveTab(nextTab === friendsTab ? "friends" : "timezones");
    nextTab.focus();
  });
}
addFriendButton.addEventListener("click", () => openFriendForm());
document.querySelector("#empty-add-friend").addEventListener("click", () => openFriendForm());
document.querySelector("#close-friend-dialog").addEventListener("click", () => friendDialog.close());
document.querySelector("#cancel-friend").addEventListener("click", () => friendDialog.close());
friendDialog.addEventListener("click", (event) => {
  if (event.target === friendDialog) friendDialog.close();
});
friendDialog.addEventListener("close", clearPhotoCrop);
friendZoneSearch.addEventListener("input", renderFriendZoneOptions);

document.querySelector("#close-picker").addEventListener("click", () => pickerDialog.close());
format12hButton.addEventListener("click", () => setTimeFormat("12h"));
format24hButton.addEventListener("click", () => setTimeFormat("24h"));
pickerDialog.addEventListener("click", (event) => {
  if (event.target === pickerDialog) pickerDialog.close();
});
searchInput.addEventListener("input", renderPicker);
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !pickerDialog.open && !friendDialog.open &&
    !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
    event.preventDefault();
    document.querySelector("#open-picker").click();
  }
});

updateLocalClock();
timezoneSortSelect.value = timezoneSort;
renderCards();
renderFriendView();
renderFriendPreferences();
renderFriends();
renderTimeFormat();
renderPicker();
window.setInterval(updateLocalClock, 1000);
window.setInterval(() => {
  if (pickerDialog.open) renderPicker();
}, 30_000);
