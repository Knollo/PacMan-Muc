<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Leaderboard-Test</title>
  <style>
    body { max-width: 800px; margin: 2rem auto; padding: 0 1rem; font: 16px/1.5 sans-serif; }
    button { padding: .7rem 1rem; cursor: pointer; }
    pre { padding: 1rem; background: #eee; white-space: pre-wrap; overflow-wrap: anywhere; }
  </style>
</head>
<body>
  <h1>Gewinn-Nachricht testen</h1>
  <p>Der Testeintrag wird unsichtbar in der Datenbank gespeichert.</p>
  <button id="send" type="button">Testanfrage senden</button>
  <pre id="result">Noch keine Anfrage gesendet.</pre>

  <script>
    const button = document.getElementById('send');
    const result = document.getElementById('result');

    button.addEventListener('click', async () => {
      button.disabled = true;
      result.textContent = 'Anfrage läuft …';

      try {
        const response = await fetch('https://qwerx.de/pacman/api/leaderboard.php?action=submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            player_name: 'Browser-Test',
            score: 999,
            time_seconds: 100,
            dots_collected: 99,
            lives_remaining: 1,
            visible: 0,
            lang: 'de'
          })
        });

        const text = await response.text();
        let body;
        try {
          body = JSON.stringify(JSON.parse(text), null, 2);
        } catch {
          body = text;
        }

        result.textContent = `HTTP ${response.status}\n\n${body}`;
      } catch (error) {
        result.textContent = `Anfrage fehlgeschlagen: ${error.message}`;
      } finally {
        button.disabled = false;
      }
    });
  </script>
</body>
</html>