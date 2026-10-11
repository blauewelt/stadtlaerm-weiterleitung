# stadtlaerm-weiterleitung

Hält die alte Adresse **stadtlaerm.ch** am Leben, nachdem die Website des Vereins Weniger Lärm nach
[wenigerlaerm.ch](https://wenigerlaerm.ch) umgezogen ist (Quellcode: [blauewelt/stadtlaerm](https://github.com/blauewelt/stadtlaerm)).

Jede Seite, auch jede unbekannte über `404.html`, öffnet dieselbe Adresse auf wenigerlaerm.ch, mit Pfad,
Query und `#`-Fragment. Das ist wichtig für installierte App-Versionen, die für die Update-Prüfung
`https://stadtlaerm.ch/update.html#v=<Version>&c=<Code>` öffnen, und für alte Links auf
`/download/stadtlaerm.apk`. Ohne JavaScript leitet ein Meta-Refresh auf die entsprechende Seite weiter.

Served by GitHub Pages from `main` / root, custom domain `stadtlaerm.ch`.
