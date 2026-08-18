const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

const KEY = "procrastinator_exe_v1";

/* =========================================================
   WHEEL SOUND
   ========================================================= */

const wheelSpinSound = new Audio("music/wheel-spin.mp3");
wheelSpinSound.loop = true;
wheelSpinSound.volume = 0.6;
wheelSpinSound.playbackRate = 2.0;

const alarmSound = new Audio("alarm/alarm.mp3");
alarmSound.volume = 0.8;
alarmSound.preload = "auto";

/* =========================================================
   EXCUSES
   ========================================================= */

const excuses = [
["Get a snack first.","COMMON"],
["Get some water.","COMMON"],
["Stretch for five minutes.","COMMON"],
["Check your notifs.","COMMON"],
["Take a tiiiiiiny mental break.","COMMON"],
["Your brain needs a reboot, go to sleep.","COMMON"],
["Look out the window, might see something cool.","COMMON"],
["Fix your posture first, for maybe this long:","COMMON"],
["Check the weather, maybe you can't work.","COMMON"],
["Organize your desktop. Prolly a mess, amiright?","UNCOMMON"],
["Clean your keyboard, that s*** staaaank.","UNCOMMON"],
["Rename a few files, absolutely essential","UNCOMMON"],
["Make a new playlist, with that one new album (i dunno).","UNCOMMON"],
["Check whether your headphones work by watching 10 Things I Hate About You.","UNCOMMON"],
["Research a completely unrelated topic, I personally recommend Kurzgesagt and their videos on cancer.","UNCOMMON"],
["Scroll on shorts, you're not motivated enough.","UNCOMMON"],
["Your mouse deserves attention, hop on RIVALS with JacobMyron.","UNCOMMON"],
["Open Task Manager. You haven't today, and you might have malware, who knows.","UNCOMMON"],
["The viiiibes aren't aligned, wait a bit.","RARE"],
["You need to investigate penguins. Check out Penguin Highway!","RARE"],
["You should contemplate the concept of Tuesday.","RARE"],
["Your chair has been suspiciously quiet.","RARE"],
["The UNIVERSE has requested a break. For you specifically. Else, there will be a UNIVERSAL COLLAPSE!","RARE"],
["This is clearly the time for a side quest, go out NOW.","RARE"],
["Your computer needs emotional support. Probably physical too, if you're a student.","RARE"],
["You haven't blinked enough today. Unless you're Shylah, you can skip this.","RARE"],
["Mercury is probably doing something. Rent a telescope.","EPIC"],
["The moon has authorized a break. It was the first waterbender afterall.","EPIC"],
["Your keyboard has filed a formal complaint. Stop typing, and I dunno, go scroll maybe.","EPIC"],
["A p̷͔̫̺͉͕͙̅̊̽͊̓͛͛͗̂̓͂̐͘͝r̸̠͍͎̫̪͕̟͎̝̖̽́́̈̊̑̍̐̓͗̕ǫ̵̨̩̫͖̖̗̹̟̤̳̥̱̏̈́̃̓̿͑͂̑̇͜͠d̵̰̲̯̜͐̍̐̇͋̇͌̏̀̆̔̉̃͑͘u̵̢̲͎͍̳͔̲͐͌͗̅̀̾̏͘ç̶̪̱̩̹̟̲̞̬̃́̑͑̀̈́̋̍͊̓̆̾̓̒̚͜t̷̢̛̘̬̬̞͉͉̪͍̊̓̈̏̌́̉̋͂i̴̳̥̝͖̦̥̥͈̹̗͎͖̳̞͇̓͛͛͋̄̌̉̿̿͂̎͘̚͘v̷͕͔̩͆͐́̆͠i̵̛̪̿̒̽̃̔͠t̷̛̲̳͕̐̋y̴̡̡̭̞̟̩̺͐̋͂͠ ̴̗̹͎̖̯͔͕̏̾̇a̸̢̲͍̪̼͙̟̅̐̆̿̏̓̏̓̂̋̒̉͝͝ͅn̸̢͍̱̥͕͍̞̄͑̈́̏͗͂́͐̕ǫ̷̛̛̟̻̩̜̯̲͖̼͍̈́̍͐̍̅̐̐̏̓̂͝͝ͅm̵̛̛̠̬̲̠̹̪̝͎͉̆̊̽̉̏̈́͑̎͝ạ̷̧̫̙̭͍̙̅l̴̨̋̈́̈́̋͠ẏ̴̢̡̼̗͚͉̭̱͕̱̭̺̗̅͐̌̎́̂͒́͠͠ has been detected. Avoid productivity for a bit.","EPIC"],
["You must first determine whether cereal is soup. Search it up on Google.","EPIC"],
["The ancient internet demands tribute. Watch a VSauce video.","EPIC"],
["Your task has entered a temporary dimension. Can't work for:","LEGENDARY"],
["You have achieved maximum productivity. Trust me bro, you're already productive. Do absolutely nothing.","LEGENDARY"],
["Future You has explicitly requested that you stop. Otherwise, you'll die, or something.","LEGENDARY"],
["I, (JACOB MYRON B. RODRIGUEZA) formally ask you to stop.","LEGENDARY"],
["Gotta practice for Glee Club!.","JACKPOT"],
["Check your phone. There might be something important. There probably isn't.","COMMON"],

["Drink water. Hydration is basically productivity, right?","COMMON"],
["Get a blanket. It's probably too cold to think.","COMMON"],
["Check the time. You need to know how much time you're wasting.","COMMON"],
["Open a new tab. The current tab feels wrong.","COMMON"],
["Close some tabs. You have way too many open.","COMMON"],
["Open the tabs again. You might need those.","COMMON"],
["Take a five minute break. Make sure it lasts at least twenty.","COMMON"],
["Check your messages. What if someone needs you right now?","COMMON"],
["Look at the ceiling for a second. Very important.","COMMON"],
["Get comfortable first. You can't work while uncomfortable.","COMMON"],
["Your chair isn't at the correct angle. Fix it.","COMMON"],
["Adjust your monitor. Something about it feels off. Actually though you lwk prolly haven't cleaned it. ","COMMON"],
["Move your keyboard slightly to the left. Muuuuuuch better.","COMMON"],
["Move it back. Actually, the first position was lowkey better.","COMMON"],
["Your desk looks weird. Fix that before anything else.","COMMON"],
["You should probably eat something. Your brain needs fuel. Before you, yknow.","COMMON"],
["Maybe you're hungry. Check the kitchen just in case.","COMMON"],
["Maybe you're tired. Lie down for a minute. Maaaybe 5.","COMMON"],
["You haven't checked YouTube today. That's duper concerning.","COMMON"],
["Check your downloads folder. You might have forgotten something.","COMMON"],
["Check your recycling bin. Maybe there's something important in there. Or you could clear it.","COMMON"],
["Sort your screenshots. Future You will appreciate it.","COMMON"],
["Take a trillion screenshots of something. You haven't taken one in a while.","COMMON"],
["Check your storage. You might be running out of space.","COMMON"],
["Update something. Anything. Updates are productive. Oh wait,","COMMON"],
["Check if your computer needs an update. This is lowkey maintenance.","COMMON"],
["Restart your computer. That usually fixes things.","COMMON"],
["Send 5 trillion USD to Israel.","COMMON"],
["Check your internet speed. This could be affecting super productivity.","COMMON"],
["Your Wi-Fi deserves a little attention. Connect ethernet or something.","COMMON"],
["Check the cables. One of them might be suspicious.","COMMON"],
["Make sure your headphones aren't secretly broken.","COMMON"],
["Test every key on your keyboard. You never know... Hahaha..","COMMON"],
["Clean your mousepad. It's seen things.","COMMON"],
["Wipe your screen. You can't work through all those fingerprints. Unless you're on PC, why do you have fingerprints?","COMMON"],

["Organize your folders. Future You will absolutely not thank you.","UNCOMMON"],
["I guess bro.","UNCOMMON"],
["Rename your desktop files so they look professional.","UNCOMMON"],
["Make a new desktop wallpaper. Your current one is getting old.","UNCOMMON"],
["Find a better wallpaper. This may take several hours.","UNCOMMON"],
["Look through your old wallpapers. Nostalgia is important.","UNCOMMON"],
["Take digicam pics! Lest you're Gwen, you've had enough.","UNCOMMON"],
["Find that one song you haven't heard in years.","UNCOMMON"],
["Listen to one song before working. Just one.","UNCOMMON"],
["Build a playlist for working. Set up some Linkin Park.","UNCOMMON"],
["Just chill here and listen to the fire music.","UNCOMMON"],
["Check what your friends are listening to.","UNCOMMON"],
["See what everyone else is doing. Research.","UNCOMMON"],
["Open Discord for one second. Nothing bad will happen.","UNCOMMON"],
["Check one Discord channel. Just one.","UNCOMMON"],
["You should probably reply to that message from three days ago.","UNCOMMON"],
["Check your notifications. Might be your  ex.","UNCOMMON"],
["Look at your old conversations. Maybe your ex.","UNCOMMON"],
["Check your browser history. You forgot what you were doing anyway.","UNCOMMON"],
["Google something random. Curiosity is good for the brain, maybe whales.","UNCOMMON"],
["Look up the most useless Wikipedia article you can find, maybe whales.","UNCOMMON"],
["Read about something completely unrelated. Education is education.","UNCOMMON"],
["Watch a documentary. That's basically studying.","UNCOMMON"],
["Watch a video essay. Those are educational too.","UNCOMMON"],
["Watch ONE video. You have incredible self-control.","UNCOMMON"],
["Light 500 cigarettes.","UNCOMMON"],
["Check the comments. The real information is always in the comments.","UNCOMMON"],
["Read the replies. Someone probably said something stupid.","UNCOMMON"],
["Scroll for a bit. You need inspiration.","UNCOMMON"],
["Scroll until you find something interesting. This could take a while.","UNCOMMON"],
["Buy a Steam game, maybe Hollow Knight. Gabe needs another yacht.","UNCOMMON"],
["Thy algorithm has been waiting for you.","UNCOMMON"],
["Look at shorts. Laughter improves productivity. Probably.","UNCOMMON"],
["Find a sick reel. Your mental health depends on it.","UNCOMMON"],
["Send a reel to someone. This is social productivity.","UNCOMMON"],
["Check if anyone sent you a reel.","UNCOMMON"],
["Open Google Maps and look around somewhere you've never been. Maybe Wales.","UNCOMMON"],
["Look at your old saved places. Why did you save those?","UNCOMMON"],
["Check the weather somewhere completely different. Maybe in Wales.","UNCOMMON"],
["Find out what time it is in another country. Maybe Wales.","UNCOMMON"],
["See what people are eating in another country. Maybe Wales.","UNCOMMON"],
["Look up a random animal. Animals are important. Maybe whales.","UNCOMMON"],
["Research an animal you know nothing about. Maybe whales.","UNCOMMON"],

["Find out how fast a penguin can run. Then watch Penguin Highway.","RARE"],
["Find out whether frogs have teeth. You deserve to know.","RARE"],
["Research why cats do that weird thing with their heads.","RARE"],
["Look up the world's smallest country. Geography can't hurt.","RARE"],
["Find the weirdest Wikipedia page. You have been chosen.","RARE"],
["You need to know why the sky is blue. Immediately.","RARE"],
["Try making music on Bandlab then post it on the internet for everyone to criticize you. Nice one.","RARE"],
["You need to know who invented the keyboard. This cannot wait.","RARE"],
["Investigate why QWERTY is the way it is. Society has questions. But you prolly seen it on a reel or something.","RARE"],
["Research the history of the chair you're sitting on.","RARE"],
["Your chair has lore. Find it.","RARE"],
["Your desk has been hiding secrets from you.","RARE"],
["The room feels different today. Investigate.","RARE"],
["Something is slightly out of place. Find it.","RARE"],
["There is probably a missing sock somewhere. Begin the search.","RARE"],
["You haven't checked underneath your bed recently. Not that you need to.","RARE"],
["Look behind your monitor. Something might be there.","RARE"],
["Check the other side of the room. You never know.","RARE"],
["The lighting isn't optimal. Spend twenty minutes fixing it.","RARE"],
["Your room could use a new atmosphere.","RARE"],
["Open the window. The outside world has updates.","RARE"],
["Close the window. Actually, it's probably too hot.","RARE"],
["The temperature is slightly wrong. Fix it.","RARE"],
["Sing out your heart, preferably about your current love!","RARE"],
["Make a site about procrastination to procrastinate.","RARE"],

["Rearrange your entire setup. This is DEFINITELY the solution.","EPIC"],
["You should like totally redesign your workspace before continuing.","EPIC"],
["Make your computer setup look like those ones on Pinterest.","EPIC"],
["Watch setup videos until you figure out the perfect setup. Me personally I have a Baymax on my desk.","EPIC"],
["Research mechanical keyboards. You don't need one, but still.","EPIC"],
["Research mice. There are apparently a lot of them.","EPIC"],
["Research monitors. You probably need a new one. Lowkey could just clean them though.","EPIC"],
["Research desk mats. This is somehow important.","EPIC"],
["Research ergonomic chairs. Your chair has failed you.","EPIC"],
["Build your dream PC in a spreadsheet. You don't have to buy it.","EPIC"],
["Design your dream room. Guevarra time!.","EPIC"],
["Make a completely unnecessary tier list.","EPIC"],
["Rank your favorite snacks. This requires serious consideration.","EPIC"],
["Rank every browser you have ever used.","EPIC"],
["Rank your old profile pictures. Historical research.","EPIC"],
["Make a tier list of your own procrastination methods.","EPIC"],
["Calculate how much time you've spent procrastinating. Then procrastinate more.","EPIC"],
["PLAY RED DEAD REDEMPTION 2.","EPIC"],
["Take a personality quiz. You need to understand yourself first.","EPIC"],
["Play literally any Final Fantasy, all of them are awesome.","EPIC"],
["Find out which fictional character you are. This is urgent.","EPIC"],
["Play Clair Obscur Expedition 33.","EPIC"],
["Play Assasins Creed Black Flag.","EPIC"],
["Rewatch a movie you already know. New discoveries are possible.","EPIC"],
["Watch the first episode of a show. You can stop after that.","EPIC"],
["Start a new show. Like BH6. Your current task will still be there later.","EPIC"],
["Read the entire plot of a movie you aren't going to watch. Like the Lighthouse.","EPIC"],
["Look up the ending of something. Spoilers build character.","EPIC"],
["Watch a musical! Artistic knowledge is important too!.","EPIC"],
["You need to learn/practice a completely unnecessary skill. Like DRAWING. Yeah, I said it.","EPIC"],

["Learn how to solve a Rubik's Cube. You have time. Ask Brien or something he used to cube.","LEGENDARY"],
["Learn a new language. This should only take a few years.","LEGENDARY"],
["Learn how to play an instrument. Your task can wait.","LEGENDARY"],
["Become weirdly knowledgeable about something nobody asked about. Like cancer!","LEGENDARY"],
["Read an entire Wikipedia rabbit hole. Start with anything. Like whales!","LEGENDARY"],
["Research the history of the internet. You may be gone for a while.","LEGENDARY"],
["Find the oldest thing currently on your computer. Just like, sort by date backwards.","LEGENDARY"],
["Investigate every file on your desktop. Leave no file behind.","LEGENDARY"],
["You NEEEED to discover what your computer has been doing while you were away.","LEGENDARY"],
["Just sleep bro.","LEGENDARY"],
["STOP. You are becoming productive. This cannot continue.","LEGENDARY"],
["EMERGENCY: You were about to start working. Crisis averted.","LEGENDARY"],
["The machine has detected productivity. Please remain calm.","LEGENDARY"],
["YOUR TASK CAN WAIT. IT HAS BEEN WAITING THIS WHOLE TIME.","LEGENDARY"],
["You were going to work? That's crazy.","LEGENDARY"],
["Absolutely not. Try again tomorrow.","LEGENDARY"],
["The Green Lantern Corps have reviewed your case. You are free to do nothing.","LEGENDARY"],
["The council has determined that another break is necessary.","LEGENDARY"],
["Your deadline has been temporarily relocated. I knows where.","LEGENDARY"],
["The deadline is a social construct. Like gender! Haugh!","LEGENDARY"],

["You have reached a level of procrastination previously thought impossible. Mission accomplished. Get it? Cause it's impossible?","JACKPOT"],
["THE MACHINE HAS SPOKEN. GO DO LITERALLY ANYTHING ELSE.","JACKPOT"],
["Are you a big spoon or a small spoon? Come find out with me haha. Alr bro I mean I guess.","JACKPOT"],
["Get ready for school in any other way. like HOPPING ON ROOOOBLOOOX.","JACKPOT"],
["HAUUUGGHH.","JACKPOT"],
["ABSOLUTE VICTORY. WATCH SKIBIDI TOILET.","JACKPOT"],
["67 :LAUGH:","JACKPOT"],
["your assignment b liek: Fairs >-<.","JACKPOT"],
["I-I mean, it's not like I w-want you to leave and do your assignment or anything.. :3.","JACKPOT"],
["MAXIMUM PROCRASTINATION ACHIEVED. PLEASE DO NOT IMPROVE.","JACKPOT"]
];

