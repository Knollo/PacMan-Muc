-- Leaderboard-Tabelle für PacMan München
-- Führe dieses Script in phpMyAdmin aus

CREATE TABLE IF NOT EXISTS pacman_leaderboard (
    id INT AUTO_INCREMENT PRIMARY KEY,
    player_name VARCHAR(50) NOT NULL,
    score INT NOT NULL,
    time_seconds INT NOT NULL,
    dots_collected INT NOT NULL,
    lives_remaining INT NOT NULL,
    visible TINYINT(1) DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE INDEX idx_score ON pacman_leaderboard (score DESC, time_seconds ASC);
CREATE INDEX idx_visible ON pacman_leaderboard (visible);
