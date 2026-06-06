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
},
    ,
{
    kategorie: "Nachrichten & Region",
    icon: "📰",
    titel: "Tagesschau",
    beschreibung: "Aktuelle Nachrichten aus Deutschland und der Welt.",
    url: "https://www.tagesschau.de/"
},
{
    kategorie: "Nachrichten & Region",
    icon: "📺",
    titel: "NDR Niedersachsen",
    beschreibung: "Nachrichten aus Niedersachsen.",
    url: "https://www.ndr.de/nachrichten/niedersachsen/"
},
{
    kategorie: "Nachrichten & Region",
    icon: "🏙️",
    titel: "Hasepost",
    beschreibung: "Nachrichten aus Osnabrück.",
    url: "https://www.hasepost.de/"
},
{
    kategorie: "Nachrichten & Region",
    icon: "🗞️",
    titel: "NOZ",
    beschreibung: "Neue Osnabrücker Zeitung.",
    url: "https://www.noz.de/"
},
{
    kategorie: "Nachrichten & Region",
    icon: "🚓",
    titel: "Presseportal Blaulicht",
    beschreibung: "Polizei- und Blaulichtmeldungen.",
    url: "https://www.presseportal.de/blaulicht/"
},
{
    kategorie: "Nachrichten & Region",
    icon: "🏡",
    titel: "Stadt Lengerich",
    beschreibung: "Offizielle Meldungen der Stadt.",
    url: "https://www.lengerich.de/"
},
{
    kategorie: "Nachrichten & Region",
    icon: "📅",
    titel: "Osnabrücker Land",
    beschreibung: "Veranstaltungen und Region.",
    url: "https://www.osnabruecker-land.de/"
},
{
    kategorie: "Nachrichten & Region",
    icon: "🚗",
    titel: "ADAC Verkehr",
    beschreibung: "Aktuelle Verkehrslage und Staus.",
    url: "https://www.adac.de/verkehr/"
},
    ,
{
    kategorie: "Politik & Demokratie",
    icon: "🏛️",
    titel: "Deutscher Bundestag",
    beschreibung: "Gesetze, Debatten und Informationen aus dem Bundestag.",
    url: "https://www.bundestag.de/"
},
{
    kategorie: "Politik & Demokratie",
    icon: "🏛️",
    titel: "Bundesrat",
    beschreibung: "Ländervertretung der Bundesrepublik Deutschland.",
    url: "https://www.bundesrat.de/"
},
{
    kategorie: "Politik & Demokratie",
    icon: "🗳️",
    titel: "Bundeswahlleiter",
    beschreibung: "Wahlen und Wahlergebnisse in Deutschland.",
    url: "https://www.bundeswahlleiterin.de/"
},
{
    kategorie: "Politik & Demokratie",
    icon: "⚖️",
    titel: "Bundesverfassungsgericht",
    beschreibung: "Urteile und Entscheidungen des höchsten Gerichts.",
    url: "https://www.bundesverfassungsgericht.de/"
},
{
    kategorie: "Politik & Demokratie",
    icon: "📊",
    titel: "Dashboard Deutschland",
    beschreibung: "Aktuelle Kennzahlen zu Wirtschaft und Gesellschaft.",
    url: "https://www.dashboard-deutschland.de/"
},
{
    kategorie: "Politik & Demokratie",
    icon: "📈",
    titel: "Statistisches Bundesamt",
    beschreibung: "Offizielle Statistiken für Deutschland.",
    url: "https://www.destatis.de/"
},
{
    kategorie: "Politik & Demokratie",
    icon: "✍️",
    titel: "Petitionen Bundestag",
    beschreibung: "Petitionen an den Deutschen Bundestag.",
    url: "https://epetitionen.bundestag.de/"
},
    ,
{
    kategorie: "Wissen, Geschichte & Entdecken",
    icon: "📚",
    titel: "Wikipedia",
    beschreibung: "Freies Nachschlagewerk für fast alle Themen.",
    url: "https://de.wikipedia.org/"
},
{
    kategorie: "Wissen, Geschichte & Entdecken",
    icon: "🌍",
    titel: "Planet Wissen",
    beschreibung: "Wissen zu Natur, Geschichte, Technik und Gesellschaft.",
    url: "https://www.planet-wissen.de/"
},
{
    kategorie: "Wissen, Geschichte & Entdecken",
    icon: "🦕",
    titel: "National Geographic",
    beschreibung: "Natur, Wissenschaft und Entdeckungen.",
    url: "https://www.nationalgeographic.de/"
},
{
    kategorie: "Wissen, Geschichte & Entdecken",
    icon: "🏛️",
    titel: "Deutsches Historisches Museum",
    beschreibung: "Geschichte Deutschlands und Europas.",
    url: "https://www.dhm.de/"
},
{
    kategorie: "Wissen, Geschichte & Entdecken",
    icon: "⚙️",
    titel: "Deutsches Museum",
    beschreibung: "Technik, Wissenschaft und Innovation.",
    url: "https://www.deutsches-museum.de/"
},
{
    kategorie: "Wissen, Geschichte & Entdecken",
    icon: "🗺️",
    titel: "Google Arts & Culture",
    beschreibung: "Museen, Kunstwerke und historische Sammlungen weltweit.",
    url: "https://artsandculture.google.com/"
},
{
    kategorie: "Wissen, Geschichte & Entdecken",
    icon: "📜",
    titel: "Bundesarchiv",
    beschreibung: "Historische Dokumente und Bilder Deutschlands.",
    url: "https://www.bundesarchiv.de/"
},
{
    kategorie: "Wissen, Geschichte & Entdecken",
    icon: "🛰️",
    titel: "David Rumsey Historical Maps",
    beschreibung: "Historische Landkarten aus aller Welt.",
    url: "https://www.davidrumsey.com/"
},
    ,
{
    kategorie: "Live-Karten & Echtzeitdaten",
    icon: "🌦️",
    titel: "Windy",
    beschreibung: "Interaktive Wetterkarte mit Wind, Regen und Wolken.",
    url: "https://www.windy.com/"
},
{
    kategorie: "Live-Karten & Echtzeitdaten",
    icon: "🌍",
    titel: "Ventusky",
    beschreibung: "Wetter, Temperaturen und Niederschlag weltweit.",
    url: "https://www.ventusky.com/"
},
{
    kategorie: "Live-Karten & Echtzeitdaten",
    icon: "🌀",
    titel: "Earth Nullschool",
    beschreibung: "Globale Wind-, Wetter- und Meeresströmungen live.",
    url: "https://earth.nullschool.net/"
},
{
    kategorie: "Live-Karten & Echtzeitdaten",
    icon: "⚡",
    titel: "Lightning Maps",
    beschreibung: "Blitze und Gewitter live verfolgen.",
    url: "https://www.lightningmaps.org/"
},
{
    kategorie: "Live-Karten & Echtzeitdaten",
    icon: "✈️",
    titel: "Flightradar24",
    beschreibung: "Flugzeuge weltweit live verfolgen.",
    url: "https://www.flightradar24.com/"
},
{
    kategorie: "Live-Karten & Echtzeitdaten",
    icon: "🚢",
    titel: "MarineTraffic",
    beschreibung: "Schiffe weltweit live verfolgen.",
    url: "https://www.marinetraffic.com/"
},
{
    kategorie: "Live-Karten & Echtzeitdaten",
    icon: "🛰️",
    titel: "ISS Live Tracking",
    beschreibung: "Aktuelle Position der ISS.",
    url: "https://www.lizard-tail.com/isana/tracking/"
},
{
    kategorie: "Live-Karten & Echtzeitdaten",
    icon: "🪐",
    titel: "Solar System Scope",
    beschreibung: "Interaktives 3D-Sonnensystem.",
    url: "https://www.solarsystemscope.com/"
},
    ,
{
    kategorie: "Politik & Parteien",
    icon: "🏛️",
    titel: "CDU",
    beschreibung: "Offizielle Webseite der CDU.",
    url: "https://www.cdu.de/"
},
{
    kategorie: "Politik & Parteien",
    icon: "🏛️",
    titel: "CSU",
    beschreibung: "Offizielle Webseite der CSU.",
    url: "https://www.csu.de/"
},
{
    kategorie: "Politik & Parteien",
    icon: "🌹",
    titel: "SPD",
    beschreibung: "Offizielle Webseite der SPD.",
    url: "https://www.spd.de/"
},
{
    kategorie: "Politik & Parteien",
    icon: "💛",
    titel: "FDP",
    beschreibung: "Offizielle Webseite der FDP.",
    url: "https://www.fdp.de/"
},
{
    kategorie: "Politik & Parteien",
    icon: "🌻",
    titel: "Bündnis 90/Die Grünen",
    beschreibung: "Offizielle Webseite der Grünen.",
    url: "https://www.gruene.de/"
},
{
    kategorie: "Politik & Parteien",
    icon: "🔴",
    titel: "Die Linke",
    beschreibung: "Offizielle Webseite der Partei Die Linke.",
    url: "https://www.die-linke.de/start/"
},
{
    kategorie: "Politik & Parteien",
    icon: "🔵",
    titel: "AfD",
    beschreibung: "Offizielle Webseite der AfD.",
    url: "https://www.afd.de/"
},
{
    kategorie: "Politik & Parteien",
    icon: "🟣",
    titel: "BSW",
    beschreibung: "Offizielle Webseite Bündnis Sahra Wagenknecht.",
    url: "https://bsw-vg.de/"
},
{
    kategorie: "Politik & Parteien",
    icon: "🟠",
    titel: "Freie Wähler",
    beschreibung: "Offizielle Webseite der Freien Wähler.",
    url: "https://www.freiewaehler.eu/"
},
{
    kategorie: "Politik & Parteien",
    icon: "🇪🇺",
    titel: "Volt Deutschland",
    beschreibung: "Offizielle Webseite von Volt Deutschland.",
    url: "https://voltdeutschland.org/"
},
    ,
{
    kategorie: "Familie, Oma & Opa",
    icon: "👴",
    titel: "Enkelkind",
    beschreibung: "Ideen und Informationen rund um Großeltern und Enkel.",
    url: "https://www.enkelkind.de/"
},
{
    kategorie: "Familie, Oma & Opa",
    icon: "👵",
    titel: "Hallo Oma",
    beschreibung: "Informationen und Inspirationen für Großmütter.",
    url: "https://hallo-oma.de/"
},
{
    kategorie: "Familie, Oma & Opa",
    icon: "👴",
    titel: "Hallo Opa",
    beschreibung: "Informationen und Inspirationen für Großväter.",
    url: "https://hallo-opa.de/"
},
{
    kategorie: "Familie, Oma & Opa",
    icon: "👴",
    titel: "Großvater.de",
    beschreibung: "Themen und Ideen für Großväter.",
    url: "https://grossvater.de/"
},
{
    kategorie: "Familie, Oma & Opa",
    icon: "🏫",
    titel: "Bernhard-Overberg-Schule",
    beschreibung: "Schulseite der Bernhard-Overberg-Schule.",
    url: "http://gs-overbergschule.de/"
},
{
    kategorie: "Familie, Oma & Opa",
    icon: "🏡",
    titel: "KiTa Lengerich",
    beschreibung: "Kindertageseinrichtung Kindervilla in Lengerich.",
    url: "https://www.awo-msl-re.de/awo-vor-ort/kreis-steinfurt/vo-lengerich/vo-kita-lengerich/vo-kita-fz-rahestrasse/kindertageseinrichtung-kindervilla.html"
},
{
    kategorie: "Familie, Oma & Opa",
    icon: "🏃",
    titel: "Osnabrücker Sportclub",
    beschreibung: "Sportverein in Osnabrück.",
    url: "https://www.osnabruecker-sportclub.de/"
},
{
    kategorie: "Familie, Oma & Opa",
    icon: "🎵",
    titel: "Musikschule Osnabrück",
    beschreibung: "Musikschule der Stadt Osnabrück.",
    url: "https://www.osnabrueck.de/musikschule/start/"
},
{
    kategorie: "Familie, Oma & Opa",
    icon: "💡",
    titel: "Geniale Tricks",
    beschreibung: "Alltagstipps und praktische Ideen auf YouTube.",
    url: "https://www.youtube.com/c/GenialeTricks-de/videos"
},
    ,
{
    kategorie: "Wissenschaft & Lernen",
    icon: "🧪",
    titel: "Terra X",
    beschreibung: "Geschichte, Natur, Wissenschaft und Technik.",
    url: "https://www.zdf.de/dokumentation/terra-x"
},
{
    kategorie: "Wissenschaft & Lernen",
    icon: "🔬",
    titel: "maiLab",
    beschreibung: "Wissenschaft verständlich erklärt.",
    url: "https://www.youtube.com/@maiLab"
},
{
    kategorie: "Wissenschaft & Lernen",
    icon: "🚀",
    titel: "Clixoom Science & Future",
    beschreibung: "Wissenschaft, Raumfahrt und Zukunftstechnologien.",
    url: "https://www.youtube.com/@Clixoom"
},
{
    kategorie: "Wissenschaft & Lernen",
    icon: "📈",
    titel: "Christian Rieck",
    beschreibung: "Wirtschaft, Spieltheorie und aktuelle Entwicklungen.",
    url: "https://www.youtube.com/@ProfRieck"
},
{
    kategorie: "Wissenschaft & Lernen",
    icon: "🧐",
    titel: "Mythen Metzger",
    beschreibung: "Faktencheck und Analyse aktueller Themen.",
    url: "https://www.youtube.com/@MythenMetzger"
},
{
    kategorie: "Wissenschaft & Lernen",
    icon: "🌍",
    titel: "Planet Wissen",
    beschreibung: "Wissensportal von WDR und SWR.",
    url: "https://www.planet-wissen.de/"
},
{
    kategorie: "Wissenschaft & Lernen",
    icon: "📚",
    titel: "Wikipedia",
    beschreibung: "Freies Nachschlagewerk.",
    url: "https://de.wikipedia.org/"
},
{
    kategorie: "Wissenschaft & Lernen",
    icon: "🎓",
    titel: "Khan Academy",
    beschreibung: "Kostenlose Lernplattform.",
    url: "https://de.khanacademy.org/"
},
{
    kategorie: "Wissenschaft & Lernen",
    icon: "🏛️",
    titel: "Deutsches Museum",
    beschreibung: "Technik und Wissenschaft.",
    url: "https://www.deutsches-museum.de/"
}
];