/* =========================================================
   EXPAND TO 527
   ========================================================= */

const bases = [...excuses];

const prefixes = [
  "URGENT: ",
  "SYSTEM: ",
  "BREAKING: ",
  "IMPORTANT: ",
  "LOCAL NEWS: ",
  " ",
  "CLASSIFIED: ",
  "EMERGENCY: "
];

const suffixes = [
  " Probably.",
  " Obviously.",
  " For legal reasons.",
  " According to science.",
  " This is important.",
  " Trust the process.",
  " Do not question it.",
  " It is what it is.",
  " Immediately.",
  " Before proceeding.",
  " For research purposes.",
  " Because reasons.",
  " This cannot wait.",
  " The data is clear.",
  " Your future self agrees."
];

while (excuses.length < 527) {
  const b = bases[(excuses.length * 7) % bases.length];
  const p = prefixes[(excuses.length * 3) % prefixes.length];
  const s = suffixes[(excuses.length * 5) % suffixes.length];

  const rarity = [
    "COMMON",
    "COMMON",
    "COMMON",
    "UNCOMMON",
    "UNCOMMON",
    "RARE",
    "RARE",
    "EPIC",
    "LEGENDARY"
  ][(excuses.length * 11) % 9];

  excuses.push([p + b[0] + s, rarity]);
}

