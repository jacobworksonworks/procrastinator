const terminalOutput = document.getElementById("terminalOutput");
const commandInput = document.getElementById("commandInput");

const commandHistory = [];
let historyIndex = -1;

const bootLines = [
  "ARCHIVAL TERMINAL SYSTEM",
  "FACILITY NETWORK NODE 04",
  "",
  "----------------------------------------",
  "",
  "SYSTEM STATUS: OFFLINE",
  "ARCHIVE STATUS: READ-ONLY",
  "",
  "LAST SYSTEM ACCESS:",
  "01/02/1977  23:41:09",
  "",
  "----------------------------------------",
  "",
  'TYPE "HELP" FOR AVAILABLE COMMANDS.',
  ""
];

function print(text = "") {
  const line = document.createElement("div");
  line.textContent = text;
  terminalOutput.appendChild(line);

  document.getElementById("console").scrollTop =
    document.getElementById("console").scrollHeight;
}

function boot() {
  terminalOutput.innerHTML = "";

  bootLines.forEach(line => {
    print(line);
  });

  print("> ");
}

function showHelp() {
  print("");
  print("AVAILABLE COMMANDS:");
  print("");
  print("HELP       Display available commands");
  print("CLEAR      Clear terminal");
  print("STATUS     Display system status");
  print("LIST       List available archives");
  print("ABOUT      System information");
  print("");
}

function showStatus() {
  print("");
  print("SYSTEM STATUS: OFFLINE");
  print("ARCHIVE STATUS: READ-ONLY");
  print("NETWORK STATUS: DISCONNECTED");
  print("DATABASE STATUS: INTACT");
  print("");
}

function showList() {
  print("");
  print("ARCHIVE INDEX");
  print("----------------------------------------");
  print("SUBJECT FILES");
  print("RESEARCH LOGS");
  print("INCIDENT REPORTS");
  print("PERSONNEL FILES");
  print("SYSTEM RECORDS");
  print("----------------------------------------");
  print("");
}

function showAbout() {
  print("");
  print("ARCHIVAL TERMINAL SYSTEM");
  print("FACILITY NODE: 04");
  print("ACCESS LEVEL: PUBLIC");
  print("");
}

function processCommand(rawCommand) {
  const command = rawCommand.trim();
  const normalized = command.toLowerCase();

  if (!command) {
    return;
  }

  print(`> ${command}`);

  commandHistory.push(command);
  historyIndex = commandHistory.length;

  switch (normalized) {

    case "help":
      showHelp();
      break;

    case "clear":
      terminalOutput.innerHTML = "";
      break;

    case "status":
      showStatus();
      break;

    case "list":
      showList();
      break;

    case "about":
      showAbout();
      break;

    default:
      print("");
      print("UNKNOWN COMMAND.");
      print('TYPE "HELP" FOR AVAILABLE COMMANDS.');
      print("");
      break;
  }
}

commandInput.addEventListener("keydown", event => {

  if (event.key === "Enter") {
    processCommand(commandInput.value);
    commandInput.value = "";
    return;
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();

    if (commandHistory.length === 0) return;

    historyIndex = Math.max(0, historyIndex - 1);
    commandInput.value = commandHistory[historyIndex];
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();

    if (commandHistory.length === 0) return;

    historyIndex = Math.min(
      commandHistory.length,
      historyIndex + 1
    );

    commandInput.value =
      historyIndex === commandHistory.length
        ? ""
        : commandHistory[historyIndex];
  }
});

document.addEventListener("click", () => {
  commandInput.focus();
});

boot();
