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

  // Boundary / invisible walls – corridor along the waypoint path
  corridorWidth: 5,          // meters each side of path center line
  boundaryPenalty: 50,       // points deducted on violation
  boundaryCooldown: 5000,    // ms before next violation can trigger
  boundaryGracePeriod: 15,   // seconds after game start before checks begin

  // Win message – delivered by server API after game completion
  winTitle: "🎉 Gratulation!",

  // Score per cache type
  scoreValues: {
    traditional: 5,
    multi: 10,
    letterbox: 15,
    mystery: 20,
    virtual: 25,
    event: 30,
    earth: 25,
    webcam: 25
  },

  // ---------------------------------------------------------------------------
  // Waypoints – from Daten/Map Suedfriedhof komplett.csv (92 Punkte)
  // Types randomly assigned: 45 traditional, 21 multi, 13 virtual, 11 earth, 2 mystery
  // Drumpldeer: manuelle Anpassungen der Wegpunkte, nur 7 Virtuelle für Lebensrettung
  // ---------------------------------------------------------------------------
  waypoints: [
    { lat: 48.12651, lng: 11.56338, type: "multi", label: "Punkt 1" },
    { lat: 48.12647, lng: 11.56351, type: "traditional", label: "Punkt 2" },
    { lat: 48.12642, lng: 11.56364, type: "traditional", label: "Punkt 3" },
    { lat: 48.12635, lng: 11.56388, type: "traditional", label: "Punkt 4" },
    { lat: 48.12631, lng: 11.56400, type: "virtual", label: "Punkt 5" },
    { lat: 48.12627, lng: 11.56411, type: "multi", label: "Punkt 6" },
    { lat: 48.12651, lng: 11.56328, type: "earth", label: "Punkt 7" },
    { lat: 48.12620, lng: 11.56433, type: "traditional", label: "Punkt 8" },
    { lat: 48.12616, lng: 11.56444, type: "traditional", label: "Punkt 9" },
    { lat: 48.12612, lng: 11.56455, type: "traditional", label: "Punkt 10" },
    { lat: 48.12605, lng: 11.56476, type: "traditional", label: "Punkt 11" },
    { lat: 48.12602, lng: 11.56458, type: "multi", label: "Punkt 12" },
    { lat: 48.12601, lng: 11.56488, type: "traditional", label: "Punkt 13" },
    { lat: 48.12590, lng: 11.56449, type: "traditional", label: "Punkt 14" },
    { lat: 48.12598, lng: 11.56500, type: "multi", label: "Punkt 15" },
    { lat: 48.12577, lng: 11.56439, type: "multi", label: "Punkt 16" },
    { lat: 48.12565, lng: 11.56431, type: "traditional", label: "Punkt 17" },
    { lat: 48.12551, lng: 11.56422, type: "multi", label: "Punkt 18" },
    { lat: 48.12559, lng: 11.56363, type: "multi", label: "Punkt 19" },
    { lat: 48.12544, lng: 11.56407, type: "traditional", label: "Punkt 20" },
    { lat: 48.12549, lng: 11.56395, type: "letterbox", label: "Punkt 21" },
    { lat: 48.12562, lng: 11.56376, type: "virtual", label: "Punkt 22" },
    { lat: 48.12570, lng: 11.56382, type: "traditional", label: "Punkt 23" },
    { lat: 48.12582, lng: 11.56392, type: "traditional", label: "Punkt 24" },
    { lat: 48.12594, lng: 11.56400, type: "earth", label: "Punkt 25" },
    { lat: 48.12605, lng: 11.56409, type: "traditional", label: "Punkt 26" },
    { lat: 48.12615, lng: 11.56416, type: "traditional", label: "Punkt 27" },
    { lat: 48.12563, lng: 11.56351, type: "traditional", label: "Punkt 28" },
    { lat: 48.12630, lng: 11.56373, type: "virtual", label: "Punkt 29" },
    { lat: 48.12564, lng: 11.56264, type: "multi", label: "Punkt 30" },
    { lat: 48.12577, lng: 11.56273, type: "event", label: "Punkt 31" },
    { lat: 48.12644, lng: 11.56322, type: "multi", label: "Punkt 32" },
    { lat: 48.12630, lng: 11.56313, type: "multi", label: "Punkt 33" },
    { lat: 48.12618, lng: 11.56304, type: "earth", label: "Punkt 34" },
    { lat: 48.12606, lng: 11.56295, type: "traditional", label: "Punkt 35" },
    { lat: 48.12594, lng: 11.56287, type: "multi", label: "Punkt 36" },
    { lat: 48.12582, lng: 11.56293, type: "virtual", label: "Punkt 37" },
    { lat: 48.12578, lng: 11.56305, type: "multi", label: "Punkt 38" },
    { lat: 48.12568, lng: 11.56337, type: "earth", label: "Punkt 39" },
    { lat: 48.12574, lng: 11.56318, type: "multi", label: "Punkt 40" },
    { lat: 48.12583, lng: 11.56335, type: "virtual", label: "Punkt 41" },
    { lat: 48.12595, lng: 11.56345, type: "traditional", label: "Punkt 42" },
    { lat: 48.12609, lng: 11.56355, type: "mystery", label: "Punkt 43" ,
     question: "Wieviele Geister verfolgen dich?", answer: "4" },
    { lat: 48.12620, lng: 11.56365, type: "traditional", label: "Punkt 44" },
    { lat: 48.12545, lng: 11.56310, type: "letterbox", label: "Punkt 45" },
    { lat: 48.12535, lng: 11.56301, type: "traditional", label: "Punkt 46" },
    { lat: 48.12522, lng: 11.56293, type: "traditional", label: "Punkt 47" },
    { lat: 48.12512, lng: 11.56284, type: "traditional", label: "Punkt 48" },
    { lat: 48.12506, lng: 11.56266, type: "multi", label: "Punkt 49" },
    { lat: 48.12510, lng: 11.56254, type: "traditional", label: "Punkt 50" },
    { lat: 48.12514, lng: 11.56240, type: "traditional", label: "Punkt 51" },
    { lat: 48.12519, lng: 11.56232, type: "traditional", label: "Punkt 52" },
    { lat: 48.12529, lng: 11.56239, type: "traditional", label: "Punkt 53" },
    { lat: 48.12541, lng: 11.56247, type: "earth", label: "Punkt 54" },
    { lat: 48.12553, lng: 11.56256, type: "multi", label: "Punkt 55" },
    { lat: 48.12530, lng: 11.56450, type: "multi", label: "Punkt 56" },
    { lat: 48.12534, lng: 11.56466, type: "traditional", label: "Punkt 57" },
    { lat: 48.12547, lng: 11.56475, type: "virtual", label: "Punkt 58" },
    { lat: 48.12560, lng: 11.56485, type: "traditional", label: "Punkt 59" },
    { lat: 48.12572, lng: 11.56494, type: "traditional", label: "Punkt 60" },
    { lat: 48.12553, lng: 11.56382, type: "earth", label: "Punkt 61" },
    { lat: 48.12585, lng: 11.56504, type: "multi", label: "Punkt 62" },
    { lat: 48.12593, lng: 11.56509, type: "webcam", label: "Punkt 63" },
    { lat: 48.12498, lng: 11.56331, type: "virtual", label: "Punkt 64" },
    { lat: 48.12510, lng: 11.56339, type: "letterbox", label: "Punkt 65" },
    { lat: 48.12559, lng: 11.56321, type: "event", label: "Punkt 66" },
    { lat: 48.12521, lng: 11.56348, type: "traditional", label: "Punkt 67" },
    { lat: 48.12530, lng: 11.56354, type: "webcam", label: "Punkt 68" },
    { lat: 48.12541, lng: 11.56361, type: "traditional", label: "Punkt 69" },
    { lat: 48.12549, lng: 11.56368, type: "letterbox", label: "Punkt 70" },
    { lat: 48.12539, lng: 11.56424, type: "traditional", label: "Punkt 71" },
    { lat: 48.12535, lng: 11.56437, type: "earth", label: "Punkt 72" },
    { lat: 48.12493, lng: 11.56438, type: "earth", label: "Punkt 73" },
    { lat: 48.12481, lng: 11.56429, type: "traditional", label: "Punkt 74" },
    { lat: 48.12467, lng: 11.56419, type: "multi", label: "Punkt 75" },
    { lat: 48.12461, lng: 11.56400, type: "traditional", label: "Punkt 76" },
    { lat: 48.12465, lng: 11.56388, type: "earth", label: "Punkt 77" },
    { lat: 48.12468, lng: 11.56377, type: "mystery", label: "Punkt 78",
      question: "Wieviele Caches hat dieser Powertrail?", answer: "100" },
    { lat: 48.12473, lng: 11.56365, type: "letterbox", label: "Punkt 79" },
    { lat: 48.12480, lng: 11.56344, type: "traditional", label: "Punkt 80" },
    { lat: 48.12484, lng: 11.56332, type: "multi", label: "Punkt 81" },
    { lat: 48.12499, lng: 11.56287, type: "traditional", label: "Punkt 82" },
    { lat: 48.12495, lng: 11.56300, type: "multi", label: "Punkt 83" },
    { lat: 48.12490, lng: 11.56311, type: "earth", label: "Punkt 84" },
    { lat: 48.12484, lng: 11.56373, type: "traditional", label: "Punkt 85" },
    { lat: 48.12460, lng: 11.56411, type: "traditional", label: "Punkt 86" },
    { lat: 48.12497, lng: 11.56381, type: "earth", label: "Punkt 87" },
    { lat: 48.12508, lng: 11.56390, type: "multi", label: "Punkt 88" },
    { lat: 48.12521, lng: 11.56399, type: "traditional", label: "Punkt 89" },
    { lat: 48.12532, lng: 11.56407, type: "traditional", label: "Punkt 90" },
    { lat: 48.12518, lng: 11.56455, type: "traditional", label: "Punkt 91" },
    { lat: 48.12506, lng: 11.56447, type: "event", label: "Punkt 92" },
    { lat: 48.12526, lng: 11.56461, type: "letterbox", label: "Punkt 93" },
    { lat: 48.12586, lng: 11.56281, type: "webcam", label: "Punkt 94" },
    { lat: 48.12623, lng: 11.56423, type: "event", label: "Punkt 95" },
    { lat: 48.12609, lng: 11.56464, type: "letterbox", label: "Punkt 96" },
    { lat: 48.12638, lng: 11.56377, type: "traditional", label: "Punkt 97" },
    { lat: 48.12502, lng: 11.56277, type: "event", label: "Punkt 98" },
    { lat: 48.12487, lng: 11.56323, type: "traditional", label: "Punkt 99" },
    { lat: 48.12476, lng: 11.56355, type: "event", label: "Punkt 100" } 
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