/* =========================================================
   GAME DATA
   ========================================================= */

const rarityWeight = {
  COMMON: 55,
  UNCOMMON: 25,
  RARE: 12,
  EPIC: 6,
  LEGENDARY: 1.8,
  JACKPOT: 0.2
};

const timeRanges = {
  COMMON: [5, 15],
  UNCOMMON: [10, 30],
  RARE: [20, 45],
  EPIC: [30, 90],
  LEGENDARY: [60, 180],
  JACKPOT: [180, 360]
};

const defaultData = {
  spins: 0,
  total: 0,
  longest: 0,
  sessions: 0,
  jackpots: 0,
  counts: {},
  history: [],
  achievements: {}
};

let data = loadData();

let current = null;
let timer = null;
let remaining = 0;
let totalSession = 0;
let paused = false;
let sessionEnded = false;

/* =========================================================
   SAFE DATA LOADING
   ========================================================= */

function loadData() {
  try {
    const saved = localStorage.getItem(KEY);

    if (!saved) {
      return structuredClone(defaultData);
    }

    const parsed = JSON.parse(saved);

    return {
      ...defaultData,
      ...parsed,
      counts: parsed.counts || {},
      history: Array.isArray(parsed.history) ? parsed.history : [],
      achievements: parsed.achievements || {}
    };
  } catch (e) {
    console.warn("Save data could not be loaded:", e);

    try {
      localStorage.removeItem(KEY);
    } catch (_) {}

    return structuredClone(defaultData);
  }
}

function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch (e) {
    console.warn("Could not save data:", e);
  }

  updateUI();
}

function prepareAudio() {
  if (!audio) {
    audio = new Audio();
    audio.loop = true;
    audio.preload = "auto";
  }

  audio.volume = getVolume();

  /*
   * Create/resume Web Audio while we're still
   * inside the user's click gesture.
   */
  setupBeatSync();

  if (
    beatAudioContext &&
    beatAudioContext.state === "suspended"
  ) {
    beatAudioContext.resume().catch(() => {});
  }
}
/* =========================================================
   HELPERS
   ========================================================= */

function fmt(sec) {
  sec = Math.max(0, Math.floor(Number(sec) || 0));

  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;

  return [
    String(h).padStart(2, "0"),
    String(m).padStart(2, "0"),
    String(s).padStart(2, "0")
  ].join(":");
}

function weightedPick() {
  const total = Object.values(rarityWeight)
    .reduce((a, b) => a + b, 0);

  let r = Math.random() * total;

  for (const [rarity, weight] of Object.entries(rarityWeight)) {
    r -= weight;

    if (r <= 0) {
      return rarity;
    }
  }

  return "COMMON";
}

function pick() {
  const rarity = weightedPick();

  const candidates = excuses
    .map((x, i) => [x, i])
    .filter(([x]) => x[1] === rarity);

  return candidates[
    Math.floor(Math.random() * candidates.length)
  ] || [excuses[0], 0];
}

function randomTime(rarity) {
  const [a, b] = timeRanges[rarity];

  const minutes =
    Math.floor(a + Math.random() * (b - a + 1));

  const seconds =
    Math.floor(Math.random() * 60);

  return minutes * 60 + seconds;
}

/* =========================================================
   NAVIGATION
   ========================================================= */

function setHashPage() {
  const id = location.hash.slice(1) || "home";

  const page = document.getElementById(id) ||
    document.getElementById("home");

  $$(".page").forEach(p => {
    p.classList.toggle("active", p === page);
  });

  /*
   * TEMP FIX:
   * If we're leaving the timer/home flow, refresh the relevant
   * UI instead of destroying application state.
   */
  if (page.id === "inventory") {
    renderInventory();
  }

  if (page.id === "stats") {
    renderStats();
    requestAnimationFrame(drawChart);
  }

  if (page.id === "home") {
    updateUI();
  }
}

window.addEventListener("hashchange", setHashPage);

/* =========================================================
   MUSIC
   ========================================================= */

