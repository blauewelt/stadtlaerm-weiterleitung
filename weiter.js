// stadtlaerm.ch ist umgezogen: gleiche Seite auf wenigerlaerm.ch öffnen, Pfad und #Fragment bleiben erhalten
// (die App öffnet stadtlaerm.ch/update.html#v=…&c=… für die Update-Prüfung).
location.replace("https://wenigerlaerm.ch" + location.pathname + location.search + location.hash);
