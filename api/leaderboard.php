<?php
/**
 * PacMan Schloßpark Sohland – Leaderboard API v1.3
 * 
 * Endpoints:
 *   GET  ?action=top     → Top 20 sichtbare Einträge
 *   POST ?action=submit  → Neuen Eintrag speichern (JSON body)
 *   POST ?action=toggle  → Sichtbarkeit umschalten (JSON body mit id + visible)
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Notify action – send email when game starts (no DB required)
if (($_GET['action'] ?? '') === 'notify') {
    $data = json_decode(file_get_contents('php://input'), true);
    $name = isset($data['player_name']) ? mb_substr(trim($data['player_name']), 0, 50) : '';
    if ($name === '') {
        http_response_code(400);
        echo json_encode(['error' => 'player_name required']);
        exit;
    }
    // Strip newlines to prevent email header injection via the subject
    $safeName = str_replace(["\r", "\n"], '', $name);
    $to      = 'drumpldeer@gmail.com';
    $subject = 'PacMan Sohland von ' . $safeName;
    $message = $safeName . ' hat ein PacMan-Spiel gestartet.';
    $headers = 'From: pacman@qwerx.de';
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to send email']);
    }
    exit;
}

// Database credentials – injected by GitHub Actions deploy
$DB_HOST = 'qwerx.de';
$DB_NAME = '%%MYSQL_DB%%'; // Injected by GitHub Actions
$DB_USER = '%%MYSQL_DB%%'; // Injected by GitHub Actions (same as DB_NAME)
$DB_PASS = '%%MYSQL_PW%%'; // Injected by GitHub Actions

// Win message – only delivered server-side after game completion
$WIN_MESSAGE_DE = "Du hast alle Caches im Schloßpark gesammelt! Herzlichen Glückwunsch!\n\n"
    . "Du hast den Geistern aus dem alten Schloß erfolgreich getrotzt.\n\n"
    . "Der Cache befindet etwas abseits der Geisterzone bei den Koordinaten N51° 02.786 E014° 26.025\n\n"
    . "Viel Erfolg beim Suchen und Entspannen nach der Geisterjagd!";

$WIN_MESSAGE_EN = "You collected all the caches in the castle park! Congratulations!\n\n"
    . "You successfully braved the ghosts from the old castle.\n\n"
    . "The cache is located a bit off the ghost zone at coordinates N51° 02.786 E014° 26.025\n\n"
    . "Good luck searching and relaxing after the ghost hunt!";

$WIN_MESSAGE_CZ = "Nasbírali jste všechny kešky v zámeckém parku! Gratulujeme!\n\n"
    . "Úspěšně jste vzdorovali duchům ze starého zámku.\n\n"
    . "Keška se nachází kousek od Zóny duchů na souřadnicích N51° 02.786 E014° 26.025\n\n"
    . "Hodně štěstí při hledání a odpočinek po lovu duchů!";

$TOTAL_DOTS = 100;

try {
    $pdo = new PDO(
        "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4",
        $DB_USER,
        $DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed']);
    exit;
}

$action = $_GET['action'] ?? '';

switch ($action) {
    case 'top':
        // GET – Top 20 sichtbare Ergebnisse, sortiert nach Score desc, Zeit asc
        $stmt = $pdo->query(
            'SELECT id, player_name, score, time_seconds, dots_collected, lives_remaining, created_at
             FROM `pacman-sohland`
             WHERE visible = 1
             ORDER BY score DESC, time_seconds ASC
             LIMIT 100'
        );
        echo json_encode(['leaderboard' => $stmt->fetchAll(PDO::FETCH_ASSOC)]);
        break;

    case 'submit':
        // POST – Neuen Eintrag speichern
        $data = json_decode(file_get_contents('php://input'), true);
        if (!$data || empty($data['player_name'])) {
            http_response_code(400);
            echo json_encode(['error' => 'player_name required']);
            exit;
        }

        $name = mb_substr(trim($data['player_name']), 0, 50);
        $score = intval($data['score'] ?? 0);
        $time = intval($data['time_seconds'] ?? 0);
        $dots = intval($data['dots_collected'] ?? 0);
        $lives = intval($data['lives_remaining'] ?? 0);
        $visible = intval($data['visible'] ?? 1);
        $lang = $data['lang'] ?? 'de';

        $stmt = $pdo->prepare(
            'INSERT INTO `pacman-sohland` (player_name, score, time_seconds, dots_collected, lives_remaining, visible)
             VALUES (:name, :score, :time, :dots, :lives, :visible)'
        );
        $stmt->execute([
            ':name' => $name,
            ':score' => $score,
            ':time' => $time,
            ':dots' => $dots,
            ':lives' => $lives,
            ':visible' => $visible
        ]);

        $id = $pdo->lastInsertId();

        // Return current leaderboard with the new entry
        $lb = $pdo->query(
            'SELECT id, player_name, score, time_seconds, dots_collected, lives_remaining, created_at
             FROM `pacman-sohland`
             WHERE visible = 1
             ORDER BY score DESC, time_seconds ASC
             LIMIT 20'
        );

        $winMsg = ($dots >= $TOTAL_DOTS) ? ($lang === 'cz' ? $WIN_MESSAGE_CZ : ($lang === 'en' ? $WIN_MESSAGE_EN : $WIN_MESSAGE_DE)) : null;

        echo json_encode([
            'success' => true,
            'id' => intval($id),
            'leaderboard' => $lb->fetchAll(PDO::FETCH_ASSOC),
            'win_message' => $winMsg
        ]);
        break;

    case 'toggle':
        // POST – Sichtbarkeit ändern
        $data = json_decode(file_get_contents('php://input'), true);
        $id = intval($data['id'] ?? 0);
        $visible = intval($data['visible'] ?? 0);

        if ($id <= 0) {
            http_response_code(400);
            echo json_encode(['error' => 'valid id required']);
            exit;
        }

        $stmt = $pdo->prepare('UPDATE `pacman-sohland` SET visible = :visible WHERE id = :id');
        $stmt->execute([':visible' => $visible, ':id' => $id]);

        echo json_encode(['success' => true]);
        break;

    default:
        http_response_code(400);
        echo json_encode(['error' => 'Unknown action. Use: top, submit, toggle']);
}
// Deploy trigger: 1780588227546