const musicTracks = [
  { name: "MLG MONTAGE", file: "music/mlg.mp3" },
  { name: "XP DESKTOP", file: "music/xp.mp3" },
  { name: "RETRO ARCADE", file: "music/arcade.mp3" },
  { name: "2000s INTERNET", file: "music/internet.mp3" },
  { name: "TEMPTATION", file: "music/chaos.mp3" },
  { name: "RAKUICHI BUSTER", file: "music/buster.mp3" },
  { name: "windows breakcore", file: "music/breakcore.mp3" },
  { name: "THE MISSION", file: "music/mission.mp3" },
  { name: "THE CENTER", file: "music/center.mp3" },
  { name: "Mice on Venus.", file: "music/mice.mp3" },
  { name: "Down the Shore", file: "music/galdin.mp3" },
  { name: "CONQUEST", file: "music/conquest.mp3" },
  { name: "SLEET", file: "music/sleet.mp3" },
  { name: "HYPER", file: "music/hyper.mp3" },
  { name: "TRIAL BY FIRE", file: "music/trial.mp3" },
  { name: "SCOURGE OF THE UNIVERSE", file: "music/scourge.mp3" },
  { name: "DEATH BY GLAMOUR", file: "music/glamour.mp3" },
  { name: "NO MORE", file: "music/nomore.mp3" },
  { name: "UNBREAKABLE TIE", file: "music/UNBREAKABLE TIE.mp3" },
  { name: "GREENPATH", file: "music/greenpath.mp3" },
  { name: "CEREBRAWL", file: "music/cerebrawl.mp3" },
  { name: "RESPITE", file: "music/respite.mp3" },
  { name: "A TALE OF ETERNITY", file: "music/tale.mp3" },
  { name: "DREAM AVENUE", file: "music/dream.mp3" },
  { name: "ON OUR WAY", file: "music/way.mp3" },
  { name: "COLOR YOUR NIGHT", file: "music/coloryournight.mp3" },
  { name: "AZNANA", file: "music/aznana.mp3" },
  { name: "CORROSION", file: "music/corrosion.mp3" },
  { name: "ISOLATION", file: "music/isolation.mp3" },
  { name: "A SLICE OF FATE", file: "music/fate.mp3" },
  { name: "VIATOR", file: "music/viator.mp3" },
  { name: "BRAWL", file: "music/brawl.mp3" },
  { name: "PACIFIC RIM", file: "music/pacific.mp3" },
  { name: "SAKAI", file: "music/sakai.mp3" },
  { name: "DREAM LANTERN", file: "music/dreamlantern.mp3" },
  { name: "WATASHI WA WATASHI", file: "music/staywithme.mp3" },
];

let audio = null;
let currentTrack = null;
let lobbyAudio = null;
let musicStarted = false;

/* =========================================================
   AUDIO VISUALIZER
   =========================================================
   
   No BPM detection.
   No drum detection.
   No guessing where beats are.

   The visualizer simply reacts directly to the music's
   frequency spectrum, so it works with:
   
   - drums
   - piano
   - vocals
   - synths
   - orchestral music
   - ambient music
   - songs with NO drums whatsoever
*/


let beatAudioContext = null;
let beatAnalyser = null;
let beatSource = null;

let beatData = null;
let waveformData = null;

let beatFrame = null;

let visualizerCanvas = null;
let visualizerCtx = null;

let visualizerReady = false;


/* =========================================================
   VISUALIZER SETTINGS
   ========================================================= */

const VISUALIZER_FFT_SIZE = 2048;

/*
 * How much of the visualizer's motion is smoothed.
 *
 * Higher = smoother
 * Lower = more reactive
 */
const VISUALIZER_SMOOTHING = 0.82;

/*
 * Overall visualizer opacity.
 */
const VISUALIZER_OPACITY = 0.45;

/*
 * How strongly bass influences the visualizer.
 */
const BASS_BOOST = 1.35;

/*
 * Minimum movement so quiet music doesn't look dead.
 */
const MIN_MOVEMENT = 0.035;


/* =========================================================
   INTERNAL STATE
   ========================================================= */

let visualizerBars = [];
let previousVisualizerBars = [];

let visualizerEnergy = 0;
let previousVisualizerEnergy = 0;

let visualizerWidth = 0;
let visualizerHeight = 0;


/* =========================================================
   CREATE CANVAS
   ========================================================= */

function createVisualizer() {

  if (visualizerCanvas) {
    return;
  }

  visualizerCanvas =
    document.createElement("canvas");

  visualizerCanvas.id =
    "audioVisualizer";

  /*
   * The canvas is created entirely from JS,
   * so you don't need to modify your HTML.
   */
  visualizerCanvas.style.position =
    "fixed";

  visualizerCanvas.style.left =
    "0";

  visualizerCanvas.style.bottom =
  "env(safe-area-inset-bottom, 0px)";

  visualizerCanvas.style.width =
    "100vw";

  visualizerCanvas.style.height =
    "32vh";

  visualizerCanvas.style.pointerEvents =
    "none";

  visualizerCanvas.style.zIndex =
    "0";

  visualizerCanvas.style.opacity =
    String(VISUALIZER_OPACITY);

  visualizerCanvas.style.transition =
    "opacity 0.3s ease";

  /*
   * Prevent it from accidentally interfering
   * with your existing UI.
   */
  visualizerCanvas.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.appendChild(
    visualizerCanvas
  );

  visualizerCtx =
    visualizerCanvas.getContext("2d");

  resizeVisualizer();

}


/* =========================================================
   RESIZE
   ========================================================= */

function resizeVisualizer() {

  if (!visualizerCanvas) {
    return;
  }

  const dpr =
    window.devicePixelRatio || 1;

  visualizerWidth =
    window.innerWidth;

  visualizerHeight =
    window.innerHeight *
    0.32;

  visualizerCanvas.width =
    visualizerWidth * dpr;

  visualizerCanvas.height =
    visualizerHeight * dpr;

  /*
   * Draw using CSS-pixel coordinates.
   */
  visualizerCtx.setTransform(
    dpr,
    0,
    0,
    dpr,
    0,
    0
  );

}


/* =========================================================
   SETUP AUDIO ANALYSER
   ========================================================= */

function setupBeatSync() {

  /*
   * We only create the analyser/source once.
   *
   * This is important because calling
   * createMediaElementSource() repeatedly on
   * the same Audio element causes errors.
   */
  if (
    !audio ||
    beatAnalyser
  ) {

    return;

  }

  try {

    beatAudioContext =
      new (
        window.AudioContext ||
        window.webkitAudioContext
      )();

    beatAnalyser =
      beatAudioContext.createAnalyser();

    /*
     * Larger FFT = more frequency detail.
     */
    beatAnalyser.fftSize =
      VISUALIZER_FFT_SIZE;

    /*
     * Smoothing makes the bars flow rather
     * than violently jumping every frame.
     */
    beatAnalyser.smoothingTimeConstant =
      0.78;

    beatSource =
      beatAudioContext
        .createMediaElementSource(
          audio
        );

    beatSource.connect(
      beatAnalyser
    );

    beatAnalyser.connect(
      beatAudioContext.destination
    );

    beatData =
      new Uint8Array(
        beatAnalyser.frequencyBinCount
      );

    waveformData =
      new Uint8Array(
        beatAnalyser.fftSize
      );

    visualizerReady =
      true;

  } catch (err) {

    console.warn(
      "Audio visualizer could not start:",
      err
    );

  }

}


/* =========================================================
   START VISUALIZER
   ========================================================= */

function startBeatSync() {

  if (
    !$("#beatSyncToggle")?.checked ||
    !audio ||
    !timer ||
    paused ||
    sessionEnded
  ) {

    return;

  }

  createVisualizer();

  setupBeatSync();

  if (
    !beatAudioContext ||
    !beatAnalyser
  ) {

    return;

  }

  if (
    beatAudioContext.state ===
    "suspended"
  ) {

    beatAudioContext
      .resume()
      .catch(() => {});

  }

  cancelAnimationFrame(
    beatFrame
  );

  /*
   * Reset visualizer state.
   */
  visualizerBars = [];

  previousVisualizerBars = [];

  visualizerEnergy = 0;

  previousVisualizerEnergy = 0;

  /*
   * Make visualizer visible.
   */
  if (visualizerCanvas) {

    visualizerCanvas.style.opacity =
      String(VISUALIZER_OPACITY);

  }

  visualizerLoop();

}


/* =========================================================
   STOP VISUALIZER
   ========================================================= */

