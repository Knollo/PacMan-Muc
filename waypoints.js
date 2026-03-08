const GAME_CONFIG = {
  // Map center and zoom – southern section of "Alter Südlicher Friedhof" Munich
  center: [48.12556, 11.56371],
  zoom: 17,

  // Proximity thresholds in meters
  collectRadius: 10,
  ghostDangerRadius: 5,

  // Ghost speed (meters per second) – brisk walking pace
  ghostSpeed: 1.5,

  // Immunity after ghost hit (seconds)
  immunityDuration: 30,

  // Win message (German)
  winTitle: "🎉 Gratulation!",
  winMessage:
    "Du hast alle Punkte gesammelt! Hier ist dein Geocache-Hinweis:\n\n" +
    "Der Cache befindet sich am Ende des Weges bei der großen Eiche.\n" +
    "Koordinaten: N 48° 07.530 E 011° 33.820\n\n" +
    "Viel Erfolg beim Suchen!",

  // Score per cache type
  scoreValues: {
    traditional: 10,
    multi: 15,
    mystery: 50,
    virtual: 20,
    earth: 25
  },

  // ---------------------------------------------------------------------------
  // Waypoints – from Daten/Map Suedfriedhof komplett.csv (92 Punkte)
  // Types randomly assigned: 45 traditional, 21 multi, 13 virtual, 11 earth, 2 mystery
  // ---------------------------------------------------------------------------
  waypoints: [
    { lat: 48.12651, lng: 11.56338, type: "multi", label: "Punkt 1" },
    { lat: 48.12646, lng: 11.56353, type: "traditional", label: "Punkt 2" },
    { lat: 48.12641, lng: 11.56368, type: "traditional", label: "Punkt 3" },
    { lat: 48.12635, lng: 11.56386, type: "traditional", label: "Punkt 4" },
    { lat: 48.12631, lng: 11.56400, type: "virtual", label: "Punkt 5" },
    { lat: 48.12626, lng: 11.56413, type: "multi", label: "Punkt 6" },
    { lat: 48.12651, lng: 11.56328, type: "earth", label: "Punkt 7" },
    { lat: 48.12621, lng: 11.56430, type: "traditional", label: "Punkt 8" },
    { lat: 48.12616, lng: 11.56442, type: "mystery", label: "Punkt 9",
      question: "Wie heisst der Friedhof auf dem du stehst?", answer: "alter suedlicher friedhof" },
    { lat: 48.12612, lng: 11.56456, type: "traditional", label: "Punkt 10" },
    { lat: 48.12607, lng: 11.56472, type: "traditional", label: "Punkt 11" },
    { lat: 48.12602, lng: 11.56458, type: "multi", label: "Punkt 12" },
    { lat: 48.12603, lng: 11.56485, type: "traditional", label: "Punkt 13" },
    { lat: 48.12590, lng: 11.56449, type: "traditional", label: "Punkt 14" },
    { lat: 48.12598, lng: 11.56500, type: "multi", label: "Punkt 15" },
    { lat: 48.12577, lng: 11.56439, type: "multi", label: "Punkt 16" },
    { lat: 48.12565, lng: 11.56431, type: "traditional", label: "Punkt 17" },
    { lat: 48.12551, lng: 11.56422, type: "multi", label: "Punkt 18" },
    { lat: 48.12559, lng: 11.56363, type: "virtual", label: "Punkt 19" },
    { lat: 48.12544, lng: 11.56407, type: "traditional", label: "Punkt 20" },
    { lat: 48.12549, lng: 11.56395, type: "virtual", label: "Punkt 21" },
    { lat: 48.12562, lng: 11.56376, type: "virtual", label: "Punkt 22" },
    { lat: 48.12570, lng: 11.56382, type: "traditional", label: "Punkt 23" },
    { lat: 48.12582, lng: 11.56392, type: "traditional", label: "Punkt 24" },
    { lat: 48.12594, lng: 11.56400, type: "earth", label: "Punkt 25" },
    { lat: 48.12605, lng: 11.56409, type: "traditional", label: "Punkt 26" },
    { lat: 48.12615, lng: 11.56416, type: "traditional", label: "Punkt 27" },
    { lat: 48.12563, lng: 11.56351, type: "traditional", label: "Punkt 28" },
    { lat: 48.12630, lng: 11.56373, type: "virtual", label: "Punkt 29" },
    { lat: 48.12564, lng: 11.56264, type: "multi", label: "Punkt 30" },
    { lat: 48.12577, lng: 11.56273, type: "virtual", label: "Punkt 31" },
    { lat: 48.12644, lng: 11.56322, type: "virtual", label: "Punkt 32" },
    { lat: 48.12630, lng: 11.56313, type: "multi", label: "Punkt 33" },
    { lat: 48.12618, lng: 11.56304, type: "earth", label: "Punkt 34" },
    { lat: 48.12606, lng: 11.56295, type: "traditional", label: "Punkt 35" },
    { lat: 48.12594, lng: 11.56287, type: "multi", label: "Punkt 36" },
    { lat: 48.12583, lng: 11.56290, type: "virtual", label: "Punkt 37" },
    { lat: 48.12578, lng: 11.56305, type: "multi", label: "Punkt 38" },
    { lat: 48.12568, lng: 11.56337, type: "earth", label: "Punkt 39" },
    { lat: 48.12574, lng: 11.56319, type: "multi", label: "Punkt 40" },
    { lat: 48.12583, lng: 11.56335, type: "virtual", label: "Punkt 41" },
    { lat: 48.12595, lng: 11.56345, type: "traditional", label: "Punkt 42" },
    { lat: 48.12609, lng: 11.56355, type: "traditional", label: "Punkt 43" },
    { lat: 48.12620, lng: 11.56365, type: "traditional", label: "Punkt 44" },
    { lat: 48.12545, lng: 11.56310, type: "traditional", label: "Punkt 45" },
    { lat: 48.12535, lng: 11.56301, type: "traditional", label: "Punkt 46" },
    { lat: 48.12522, lng: 11.56293, type: "traditional", label: "Punkt 47" },
    { lat: 48.12512, lng: 11.56284, type: "traditional", label: "Punkt 48" },
    { lat: 48.12504, lng: 11.56271, type: "multi", label: "Punkt 49" },
    { lat: 48.12509, lng: 11.56256, type: "traditional", label: "Punkt 50" },
    { lat: 48.12514, lng: 11.56240, type: "traditional", label: "Punkt 51" },
    { lat: 48.12519, lng: 11.56232, type: "traditional", label: "Punkt 52" },
    { lat: 48.12529, lng: 11.56239, type: "traditional", label: "Punkt 53" },
    { lat: 48.12541, lng: 11.56247, type: "earth", label: "Punkt 54" },
    { lat: 48.12553, lng: 11.56256, type: "multi", label: "Punkt 55" },
    { lat: 48.12529, lng: 11.56452, type: "multi", label: "Punkt 56" },
    { lat: 48.12534, lng: 11.56466, type: "traditional", label: "Punkt 57" },
    { lat: 48.12547, lng: 11.56475, type: "virtual", label: "Punkt 58" },
    { lat: 48.12560, lng: 11.56485, type: "traditional", label: "Punkt 59" },
    { lat: 48.12572, lng: 11.56494, type: "traditional", label: "Punkt 60" },
    { lat: 48.12553, lng: 11.56382, type: "earth", label: "Punkt 61" },
    { lat: 48.12585, lng: 11.56504, type: "multi", label: "Punkt 62" },
    { lat: 48.12593, lng: 11.56509, type: "multi", label: "Punkt 63" },
    { lat: 48.12498, lng: 11.56331, type: "virtual", label: "Punkt 64" },
    { lat: 48.12510, lng: 11.56339, type: "virtual", label: "Punkt 65" },
    { lat: 48.12559, lng: 11.56321, type: "virtual", label: "Punkt 66" },
    { lat: 48.12521, lng: 11.56348, type: "traditional", label: "Punkt 67" },
    { lat: 48.12530, lng: 11.56354, type: "traditional", label: "Punkt 68" },
    { lat: 48.12541, lng: 11.56361, type: "traditional", label: "Punkt 69" },
    { lat: 48.12549, lng: 11.56368, type: "traditional", label: "Punkt 70" },
    { lat: 48.12539, lng: 11.56423, type: "traditional", label: "Punkt 71" },
    { lat: 48.12535, lng: 11.56437, type: "earth", label: "Punkt 72" },
    { lat: 48.12493, lng: 11.56438, type: "earth", label: "Punkt 73" },
    { lat: 48.12481, lng: 11.56429, type: "traditional", label: "Punkt 74" },
    { lat: 48.12467, lng: 11.56419, type: "multi", label: "Punkt 75" },
    { lat: 48.12460, lng: 11.56402, type: "traditional", label: "Punkt 76" },
    { lat: 48.12465, lng: 11.56388, type: "earth", label: "Punkt 77" },
    { lat: 48.12470, lng: 11.56374, type: "mystery", label: "Punkt 78",
      question: "Wie heisst der Friedhof auf dem du stehst?", answer: "alter suedlicher friedhof" },
    { lat: 48.12475, lng: 11.56358, type: "traditional", label: "Punkt 79" },
    { lat: 48.12480, lng: 11.56344, type: "traditional", label: "Punkt 80" },
    { lat: 48.12484, lng: 11.56332, type: "multi", label: "Punkt 81" },
    { lat: 48.12499, lng: 11.56286, type: "traditional", label: "Punkt 82" },
    { lat: 48.12495, lng: 11.56300, type: "multi", label: "Punkt 83" },
    { lat: 48.12489, lng: 11.56315, type: "earth", label: "Punkt 84" },
    { lat: 48.12484, lng: 11.56373, type: "traditional", label: "Punkt 85" },
    { lat: 48.12459, lng: 11.56410, type: "traditional", label: "Punkt 86" },
    { lat: 48.12497, lng: 11.56381, type: "earth", label: "Punkt 87" },
    { lat: 48.12508, lng: 11.56390, type: "multi", label: "Punkt 88" },
    { lat: 48.12521, lng: 11.56399, type: "traditional", label: "Punkt 89" },
    { lat: 48.12532, lng: 11.56407, type: "traditional", label: "Punkt 90" },
    { lat: 48.12518, lng: 11.56455, type: "traditional", label: "Punkt 91" },
    { lat: 48.12506, lng: 11.56447, type: "multi", label: "Punkt 92" }
  ],

  // ---------------------------------------------------------------------------
  // Ghost starting positions – 4 ghosts with smart AI pathfinding
  // ---------------------------------------------------------------------------
  ghosts: [
    {
      name: "Blinky",
      color: "#FF0000",
      emoji: "👻",
      // Starts in the northeast
      route: [
        [48.12651, 11.56338]
      ]
    },
    {
      name: "Pinky",
      color: "#FFB8FF",
      emoji: "👻",
      // Starts in the southwest
      route: [
        [48.12553, 11.56256]
      ]
    },
    {
      name: "Inky",
      color: "#00FFFF",
      emoji: "👻",
      // Starts in the southern section
      route: [
        [48.12460, 11.56402]
      ]
    },
    {
      name: "Stinky",
      color: "#FF8C00",
      emoji: "👻",
      // Starts in the central area
      route: [
        [48.12560, 11.56380]
      ]
    }
  ]
};
