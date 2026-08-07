# hackathon-radio

Ein gemeinsamer YouTube-Player für einen Raum voller Leute, entstanden auf einem Hackathon. Jemand wirft eine YouTube-URL in das Eingabefeld, drückt den Knopf, und bei allen anderen im Browser springt das Video um.

## Wie es funktioniert

`index.js` ist ein Express-Server mit socket.io auf Port 61000. Er liefert die `index.html` aus und broadcastet jede eingehende URL per `new-url` an alle verbundenen Clients. Die Seite selbst hängt an der YouTube IFrame API und ruft bei jeder Nachricht `player.loadVideoById` auf.

## Starten

```
npm install
node index.js
```

Dann `http://localhost:61000` aufmachen.

## Zustand

Hackathon-Code, entsprechend roh. Die URL wird nicht geprüft, die Erkennung des Videotyps besteht aus einem `indexOf`, das immer wahr ist, und aus dem YouTube-Beispielcode ist ein `stopVideo` nach sechs Sekunden übriggeblieben, das beim ersten Video zuschlägt. Ich habe das nicht aufgeräumt.