function stopBeatSync() {

  cancelAnimationFrame(
    beatFrame
  );

  beatFrame = null;

  visualizerBars = [];

  previousVisualizerBars = [];

  visualizerEnergy = 0;

  previousVisualizerEnergy = 0;

  /*
   * Keep the canvas alive, but hide it.
   *
   * This means we don't repeatedly create/destroy
   * DOM elements during the session.
   */
  if (visualizerCanvas) {

    visualizerCanvas.style.opacity =
      "0";

  }

  /*
   * Keep these existing CSS hooks working.
   */
  document.body.classList.remove(
    "beat-pulse",
    "beat-heavy"
  );

  document.body.style.setProperty(
    "--beat-strength",
    "0"
  );

}

function playSelectedMusic() {

  if (!audio || !currentTrack) {
    return;
  }

  const label = $("#musicLabel");

  audio.volume = getVolume();

  const play = () => {

    audio.play()
      .then(() => {

        if (label) {
          label.textContent =
            `♪ ${currentTrack.name} // PLAYING`;
        }

        if (
          timer &&
          !paused &&
          $("#beatSyncToggle")?.checked
        ) {
          startBeatSync();
        }

      })
      .catch(err => {

        console.warn(
          "Music playback failed:",
          err
        );

      });

  };

  /*
   * If the browser already has enough data,
   * play immediately.
   */
  if (audio.readyState >= 3) {

    play();

    return;

  }

  /*
   * Otherwise wait until enough audio has
   * buffered.
   */
  audio.addEventListener(
    "canplay",
    play,
    { once: true }
  );

}
/* =========================================================
   GET AUDIO DATA
   ========================================================= */

function getVisualizerData() {

  if (
    !beatAnalyser ||
    !beatData
  ) {

    return null;

  }

  beatAnalyser.getByteFrequencyData(
    beatData
  );

  /*
   * Also grab waveform data.
   * This gives us information about the actual
   * shape/intensity of the audio signal.
   */
  if (waveformData) {

    beatAnalyser.getByteTimeDomainData(
      waveformData
    );

  }

  return beatData;

}


/* =========================================================
   CALCULATE ENERGY
   ========================================================= */

function calculateAudioEnergy(data) {

  if (!data || !data.length) {
    return 0;
  }

  /*
   * Don't treat every frequency equally.
   *
   * Human perception is heavily influenced by
   * low frequencies, so bass gets extra weight.
   */
  let total = 0;
  let weightTotal = 0;

  const bassEnd =
    Math.floor(data.length * 0.08);

  const lowEnd =
    Math.floor(data.length * 0.25);

  for (
    let i = 0;
    i < data.length;
    i++
  ) {

    let weight = 1;

    if (i < bassEnd) {

      weight =
        BASS_BOOST;

    } else if (
      i < lowEnd
    ) {

      weight =
        1.15;

    }

    total +=
      data[i] * weight;

    weightTotal +=
      weight;

  }

  return (
    total /
    Math.max(weightTotal, 1)
  ) / 255;

}


/* =========================================================
   CREATE SMOOTH BAR DATA
   ========================================================= */

function calculateBars(data) {

  if (!data) {
    return [];
  }

  /*
   * We don't need hundreds of bars.
   *
   * Around 80 gives a much cleaner visual.
   */
  const BAR_COUNT = 80;

  const bars = [];

  const samplesPerBar =
    data.length /
    BAR_COUNT;

  for (
    let i = 0;
    i < BAR_COUNT;
    i++
  ) {

    const start =
      Math.floor(
        i * samplesPerBar
      );

    const end =
      Math.floor(
        (i + 1) *
        samplesPerBar
      );

    let total = 0;

    let count = 0;

    for (
      let j = start;
      j < end;
      j++
    ) {

      /*
       * Frequency data is already logarithmically
       * useful, but averaging the bins makes it
       * significantly smoother.
       */
      total += data[j];

      count++;

    }

    let value =
      count
        ? total / count / 255
        : 0;

    /*
     * Make the bass side more energetic.
     */
    if (i < BAR_COUNT * 0.12) {

      value *=
        BASS_BOOST;

    }

    /*
     * Gentle minimum movement.
     */
    value =
      Math.max(
        MIN_MOVEMENT,
        Math.min(1, value)
      );

    /*
     * Smooth against previous frame.
     */
    const previous =
      previousVisualizerBars[i] || 0;

    value =
      previous *
        VISUALIZER_SMOOTHING +
      value *
        (1 - VISUALIZER_SMOOTHING);

    bars.push(value);

  }

  previousVisualizerBars =
    bars.slice();

  return bars;

}


/* =========================================================
   DRAW VISUALIZER
   ========================================================= */

function drawVisualizer(
  data,
  bars,
  energy
) {

  if (
    !visualizerCtx ||
    !visualizerCanvas
  ) {

    return;

  }

  const ctx =
    visualizerCtx;

  const w =
    visualizerWidth;

  const h =
    visualizerHeight;

  /*
   * Clear previous frame.
   */
  ctx.clearRect(
    0,
    0,
    w,
    h
  );

  if (!bars.length) {
    return;
  }

  /*
   * Center line.
   */
  const centerY =
  h;

  const maxBarHeight =
    h * 0.82;

  const barWidth =
    w /
    bars.length;

  /*
   * Draw mirrored bars.
   *
   * This makes it feel more like an actual
   * music visualizer rather than an equalizer.
   */
  for (
    let i = 0;
    i < bars.length;
    i++
  ) {

    const value =
      bars[i];

    /*
     * Exaggerate stronger frequencies.
     */
    const height =
      Math.pow(
        value,
        0.72
      ) *
      maxBarHeight;

    const x =
      i * barWidth;

    const width =
      Math.max(
        1,
        barWidth - 2
      );

    /*
     * Fade the outside edges.
     */
    const edgeFade =
      Math.sin(
        Math.PI *
        (
          i /
          Math.max(
            bars.length - 1,
            1
          )
        )
      );

    const finalHeight =
      height *
      (
        0.45 +
        edgeFade * 0.55
      );

    /*
     * Main upper bar.
     */
    ctx.fillStyle =
      `rgba(102,255,0,${0.20 + value * 0.55})`;

    ctx.fillRect(
      x,
      centerY -
        finalHeight,
      width,
      finalHeight
    );

    /*
     * Small mirrored reflection.
     */
    ctx.fillStyle =
      `rgba(102,255,0,${0.06 + value * 0.14})`;

    ctx.fillRect(
      x,
      centerY,
      width,
      finalHeight * 0.18
    );

  }

  /*
   * Draw a subtle glowing energy line.
   */
  ctx.beginPath();

  ctx.lineWidth =
    2;

  ctx.strokeStyle =
    `rgba(102,255,0,${0.15 + energy * 0.4})`;

  for (
    let i = 0;
    i < bars.length;
    i++
  ) {

    const x =
      i * barWidth +
      barWidth / 2;

    const y =
      centerY -
      Math.pow(
        bars[i],
        0.8
      ) *
      maxBarHeight *
      0.65;

    if (i === 0) {

      ctx.moveTo(
        x,
        y
      );

    } else {

      ctx.lineTo(
        x,
        y
      );

    }

  }

  ctx.stroke();

}


/* =========================================================
   VISUAL PULSE
   ========================================================= */

function triggerBeat(strength) {

  strength =
    Math.max(
      0,
      Math.min(
        1,
        strength
      )
    );

  document.body.style.setProperty(
    "--beat-strength",
    strength.toFixed(2)
  );

  /*
   * Keep your existing CSS beat effects working.
   *
   * These are now driven by overall audio energy
   * instead of guessed BPM.
   */
  document.body.classList.remove(
    "beat-pulse",
    "beat-heavy"
  );

  void document.body.offsetWidth;

  if (
    strength >= 0.65
  ) {

    document.body.classList.add(
      "beat-heavy"
    );

  } else {

    document.body.classList.add(
      "beat-pulse"
    );

  }

}


/* =========================================================
   MAIN VISUALIZER LOOP
   ========================================================= */

