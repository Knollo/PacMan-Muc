<?php
/**
 * PacMan München – Leaderboard API v1.3
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
    $subject = 'PacMan von ' . $safeName;
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
$DB_NAME = '%%MYSQL_DB%%';
$DB_USER = '%%MYSQL_DB%%';
$DB_PASS = '%%MYSQL_PW%%';

// Win message – only delivered server-side after game completion
$WIN_MESSAGE = "Du hast alle Punkte gesammelt! Hier ist dein Geocache-Hinweis:\n\n"
    . "Der Cache befindet sich am Ende des Weges bei der großen Eiche.\n"
    . "Koordinaten: N 48° 07.530 E 011° 33.820\n\n"
    . "Viel Erfolg beim Suchen!";
$TOTAL_DOTS = 99;

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
             FROM pacman_leaderboard
             WHERE visible = 1
             ORDER BY score DESC, time_seconds ASC
             LIMIT 20'
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

        $stmt = $pdo->prepare(
            'INSERT INTO pacman_leaderboard (player_name, score, time_seconds, dots_collected, lives_remaining, visible)
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
             FROM pacman_leaderboard
             WHERE visible = 1
             ORDER BY score DESC, time_seconds ASC
             LIMIT 20'
        );

        echo json_encode([
            'success' => true,
            'id' => intval($id),
            'leaderboard' => $lb->fetchAll(PDO::FETCH_ASSOC),
            'win_message' => ($dots >= $TOTAL_DOTS) ? $WIN_MESSAGE : null
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

        $stmt = $pdo->prepare('UPDATE pacman_leaderboard SET visible = :visible WHERE id = :id');
        $stmt->execute([':visible' => $visible, ':id' => $id]);

        echo json_encode(['success' => true]);
        break;

    default:
        http_response_code(400);
        echo json_encode(['error' => 'Unknown action. Use: top, submit, toggle']);
}
