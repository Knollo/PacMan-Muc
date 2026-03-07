const GAME_CONFIG = {
  // Map center and zoom – southern section of "Alter Südlicher Friedhof" Munich
  center: [48.12598, 11.56404],
  zoom: 18,

  // Proximity thresholds in meters
  collectRadius: 15,
  ghostDangerRadius: 20,

  // Ghost speed (meters per second) – brisk walking pace
  ghostSpeed: 1.5,

  // Immunity after ghost hit (seconds)
  immunityDuration: 5,

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
  // Waypoints – from Wegpunkte.csv (Alter Südlicher Friedhof, south section)
  // Loop route through cemetery paths
  // ---------------------------------------------------------------------------
  waypoints: [
    { lat: 48.12651, lng: 11.56338, type: "traditional", label: "Start" },
    { lat: 48.12646, lng: 11.56353, type: "traditional", label: "Punkt 2" },
    { lat: 48.12641, lng: 11.56368, type: "earth",       label: "Punkt 3" },
    { lat: 48.12637, lng: 11.56380, type: "traditional", label: "Punkt 4" },
    { lat: 48.12631, lng: 11.56395, type: "multi",       label: "Punkt 5" },
    { lat: 48.12627, lng: 11.56409, type: "traditional", label: "Punkt 6" },
    { lat: 48.12623, lng: 11.56420, type: "virtual",     label: "Punkt 7" },
    { lat: 48.12619, lng: 11.56435, type: "traditional", label: "Punkt 8" },
    { lat: 48.12615, lng: 11.56445, type: "earth",       label: "Punkt 9" },
    { lat: 48.12611, lng: 11.56457, type: "traditional", label: "Punkt 10" },
    { lat: 48.12608, lng: 11.56469, type: "mystery",     label: "Wendepunkt" },
    { lat: 48.12605, lng: 11.56461, type: "traditional", label: "Punkt 12" },
    { lat: 48.12600, lng: 11.56458, type: "multi",       label: "Punkt 13" },
    { lat: 48.12596, lng: 11.56453, type: "traditional", label: "Punkt 14" },
    { lat: 48.12590, lng: 11.56450, type: "virtual",     label: "Punkt 15" },
    { lat: 48.12583, lng: 11.56445, type: "traditional", label: "Punkt 16" },
    { lat: 48.12576, lng: 11.56440, type: "earth",       label: "Punkt 17" },
    { lat: 48.12570, lng: 11.56436, type: "traditional", label: "Punkt 18" },
    { lat: 48.12561, lng: 11.56428, type: "multi",       label: "Punkt 19" },
    { lat: 48.12553, lng: 11.56423, type: "mystery",     label: "Südpunkt" },
    { lat: 48.12544, lng: 11.56407, type: "traditional", label: "Punkt 21" },
    { lat: 48.12549, lng: 11.56393, type: "virtual",     label: "Punkt 22" },
    { lat: 48.12558, lng: 11.56382, type: "traditional", label: "Punkt 23" },
    { lat: 48.12570, lng: 11.56382, type: "earth",       label: "Punkt 24" },
    { lat: 48.12582, lng: 11.56392, type: "traditional", label: "Punkt 25" },
    { lat: 48.12593, lng: 11.56401, type: "multi",       label: "Punkt 26" },
    { lat: 48.12603, lng: 11.56409, type: "traditional", label: "Punkt 27" },
    { lat: 48.12615, lng: 11.56418, type: "traditional", label: "Ziel" }
  ],

  // ---------------------------------------------------------------------------
  // Ghost patrol routes
  // Each ghost patrols a different section of the cemetery
  // ---------------------------------------------------------------------------
  ghosts: [
    {
      name: "Blinky",
      color: "#FF0000",
      emoji: "👻",
      // Patrols the upper diagonal section
      route: [
        [48.12651, 11.56338],
        [48.12641, 11.56368],
        [48.12631, 11.56395],
        [48.12623, 11.56420],
        [48.12615, 11.56445],
        [48.12608, 11.56469],
        [48.12615, 11.56445],
        [48.12623, 11.56420],
        [48.12631, 11.56395]
      ]
    },
    {
      name: "Pinky",
      color: "#FFB8FF",
      emoji: "👻",
      // Patrols the southern curve
      route: [
        [48.12608, 11.56469],
        [48.12600, 11.56458],
        [48.12590, 11.56450],
        [48.12576, 11.56440],
        [48.12561, 11.56428],
        [48.12553, 11.56423],
        [48.12544, 11.56407],
        [48.12553, 11.56423],
        [48.12561, 11.56428],
        [48.12576, 11.56440]
      ]
    },
    {
      name: "Inky",
      color: "#00FFFF",
      emoji: "👻",
      // Patrols the return path
      route: [
        [48.12544, 11.56407],
        [48.12549, 11.56393],
        [48.12558, 11.56382],
        [48.12570, 11.56382],
        [48.12582, 11.56392],
        [48.12593, 11.56401],
        [48.12603, 11.56409],
        [48.12615, 11.56418],
        [48.12603, 11.56409],
        [48.12593, 11.56401]
      ]
    }
  ]
};