function visualizerLoop() {

  if (
    !$("#beatSyncToggle")?.checked ||
    !audio ||
    !timer ||
    paused ||
    sessionEnded
  ) {

    stopBeatSync();

    return;

  }

  if (
    !beatAnalyser
  ) {

    beatFrame =
      requestAnimationFrame(
        visualizerLoop
      );

    return;

  }

  const data =
    getVisualizerData();

  if (!data) {

    beatFrame =
      requestAnimationFrame(
        visualizerLoop
      );

    return;

  }

  /*
   * Calculate overall audio energy.
   */
  const energy =
    calculateAudioEnergy(
      data
    );

  /*
   * Smooth energy.
   */
  visualizerEnergy =
    visualizerEnergy *
      0.85 +
    energy *
      0.15;

  /*
   * Detect sudden energy increases.
   *
   * This isn't BPM detection.
   *
   * It simply lets the existing CSS pulse
   * react naturally when the music suddenly
   * gets louder.
   */
  const energyChange =
    visualizerEnergy -
    previousVisualizerEnergy;

  previousVisualizerEnergy =
    visualizerEnergy;

  let strength =
    energy * 0.45 +
    Math.max(
      0,
      energyChange * 5
    ) * 0.55;

  strength =
    Math.max(
      0,
      Math.min(
        1,
        strength
      )
    );

  /*
   * Only trigger the CSS pulse when there's
   * actually something happening.
   */
  if (
    strength > 0.18
  ) {

    triggerBeat(
      strength
    );

  }

  /*
   * Calculate frequency bars.
   */
  const bars =
    calculateBars(
      data
    );

  /*
   * Draw.
   */
  drawVisualizer(
    data,
    bars,
    visualizerEnergy
  );

  beatFrame =
    requestAnimationFrame(
      visualizerLoop
    );

}


/* =========================================================
   RESIZE LISTENER
   ========================================================= */

window.addEventListener(
  "resize",
  resizeVisualizer
);

function getVolume() {
  const slider = $("#volume");

  return Number(slider?.value || 40) / 100;
}

function startLobbyMusic() {
  // NEVER play lobby music during or after a timer session.
  if (timer || current) {
    return;
  }

  const musicLabel = $("#musicLabel");

  if (!lobbyAudio) {
    lobbyAudio = new Audio("lobby/lobby.mp3");

    lobbyAudio.loop = true;
    lobbyAudio.preload = "auto";
    lobbyAudio.volume = getVolume();

    lobbyAudio.addEventListener("error", () => {
      console.warn("Could not load music/lobby.mp3");

      if (musicLabel) {
        musicLabel.textContent =
          "♪ LOBBY.MP3 // FILE NOT FOUND";
      }

      musicStarted = false;
    });
  }

  lobbyAudio.volume = getVolume();

  if (!$("#musicToggle")?.checked) {
    return;
  }

  if (!lobbyAudio.paused) {
    musicStarted = true;

    if (musicLabel) {
      musicLabel.textContent =
        "♪ LOBBY MUSIC // PLAYING";
    }

    return;
  }

  lobbyAudio.play()
   .then(() => {
     // Timer/session started while audio was loading.
     // Kill lobby music immediately.
     if (timer || current) {
       stopLobbyMusic();
       return;
     }
   
     musicStarted = true;
   
     if (musicLabel) {
       musicLabel.textContent =
         "♪ LOBBY MUSIC // PLAYING";
     }
   })
    .catch(() => {
      /*
       * Browser autoplay policy.
       * Not a fatal error.
       */
    });
}

function stopLobbyMusic() {
  if (!lobbyAudio) {
    return;
  }

  lobbyAudio.pause();
  lobbyAudio.currentTime = 0;
  musicStarted = false;
}

function chooseMusic() {
  const toggle = $("#musicToggle");

  if (!toggle?.checked) {
    stopMusic();
    return;
  }

  const choices = musicTracks.filter(
    t => t.file !== currentTrack?.file
  );

  currentTrack =
    choices[Math.floor(Math.random() * choices.length)] ||
    musicTracks[0];

  if (!audio) {
    audio = new Audio();
  }

  audio.src = currentTrack.file;
  audio.loop = true;
  audio.preload = "auto";
  audio.volume = getVolume();

  audio.onerror = () => {
  console.error(
    "AUDIO LOAD ERROR:",
    currentTrack.file,
    audio.error
  );

  const label = $("#musicLabel");

  if (label) {
    label.textContent =
      `♪ ${currentTrack.name} // LOAD ERROR`;
  }
};

playSelectedMusic();

}

function pauseMusic() {
  if (audio) {
    audio.pause();
  }
}

function resumeMusic() {
  if (audio && currentTrack && $("#musicToggle")?.checked) {
    audio.play().catch(() => {});
  }
}

function stopMusic() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }

  const label = $("#musicLabel");

  if (label) {
    label.textContent = "♪ SILENT MODE";
  }
}

/*
 * Start lobby music from an actual user gesture.
 * This avoids autoplay killing the rest of the application.
 */
function tryStartLobbyMusic() {
  // HARD BLOCK:
  // Never allow lobby music while a timer is running
  // OR while a timer session still exists.
  if (timer || current) {
    return;
  }

  if (!$("#musicToggle")?.checked) {
    return;
  }

  if (lobbyAudio && !lobbyAudio.paused) {
    return;
  }

  startLobbyMusic();
}

/* =========================================================
   SPIN
   ========================================================= */

function spin() {
  const btn = $("#spinBtn");

  if (!btn || btn.disabled) {
    return;
  }

  try {
    btn.disabled = true;
    btn.classList.add("spinning");

    const status = $("#spinStatus");

    if (status) {
      status.textContent = "CALCULATING...";
    }

    const task =
      ($("#taskInput")?.value || "").trim() ||
      "your responsibilities";

    const homeTask = $("#homeTask");

    if (homeTask) {
      homeTask.textContent = task.toUpperCase();
    }

    data.spins = (Number(data.spins) || 0) + 1;

    const result = pick();

    if (!result || !result[0]) {
      throw new Error("Could not select an excuse");
    }

    const x = result[0];
    const index = result[1];
    const seconds = randomTime(x[1]);

    current = {
      text: x[0],
      rarity: x[1],
      index,
      time: seconds,
      task
    };

    data.counts = data.counts || {};

    data.counts[index] =
      (Number(data.counts[index]) || 0) + 1;

    if (x[1] === "JACKPOT") {
      data.jackpots =
        (Number(data.jackpots) || 0) + 1;
    }

    data.history = data.history || [];

    data.history.push({
      date: Date.now(),
      seconds
    });

    if (data.history.length > 30) {
      data.history.shift();
    }

    save();

    const wheel = $("#wheel");
    const wheelText = $("#wheelText");

    if (wheelText) {
      wheelText.textContent = "CALCULATING";
    }

    if (wheel) {
      wheel.style.transition = "none";
      wheel.offsetHeight;

      const turns =
        6 + Math.floor(Math.random() * 5);

      const deg =
        turns * 360 +
        Math.floor(Math.random() * 360);

      wheel.style.transition =
        "transform 5s cubic-bezier(.08,.72,.08,1)";

      wheelSpinSound.currentTime = 0;
      wheelSpinSound.play().catch(() => {});

      wheel.style.transform =
        `rotate(${deg}deg)`;
    }

    if ($("#shakeToggle")?.checked) {
      document.body.classList.add("shaking");
    }

    window.setTimeout(() => {
      document.body.classList.remove("shaking");

      wheelSpinSound.pause();
      wheelSpinSound.currentTime = 0;

      showResult();

      btn.disabled = false;
      btn.classList.remove("spinning");

      if (status) {
        status.textContent = "READY";
      }
    }, 5100);

  } catch (err) {
    console.error("Spin failed:", err);

    document.body.classList.remove("shaking");

    btn.disabled = false;
    btn.classList.remove("spinning");

    const status = $("#spinStatus");

    if (status) {
      status.textContent = "ERROR - TRY AGAIN";
    }

    toast("SPIN ERROR — TRY AGAIN");
  }
}

