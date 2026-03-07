const GAME_CONFIG = {
  // Map center and zoom – southern section of "Alter Südlicher Friedhof" Munich
  center: [48.12553, 11.56377],
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
  // Waypoints – dots the player must collect
  // Laid out along the grid-like paths of the southern cemetery section
  // N-S paths ≈ lng 11.5625, 11.5635, 11.5645, 11.5655
  // E-W paths ≈ lat 48.1248, 48.1253, 48.1258, 48.1263
  // ---------------------------------------------------------------------------
  waypoints: [
    // ── West N-S path (lng ≈ 11.5625) ──
    { lat: 48.12630, lng: 11.56250, type: "traditional", label: "W-Nord" },
    { lat: 48.12600, lng: 11.56250, type: "earth",        label: "W-1" },
    { lat: 48.12580, lng: 11.56250, type: "traditional", label: "W-2" },
    { lat: 48.12553, lng: 11.56250, type: "virtual",     label: "W-Mitte" },
    { lat: 48.12530, lng: 11.56250, type: "traditional", label: "W-3" },
    { lat: 48.12500, lng: 11.56250, type: "multi",       label: "W-4" },
    { lat: 48.12480, lng: 11.56250, type: "traditional", label: "W-Süd" },

    // ── Central-West N-S path (lng ≈ 11.5635) ──
    { lat: 48.12630, lng: 11.56350, type: "multi",       label: "CW-Nord" },
    { lat: 48.12580, lng: 11.56350, type: "mystery",     label: "CW-Rätsel" },
    { lat: 48.12530, lng: 11.56350, type: "traditional", label: "CW-Mitte" },
    { lat: 48.12480, lng: 11.56350, type: "earth",       label: "CW-Süd" },

    // ── Central-East N-S path (lng ≈ 11.5645) ──
    { lat: 48.12630, lng: 11.56450, type: "traditional", label: "CE-Nord" },
    { lat: 48.12580, lng: 11.56450, type: "virtual",     label: "CE-1" },
    { lat: 48.12553, lng: 11.56450, type: "traditional", label: "CE-Mitte" },
    { lat: 48.12530, lng: 11.56450, type: "earth",       label: "CE-2" },
    { lat: 48.12480, lng: 11.56450, type: "multi",       label: "CE-Süd" },

    // ── East N-S path (lng ≈ 11.5655) ──
    { lat: 48.12630, lng: 11.56550, type: "traditional", label: "E-Nord" },
    { lat: 48.12600, lng: 11.56550, type: "traditional", label: "E-1" },
    { lat: 48.12580, lng: 11.56550, type: "mystery",     label: "E-Rätsel" },
    { lat: 48.12553, lng: 11.56550, type: "virtual",     label: "E-Mitte" },
    { lat: 48.12530, lng: 11.56550, type: "traditional", label: "E-2" },
    { lat: 48.12500, lng: 11.56550, type: "earth",       label: "E-3" },
    { lat: 48.12480, lng: 11.56550, type: "traditional", label: "E-Süd" },

    // ── North E-W cross path (lat ≈ 48.1263) connectors ──
    { lat: 48.12630, lng: 11.56400, type: "traditional", label: "N-Quer" },

    // ── Middle E-W cross path (lat ≈ 48.1253) connectors ──
    { lat: 48.12530, lng: 11.56300, type: "virtual",     label: "M-Quer-1" },
    { lat: 48.12530, lng: 11.56500, type: "traditional", label: "M-Quer-2" },

    // ── South E-W cross path (lat ≈ 48.1248) connectors ──
    { lat: 48.12480, lng: 11.56300, type: "traditional", label: "S-Quer-1" },
    { lat: 48.12480, lng: 11.56500, type: "mystery",     label: "S-Quer-Rätsel" }
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
      // Patrols the west side up and down
      route: [
        [48.12630, 11.56250],
        [48.12600, 11.56250],
        [48.12580, 11.56250],
        [48.12553, 11.56250],
        [48.12530, 11.56250],
        [48.12500, 11.56250],
        [48.12480, 11.56250],
        [48.12480, 11.56350],
        [48.12530, 11.56350],
        [48.12580, 11.56350],
        [48.12630, 11.56350]
      ]
    },
    {
      name: "Pinky",
      color: "#FFB8FF",
      emoji: "👻",
      // Patrols the east side
      route: [
        [48.12630, 11.56550],
        [48.12600, 11.56550],
        [48.12580, 11.56550],
        [48.12553, 11.56550],
        [48.12530, 11.56550],
        [48.12500, 11.56550],
        [48.12480, 11.56550],
        [48.12480, 11.56450],
        [48.12530, 11.56450],
        [48.12580, 11.56450],
        [48.12630, 11.56450]
      ]
    },
    {
      name: "Inky",
      color: "#00FFFF",
      emoji: "👻",
      // Patrols the horizontal middle
      route: [
        [48.12530, 11.56250],
        [48.12530, 11.56300],
        [48.12530, 11.56350],
        [48.12530, 11.56450],
        [48.12530, 11.56500],
        [48.12530, 11.56550],
        [48.12480, 11.56550],
        [48.12480, 11.56500],
        [48.12480, 11.56450],
        [48.12480, 11.56350],
        [48.12480, 11.56300],
        [48.12480, 11.56250]
      ]
    }
  ]
};
