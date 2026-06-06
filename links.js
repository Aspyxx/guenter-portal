const guenterLinks = [
    {
        kategorie: "Region & Lengerich",
        icon: "🏡",
        titel: "Stadt Lengerich",
        beschreibung: "Offizielle Stadtseite von Lengerich.",
        url: "https://www.lengerich.de/"
    },
    {
        kategorie: "Region & Lengerich",
        icon: "🚓",
        titel: "Blaulichtmeldungen Lengerich",
        beschreibung: "Polizeimeldungen und Blaulicht aus der Region.",
        url: "https://www.presseportal.de/blaulicht/r/Lengerich"
    },
    {
        kategorie: "Region & Lengerich",
        icon: "🏃",
        titel: "TV Lengerich",
        beschreibung: "Turnverein Lengerich.",
        url: "https://www.tvlengerich.de/"
    },

    {
        kategorie: "Wetter & Warnungen",
        icon: "🌦️",
        titel: "Wetter Lengerich",
        beschreibung: "Wetterbericht für Lengerich.",
        url: "https://www.wetter.de/deutschland/wetter-lengerich-18220826.html"
    },
    {
        kategorie: "Wetter & Warnungen",
        icon: "⚠️",
        titel: "DWD Warnwetter",
        beschreibung: "Amtliche Wetterwarnungen.",
        url: "https://www.dwd.de/DE/wetter/warnungen_gemeinden/warnWetter_node.html"
    },
    {
        kategorie: "Wetter & Warnungen",
        icon: "🌊",
        titel: "Gezeiten Wilhelmshaven",
        beschreibung: "Gezeiten und Wasserstände.",
        url: "https://gezeitenfisch.com/de/niedersachsen/wilhelmshaven-neuer-vorhafen#_gezeiten"
    },

    {
        kategorie: "Fußball & Sport",
        icon: "⚽",
        titel: "Bundesliga",
        beschreibung: "Offizielle Bundesliga-Seite.",
        url: "https://www.bundesliga.com/de/bundesliga"
    },
    {
        kategorie: "Fußball & Sport",
        icon: "⚽",
        titel: "Sport1 Bundesliga",
        beschreibung: "Bundesliga-News bei Sport1.",
        url: "https://www.sport1.de/fussball/bundesliga"
    },
    {
        kategorie: "Fußball & Sport",
        icon: "🔷",
        titel: "HSV",
        beschreibung: "Offizielle Seite des HSV.",
        url: "https://www.hsv.de/uebersicht"
    },

    {
        kategorie: "Karten & Welt",
        icon: "✈️",
        titel: "Flightradar24",
        beschreibung: "Flugzeuge live verfolgen.",
        url: "https://www.flightradar24.com/52.17,7.9/9"
    },
    {
        kategorie: "Karten & Welt",
        icon: "🚢",
        titel: "MarineTraffic",
        beschreibung: "Schiffe weltweit live verfolgen.",
        url: "https://www.marinetraffic.com/"
    },
    {
        kategorie: "Karten & Welt",
        icon: "🌳",
        titel: "Waldkarte der Welt",
        beschreibung: "Globale Waldkarte.",
        url: "https://geoservice.dlr.de/web/maps/tdm:forest"
    },
    {
        kategorie: "Karten & Welt",
        icon: "🌍",
        titel: "Dynamic World",
        beschreibung: "Veränderungen der Erde ansehen.",
        url: "https://www.dynamicworld.app/explore/"
    },

    {
        kategorie: "Weltall & Technik",
        icon: "🚀",
        titel: "NASA",
        beschreibung: "Offizielle NASA-Seite.",
        url: "https://www.nasa.gov/"
    },
    {
        kategorie: "Weltall & Technik",
        icon: "🛰️",
        titel: "ISS Livetracking",
        beschreibung: "Position der ISS live verfolgen.",
        url: "https://www.lizard-tail.com/isana/tracking/"
    },
    {
        kategorie: "Weltall & Technik",
        icon: "🌌",
        titel: "Starlink finden",
        beschreibung: "Starlink-Satelliten am Himmel finden.",
        url: "https://findstarlink.com/"
    },

    {
        kategorie: "KI & Zukunft",
        icon: "🤖",
        titel: "You.com",
        beschreibung: "KI-Suche ohne große Einstiegshürde.",
        url: "https://you.com/"
    },
    {
        kategorie: "KI & Zukunft",
        icon: "🤖",
        titel: "ChatGPT",
        beschreibung: "KI-Assistent von OpenAI.",
        url: "https://chat.openai.com/"
    },

    {
        kategorie: "Nachrichten & Meinungen",
        icon: "📰",
        titel: "Tagesschau",
        beschreibung: "Aktuelle Nachrichten.",
        url: "https://www.tagesschau.de/"
    },
    {
        kategorie: "Nachrichten & Meinungen",
        icon: "📰",
        titel: "Neue Zürcher Zeitung",
        beschreibung: "Nachrichten und Analysen.",
        url: "https://www.nzz.ch/"
    },
    {
        kategorie: "Nachrichten & Meinungen",
        icon: "📰",
        titel: "Hasepost",
        beschreibung: "Nachrichten aus Osnabrück.",
        url: "https://www.hasepost.de/"
    },

    {
        kategorie: "Wirtschaft & Politik",
        icon: "📊",
        titel: "Dashboard Deutschland",
        beschreibung: "Wirtschaftliche Kennzahlen für Deutschland.",
        url: "https://www.dashboard-deutschland.de/pulsmesser_wirtschaft/pulsmesser_wirtschaft_quarterly"
    },
    {
        kategorie: "Wirtschaft & Politik",
        icon: "📊",
        titel: "ifo Institut",
        beschreibung: "Wirtschaftsforschung und Konjunktur.",
        url: "https://www.ifo.de/"
    },
    {
        kategorie: "Wirtschaft & Politik",
        icon: "💶",
        titel: "Mission Money",
        beschreibung: "Finanz- und Wirtschaftsthemen.",
        url: "https://mission-money.de/"
    },

    {
        kategorie: "Familie & Alltag",
        icon: "👴",
        titel: "Enkelkind",
        beschreibung: "Ideen rund um Großeltern und Enkel.",
        url: "https://www.enkelkind.de/"
    },
    {
        kategorie: "Familie & Alltag",
        icon: "👵",
        titel: "Hallo Oma",
        beschreibung: "Themen für Großeltern.",
        url: "https://hallo-oma.de/"
    },

    {
        kategorie: "Südtirol",
        icon: "🏔️",
        titel: "Südtirol offiziell",
        beschreibung: "Offizielle Südtirol-Seite.",
        url: "https://www.suedtirol.info/de"
    },
    {
        kategorie: "Südtirol",
        icon: "🏡",
        titel: "Falserhof",
        beschreibung: "Urlaub in Südtirol.",
        url: "http://www.falserhof-suedtirol.com/"
    },
    {
        kategorie: "Südtirol",
        icon: "🏡",
        titel: "Prackfiedererhof",
        beschreibung: "Urlaub in Villanders.",
        url: "http://www.prackfiedererhof.it/"
    },
    {
    kategorie: "Weltall & Technik",
    icon: "🪐",
    titel: "Solar System Scope",
    beschreibung: "Interaktives 3D-Sonnensystem mit Planeten, Monden und Sternen.",
    url: "https://www.solarsystemscope.com/"
},
    {
    kategorie: "Karten & Welt",
    icon: "✈️",
    titel: "Flightradar24",
    beschreibung: "Flugzeuge weltweit live verfolgen.",
    url: "https://www.flightradar24.com/"
},
{
    kategorie: "Karten & Welt",
    icon: "🚢",
    titel: "MarineTraffic",
    beschreibung: "Schiffe weltweit live verfolgen.",
    url: "https://www.marinetraffic.com/"
},
{
    kategorie: "Karten & Welt",
    icon: "🌳",
    titel: "Waldkarte der Welt",
    beschreibung: "Globale Waldflächen ansehen.",
    url: "https://geoservice.dlr.de/web/maps/tdm:forest"
},
{
    kategorie: "Karten & Welt",
    icon: "🌍",
    titel: "Dynamic World",
    beschreibung: "Veränderungen der Erde und Landnutzung ansehen.",
    url: "https://www.dynamicworld.app/explore/"
},
{
    kategorie: "Karten & Welt",
    icon: "📷",
    titel: "Weltweite Webcams",
    beschreibung: "Live-Webcams aus aller Welt.",
    url: "https://www.skylinewebcams.com/"
},
    ,
{
    kategorie: "Energie & Strom",
    icon: "⚡",
    titel: "Electricity Maps",
    beschreibung: "Strommix und CO₂-Intensität in Deutschland und Europa.",
    url: "https://app.electricitymaps.com/zone/DE?lang=de"
},
{
    kategorie: "Energie & Strom",
    icon: "⚡",
    titel: "SMARD",
    beschreibung: "Offizielle Strommarktdaten der Bundesnetzagentur.",
    url: "https://www.smard.de/home"
},
{
    kategorie: "Energie & Strom",
    icon: "🔌",
    titel: "ENTSO-E Stromnetzkarte",
    beschreibung: "Europäische Stromnetzdaten und Netzkarte.",
    url: "https://www.entsoe.eu/data/map/"
},
{
    kategorie: "Energie & Strom",
    icon: "📊",
    titel: "Energy-Charts",
    beschreibung: "Stromerzeugung, Verbrauch und Preise in Deutschland.",
    url: "https://www.energy-charts.info/index.html?l=de&c=DE"
},
{
    kategorie: "Energie & Strom",
    icon: "🗼",
    titel: "Stromnetzkarte",
    beschreibung: "Stromleitungen und Netzinfrastruktur auf einer Karte.",
    url: "https://www.flosm.org/de/Stromnetz.html"
},
    ,
{
    kategorie: "Wetter & Warnungen",
    icon: "🌦️",
    titel: "WetterOnline",
    beschreibung: "Aktuelles Wetter und Vorhersagen.",
    url: "https://www.wetteronline.de/"
},
{
    kategorie: "Wetter & Warnungen",
    icon: "⚠️",
    titel: "DWD Warnlage Deutschland",
    beschreibung: "Amtliche Wetterwarnungen des Deutschen Wetterdienstes.",
    url: "https://www.dwd.de/DE/wetter/warnungen/warnWetter_node.html"
},
{
    kategorie: "Wetter & Warnungen",
    icon: "🌩️",
    titel: "LightningMaps",
    beschreibung: "Gewitter und Blitze live verfolgen.",
    url: "https://www.lightningmaps.org/"
},
{
    kategorie: "Wetter & Warnungen",
    icon: "🌊",
    titel: "Hochwasserportal Deutschland",
    beschreibung: "Aktuelle Hochwasserinformationen.",
    url: "https://www.hochwasserzentralen.de/"
},
{
    kategorie: "Wetter & Warnungen",
    icon: "🔥",
    titel: "Waldbrandgefahrenindex",
    beschreibung: "Aktuelle Waldbrandgefahr in Deutschland.",
    url: "https://www.dwd.de/DE/leistungen/waldbrandgef/waldbrandgef.html"
},
{
    kategorie: "Wetter & Warnungen",
    icon: "🛰️",
    titel: "Sat24 Wetter-Satellit",
    beschreibung: "Live-Satellitenbilder Europas.",
    url: "https://www.sat24.com/de"
},
{
    kategorie: "Wetter & Warnungen",
    icon: "🌪️",
    titel: "Unwetterzentrale",
    beschreibung: "Private Unwetterwarnungen und Wetterkarten.",
    url: "https://www.unwetterzentrale.de/"
}
];