function showResult() {
  if (!current) {
    return;
  }

  if ($("#wheelText")) {
    $("#wheelText").textContent = "YOUR EXCUSE";
  }

  $("#result")?.classList.remove("hidden");

if ($("#resultRarity")) {
  $("#resultRarity").textContent =
    current.rarity;

  $("#resultRarity").className =
    "rarity-" + current.rarity.toLowerCase();
}

  if ($("#resultExcuse")) {
    $("#resultExcuse").textContent =
      `"${current.text}"`;
  }

  if ($("#resultTime")) {
    $("#resultTime").textContent =
      fmt(current.time).slice(3);
  }

  if ($("#resultReason")) {
    $("#resultReason").textContent =
      `Task detected: ${current.task}. The machine has determined that this can wait.`;
  }

  if (current.rarity === "JACKPOT") {
    flash("JACKPOT");
  }
}

/* =========================================================
   TIMER
   ========================================================= */

function startTimer() {
  if (!current || timer) {
    return;
  }

  stopLobbyMusic();

  remaining = totalSession = current.time;
  paused = false;
  sessionEnded = false;

  if ($("#timerExcuse")) {
    $("#timerExcuse").textContent =
      `"${current.text}"`;
  }

  if ($("#timerRarity")) {
    $("#timerRarity").textContent =
      current.rarity;
  }

  if ($("#finishBtn")) {
    $("#finishBtn").disabled = false;
  }

  location.hash = "timer";

  updateTimer();

  if ($("#musicToggle")?.checked) {
  prepareAudio();
  chooseMusic();
  } 

  clearInterval(timer);

  timer = setInterval(() => {
    if (paused) {
      return;
    }

    remaining--;

    updateTimer();

    if (remaining <= 0) {
      finishTimer(true);
    }
  }, 1000);
}

function updateTimer() {
  if (!$("#timerDisplay")) {
    return;
  }

  $("#timerDisplay").textContent =
    fmt(remaining).slice(3);

  if ($("#timerBar")) {
    const percent =
      totalSession > 0
        ? (remaining / totalSession) * 100
        : 0;

    $("#timerBar").style.width =
      Math.max(0, percent) + "%";
  }

  if ($("#pauseBtn")) {
    $("#pauseBtn").textContent =
      paused ? "RESUME" : "PAUSE";
  }
}

function finishTimer(completed) {
  if (sessionEnded) {
    return;
  }

  sessionEnded = true;

  clearInterval(timer);
  timer = null;

  stopMusic();
  stopBeatSync();

if (completed) {
  alarmSound.currentTime = 0;

  if ($("#musicToggle")?.checked) {
    alarmSound.volume = getVolume();
  } else {
    alarmSound.volume = 0.8;
  }

  alarmSound.play().catch(() => {
    console.warn("Could not play alarm ringtone.");
  });
}
   
  const spent =
    Math.max(0, totalSession - remaining);

  data.total =
    (Number(data.total) || 0) + spent;

  data.longest =
    Math.max(Number(data.longest) || 0, spent);

  data.sessions =
    (Number(data.sessions) || 0) + 1;

  save();

  if ($("#systemMessage")) {
    $("#systemMessage").textContent =
      completed
        ? "PROCRASTINATION COMPLETE. CONGRATULATIONS."
        : "SESSION TERMINATED. PRODUCTIVITY MAY RESUME.";
  }

  if ($("#finishBtn")) {
    $("#finishBtn").disabled = true;
  }

  /*
   * Give the UI a moment before moving to stats.
   */
  setTimeout(() => {
    if ($("#finishBtn")) {
      $("#finishBtn").disabled = false;
    }

    location.hash = "stats";
  }, 1200);
}

/* =========================================================
   INVENTORY
   ========================================================= */

function renderInventory() {
  const grid = $("#inventoryGrid");

  if (!grid) {
    return;
  }

  grid.innerHTML = "";

  excuses.forEach((x, i) => {
    const count =
      Number(data.counts?.[i]) || 0;

    const card =
      document.createElement("div");

    card.className =
     "card " +
     (count ? "found " : "locked ") +
     x[1].toLowerCase();

    card.innerHTML = `
      <span class="card-rarity">${x[1]}</span>
      <span class="num">×${count}</span>
      <p>${count ? x[0] : "????????????????"}</p>
    `;

    grid.appendChild(card);
  });
}

/* =========================================================
   ACHIEVEMENTS
   ========================================================= */

const achievements = [
  [
    "FIRST MISTAKE",
    "Spin the wheel once.",
    () => data.spins >= 1
  ],
  [
    "PROPROCRASTINATOR",
    "Waste an hour.",
    () => data.total >= 3600
  ],
  [
    "YOU COULD HAVE FINISHED",
    "Tend to say this a lot. Waste 5 hours.",
    () => data.total >= 18000
  ],
  [
    "FUTURE YOU HATES YOU",
    "I already do. Waste 24 hours.",
    () => data.total >= 86400
  ],
  [
    "GENSHIN ADDICTION",
    "Well, least I'm not one of those. Spin 100 times.",
    () => data.spins >= 100
  ],
  [
    "BRAIN RACH",
    "Collect 100 unique excuses. Just like him.",
    () => Object.keys(data.counts).length >= 100
  ],
  [
    "LEGEND VANQUISED",
    "Find a legendary excuse.",
    () =>
      Object.keys(data.counts)
        .some(i => excuses[i]?.[1] === "LEGENDARY")
  ],
  [
    "WINDOWS 98",
    "Complete a 3-hour session.",
    () => data.longest >= 10800
  ],
  [
    "HIT THE JACKPOT",
    "HEY! HEY! HEY! HEY! HEY! HEY!",
    () => data.jackpots >= 1
  ],
  [
    "EXCUSE MACHINE",
    "Collect 250 unique excuses.",
    () => Object.keys(data.counts).length >= 250
  ],
  
  [
  "I GUESS BRO",
  'Set "Ashley" as your task.',
  () => data.achievements?.ashley === true,
  true
]

];

function renderAchievements() {
  const grid = $("#achievementGrid");

  if (!grid) {
    return;
  }

  grid.innerHTML = "";

  achievements.forEach(([name, description, check]) => {
    let unlocked = false;

    try {
      unlocked = !!check();
    } catch (e) {
      console.warn("Achievement check failed:", name, e);
    }

    const element =
      document.createElement("div");

    element.className =
      "achievement " +
      (unlocked ? "unlocked" : "");

    element.innerHTML = `
      <b>${unlocked ? "✓ " : "□ "}${name}</b>
      <p>${description}</p>
    `;

    grid.appendChild(element);
  });
}

/* =========================================================
   STATS
   ========================================================= */

function renderStats() {
  updateUI();
}

function drawChart() {
  const canvas = $("#chart");

  if (!canvas) {
    return;
  }

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  const cssWidth =
    canvas.clientWidth || 900;

  const dpr =
    window.devicePixelRatio || 1;

  canvas.width = cssWidth * dpr;
  canvas.height = 250 * dpr;

  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  ctx.strokeStyle = "#333";
  ctx.lineWidth = 3 * dpr;

  for (let y = 60 * dpr; y < h; y += 80 * dpr) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  const hist = Array.isArray(data.history)
    ? data.history
    : [];

  if (!hist.length) {
    return;
  }

  const max =
    Math.max(
      ...hist.map(a => Number(a.seconds) || 0),
      1
    );

  ctx.strokeStyle = "#66ff00";
  ctx.lineWidth = 7 * dpr;
  ctx.beginPath();

  hist.forEach((p, i) => {
    const x =
      i /
      Math.max(hist.length - 1, 1) *
      w;

    const y =
      h -
      60 * dpr -
      ((Number(p.seconds) || 0) / max) *
      (h - 120 * dpr);

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });

  ctx.stroke();
}

