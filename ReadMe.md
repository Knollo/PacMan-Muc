# PacMan München 🎮

Ein GPS-basiertes Outdoor-Spiel im Stil von PacMan, optimiert für den **Alten Südlichen Friedhof** in München.

## Funktionen & Features

### 🗺️ Interaktive Karte
- Nutzt **Leaflet.js** zur Darstellung der Spielumgebung.
- Automatische Zentrierung auf den Spieler (abschaltbar).
- Anzeige der GPS-Genauigkeit in Echtzeit.

### 🎮 Gameplay-Mechaniken
- **Punkte sammeln:** Über 90 virtuelle Caches (Waypoints) können durch physisches Annähern (Radius: 10m) gesammelt werden.
- **Geister-KI:** Vier Geister (Blinky, Pinky, Inky, Stinky) patrouillieren auf der Karte. Kollisionen führen zum Verlust eines Lebens.
- **Lebenssystem:** Start mit 3 Leben.
- **Immunität:** Nach einer Geister-Kollision ist der Spieler für 30 Sekunden immun (Schild-Modus).
- **Mystery-Rätsel:** Mystery-Caches erfordern die Beantwortung einer Frage vor Ort.
- **Verschiedene Cache-Typen:** Unterschiedliche Punktewerte für Traditional, Multi, Virtual, Earth, Mystery, etc.

### 🏆 Bestenliste & Social
- Globales Leaderboard via PHP-API.
- Speicherung von Spielername, Score, Zeit und gesammelten Caches.
- Optionale Sichtbarkeit des eigenen Ergebnisses.

### 🛠️ Technische Details
- **Frontend:** HTML5, CSS3, JavaScript (ES6+).
- **Geodaten:** Haversine-Formel zur Distanzberechnung und Peilungsalgorithmen für die Geisterbewegung.
- **Audio:** Web Audio API für Soundeffekte ohne externe Dateien.
- **Backend:** PHP/MySQL API für die Bestenliste.

## Installation & Start
Einfach die `index.html` im Browser eines GPS-fähigen Smartphones öffnen. Der Zugriff auf den Standort muss erlaubt sein.

---
*Entwickelt für Geocacher und Outdoor-Enthusiasten.*
