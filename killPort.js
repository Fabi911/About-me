const { exec } = require("child_process");

const port = process.argv[2];

if (!port) {
  console.error("Bitte geben Sie einen Port an.");
  process.exit(1);
}

const platform = process.platform;

let command;

if (platform === "win32") {
  // Windows-Befehl zum Finden der PID, die den Port verwendet
  command = `netstat -ano | findstr :${port}`;
} else {
  // Unix-Befehl zum Finden der PID, die den Port verwendet
  command = `lsof -i :${port}`;
}

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(`Fehler beim Ausführen des Befehls: ${stderr}`);
    process.exit(1);
  }

  // Extrahieren der PID
  const pid =
    platform === "win32"
      ? stdout.split(/\s+/)[4] // Windows
      : stdout.split("\n")[1]?.split(/\s+/)[1]; // Unix

  if (!pid) {
    console.log(`Kein Prozess gefunden, der Port ${port} verwendet.`);
    return;
  }

  const killCommand =
    platform === "win32" ? `taskkill /PID ${pid} /F` : `kill -9 ${pid}`;

  exec(killCommand, (err, stdout, stderr) => {
    if (err) {
      console.error(`Fehler beim Beenden des Prozesses: ${stderr}`);
      process.exit(1);
    }

    console.log(
      `Prozess auf Port ${port} (PID: ${pid}) wurde erfolgreich beendet.`
    );
  });
});