/* =========================================================
   UI
   ========================================================= */

function updateUI() {
  const total = Number(data.total) || 0;
  const spins = Number(data.spins) || 0;
  const jackpots = Number(data.jackpots) || 0;
  const longest = Number(data.longest) || 0;
  const returnTimerBtn = $("#returnTimerBtn");

  if (returnTimerBtn) {
    returnTimerBtn.classList.toggle(
      "hidden",
      !(timer && current && !sessionEnded)
    );
  }


  const counts = data.counts || {};

  const unique =
    Object.keys(counts).length;

  const collected =
    Object.values(counts)
      .reduce(
        (a, b) => a + (Number(b) || 0),
        0
      );

  const formattedTotal = fmt(total);

  if ($("#homeTotal")) {
    $("#homeTotal").textContent =
      formattedTotal;
  }

  if ($("#homeSpins")) {
    $("#homeSpins").textContent =
      String(spins).padStart(3, "0");
  }

  if ($("#homeFound")) {
    $("#homeFound").textContent =
      String(unique).padStart(3, "0");
  }

  if ($("#homeJackpots")) {
    $("#homeJackpots").textContent =
      String(jackpots).padStart(3, "0");
  }

  if ($("#spinCount")) {
    $("#spinCount").textContent =
      String(spins).padStart(3, "0");
  }

  if ($("#statTotal")) {
    $("#statTotal").textContent =
      formattedTotal;
  }

  if ($("#statLongest")) {
    $("#statLongest").textContent =
      fmt(longest);
  }

  if ($("#statSpins")) {
    $("#statSpins").textContent =
      spins;
  }

  if ($("#statUnique")) {
    $("#statUnique").textContent =
      `${unique} / ${excuses.length}`;
  }

  if ($("#statJackpots")) {
    $("#statJackpots").textContent =
      jackpots;
  }

  if ($("#statSessions")) {
    $("#statSessions").textContent =
      Number(data.sessions) || 0;
  }

  if ($("#uniqueCount")) {
    $("#uniqueCount").textContent =
      `${unique} / ${excuses.length}`;
  }

  if ($("#inventoryTotal")) {
    $("#inventoryTotal").textContent =
      collected;
  }

  renderAchievements();
}

/* =========================================================
   VISUAL EFFECTS
   ========================================================= */

function flash(text) {
  const element = $("#flash");

  if (!element) {
    return;
  }

  element.textContent = text;
  element.classList.add("flash");

  setTimeout(() => {
    element.classList.remove("flash");
  }, 700);
}

function toast(text) {
  const element = $("#toast");

  if (!element) {
    return;
  }

  element.textContent = text;
  element.classList.add("show");

  setTimeout(() => {
    element.classList.remove("show");
  }, 2500);
}

/* =========================================================
   INITIALIZATION
   ========================================================= */

function init() {
  /*
   * Navigation
   */
  setHashPage();

  /*
   * Spin
   */
  $("#spinBtn")?.addEventListener("click", spin);
  $("#rerollBtn")?.addEventListener("click", spin);

  /*
   * Accept
   */
  $("#acceptBtn")?.addEventListener("click", () => {
  if (timer && current && !sessionEnded) {
    toast("ERROR — A SESSION IS ALREADY ONGOING.");
    flash("SESSION ACTIVE");
    return;
  }

  if (!current) {
    toast("ERROR — SPIN THE WHEEL FIRST.");
    return;
  }

  startTimer();
});

  /*
   * Timer controls
   */
  $("#pauseBtn")?.addEventListener("click", () => {
    if (!timer || sessionEnded) {
      return;
    }

    paused = !paused;

if (paused) {
  pauseMusic();
  stopBeatSync();
} else {
  resumeMusic();
  startBeatSync();
}

    updateTimer();

    if ($("#systemMessage")) {
      $("#systemMessage").textContent =
        paused
          ? "WORK DETECTED. TIMER PAUSED."
          : "Procrastination restored.";
    }
  });

$("#shuffleMusicBtn")?.addEventListener("click", () => {
    if (!timer || !current || sessionEnded) {
        return;
    }

    if (!$("#musicToggle")?.checked) {
        toast("MUSIC IS CURRENTLY OFF.");
        return;
    }

    chooseMusic();
});
   
  $("#finishBtn")?.addEventListener(
    "click",
    () => finishTimer(false)
  );
   
$("#returnTimerBtn")?.addEventListener("click", () => {
  if (timer && current && !sessionEnded) {
    location.hash = "timer";
  }
});

  /*
   * Reset
   */
  $("#resetBtn")?.addEventListener("click", () => {
    if (!confirm("Delete ALL procrastination progress?")) {
      return;
    }

    try {
      localStorage.removeItem(KEY);
    } catch (_) {}

    location.reload();
  });

  /*
   * Task input
   */
$("#taskInput")?.addEventListener("input", e => {
  const text =
    e.target.value || "NOTHING YET";

  if ($("#homeTask")) {
    $("#homeTask").textContent =
      text.toUpperCase();
  }

  /*
   * SECRET ACHIEVEMENT:
   * Type "Ashley" as the task.
   */
  if (
    text.trim().toLowerCase() === "ashley" &&
    !data.achievements?.ashley
  ) {
    data.achievements =
      data.achievements || {};

    data.achievements.ashley = true;

    save();

    flash("I GUESS BRO");
    toast("SECRET ACHIEVEMENT UNLOCKED");
  }
});

  /*
   * CRT
   */
  $("#crtToggle")?.addEventListener("change", e => {
    document.body.style.setProperty(
      "--crt",
      e.target.checked ? "1" : "0"
    );
  });

  /*
   * Shake
   */
  $("#shakeToggle")?.addEventListener("change", e => {
    document.body.classList.toggle(
      "no-shake",
      !e.target.checked
    );
  });

  /*
   * Volume
   */
  $("#volume")?.addEventListener("input", e => {
    const volume =
      Number(e.target.value) / 100;

    if (audio) {
      audio.volume = volume;
    }

    if (lobbyAudio) {
      lobbyAudio.volume = volume;
    }
  });

  /*
   * Music toggle
   */
  $("#musicToggle")?.addEventListener(
    "change",
    e => {
      if (!e.target.checked) {
        stopMusic();
        stopLobbyMusic();
        return;
      }

      if (timer && !paused) {
        chooseMusic();
      } else {
        startLobbyMusic();
      }
    }
  );

$("#beatSyncToggle")?.addEventListener(
  "change",
  e => {
    if (!e.target.checked) {
      stopBeatSync();
      return;
    }

    if (timer && !paused && audio) {
      startBeatSync();
    }
  }
);

  /*
   * Start lobby music only after a real click.
   * ONE listener. No duplicate pointer/mouse/touch listeners.
   */
  document.addEventListener(
    "click",
    tryStartLobbyMusic,
    true
  );

  /*
   * Resize chart
   */
  window.addEventListener("resize", () => {
    if (location.hash === "#stats") {
      drawChart();
    }
  });

     $("#returnTimerBtn")?.addEventListener("click", () => {
    if (timer && current && !sessionEnded) {
      location.hash = "timer";
    }
  });
  /*
   * Final UI refresh
   */
  updateUI();
}



/* =========================================================
   START APP
   ========================================================= */

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, {
    once: true
  });
} else {
  init();
}


if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
        title: "Procrastinator",
        artist: "MaroonDaLimited",
        album: "https://jacobworksonworks.github.io/procrastinator/",
        artwork: [
            {
                src: "https://www.heartofthedreaming.com/wp-content/uploads/2012/04/procrastination.jpg",
                sizes: "512x512",
                type: "image/jpg"
            }
        ]
    });
}
