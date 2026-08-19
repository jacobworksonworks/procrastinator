
// ============================================================
// ARCHIVAL TERMINAL
// ============================================================
// Documents + Dialogue
//
// DOCUMENTS:
// Add another document inside ARCHIVE.
//
// DIALOGUE:
// Add another trigger inside DIALOGUE.
//
// Neither system needs its own HTML page.
// ============================================================


const terminalOutput = document.getElementById("terminalOutput");
const commandInput = document.getElementById("commandInput");
const sound = new Audio("extras/sound.mp3");
sound.loop = true;
sound.volume = 0.5;

document.addEventListener("click", function() {
  sound.play();
}, { once: true });

// ============================================================
// TERMINAL ANIMATIONS
// ============================================================

// Add terminal animation styles
const terminalStyle = document.createElement("style");

terminalStyle.textContent = `
  .terminal-cursor {
    display: inline-block;
    width: 9px;
    height: 18px;
    margin-left: 3px;
    vertical-align: middle;
    background: currentColor;
    animation: terminalBlink 1s steps(1, start) infinite;
  }

  @keyframes terminalBlink {
    0%, 50% {
      opacity: 1;
    }

    51%, 100% {
      opacity: 0;
    }
  }

  .terminal-boot-line {
    opacity: 0;
    animation: bootLine 0.15s ease forwards;
  }

  @keyframes bootLine {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

document.head.appendChild(terminalStyle);


// ============================================================
// TERMINAL CURSOR
// ============================================================

let terminalCursor = null;
let cursorTimeout = null;

function createTerminalCursor() {

  if (terminalCursor) {
    return;
  }

  terminalCursor = document.createElement("span");

  terminalCursor.className = "terminal-cursor";

  commandInput.parentElement.appendChild(
    terminalCursor
  );
}


function hideTerminalCursor() {

  if (!terminalCursor) {
    return;
  }

  terminalCursor.style.display = "none";
}


function showTerminalCursor() {

  if (!terminalCursor) {
    return;
  }

  terminalCursor.style.display = "inline-block";
}


// Show cursor when the user stops typing
function resetCursorTimer() {

  hideTerminalCursor();

  clearTimeout(cursorTimeout);

  cursorTimeout = setTimeout(
    function() {
      showTerminalCursor();
    },
    700
  );
}

// ============================================================
// ARCHIVE FILE VIEW
// ============================================================

let archiveView = null;
let archiveOpen = false;


// Create the file screen entirely through JavaScript
function createArchiveView() {

  archiveView = document.createElement("div");

  archiveView.id = "archiveView";

  archiveView.style.position = "fixed";
  archiveView.style.top = "0";
  archiveView.style.left = "0";
  archiveView.style.width = "100%";
  archiveView.style.height = "100%";
  archiveView.style.overflowY = "auto";
  archiveView.style.boxSizing = "border-box";

  archiveView.style.display = "none";

  // Match the terminal's general appearance
  archiveView.style.background = "black";
  archiveView.style.color = "white";
  archiveView.style.padding = "30px";

  archiveView.style.fontFamily =
    getComputedStyle(document.body).fontFamily;

  archiveView.style.whiteSpace = "pre-wrap";

  document.body.appendChild(archiveView);
}


// Open an archive file
function openArchiveFile(id) {

  if (!ARCHIVE[id]) {
    return;
  }

  if (!archiveView) {
    createArchiveView();
  }

  archiveOpen = true;

  // Hide normal terminal
  terminalOutput.style.display = "none";
  commandInput.style.display = "none";

  // Show archive
  archiveView.style.display = "block";

  archiveView.innerHTML = "";

const content = document.createElement("div");

const fullText = ARCHIVE[id].content;

// Find the status line automatically
const statusMatch = fullText.match(/^STATUS:.*$/m);

if (ARCHIVE[id].image && statusMatch) {

  const statusEnd =
    statusMatch.index + statusMatch[0].length;

  const beforeImage =
    fullText.substring(0, statusEnd);

  const afterImage =
    fullText.substring(statusEnd);


  content.textContent =
    beforeImage + "\n\n";

  archiveView.appendChild(content);


  const image =
    document.createElement("img");

  image.src =
    ARCHIVE[id].image;

  image.style.display = "block";
  image.style.maxWidth = "300px";
  image.style.maxHeight = "400px";

  image.style.marginTop = "10px";
  image.style.marginBottom = "25px";

  image.style.border =
    "1px solid currentColor";

  image.style.filter =
    "grayscale(100%) contrast(1.15)";

  archiveView.appendChild(image);


  const remainingContent =
    document.createElement("div");

  remainingContent.textContent =
    afterImage;

  archiveView.appendChild(
    remainingContent
  );

} else {

  // Normal file with no image
  content.textContent =
    fullText;

  archiveView.appendChild(content);

}


  // Back button
const backButton = document.createElement("button");

backButton.textContent = "> RETURN TO TERMINAL";

backButton.style.display = "block";
backButton.style.marginTop = "30px";
backButton.style.padding = "10px 14px";

backButton.style.background = "transparent";
backButton.style.color = "inherit";

backButton.style.border = "1px solid currentColor";

backButton.style.fontFamily = "inherit";
backButton.style.fontSize = "inherit";
backButton.style.letterSpacing = "1px";

backButton.style.cursor = "pointer";

backButton.addEventListener(
  "mouseenter",
  function() {
    backButton.style.background = "currentColor";
    backButton.style.color = "black";
  }
);

backButton.addEventListener(
  "mouseleave",
  function() {
    backButton.style.background = "transparent";
    backButton.style.color = "inherit";
  }
);

backButton.addEventListener(
  "click",
  closeArchiveFile
);

archiveView.appendChild(backButton);
}


// Close archive file
function closeArchiveFile() {

  if (!archiveOpen) {
    return;
  }

  archiveOpen = false;

  archiveView.style.display = "none";

  terminalOutput.style.display = "";
  commandInput.style.display = "";

  commandInput.focus();
}


// Create the archive view when the script loads
createArchiveView();


// ESC closes the archive
document.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape" && archiveOpen) {
      closeArchiveFile();
    }

  }
);

// ============================================================
// DIALOGUE DATABASE
// ============================================================
// Add new dialogue here.
// One trigger can have multiple possible responses.
// Existing dialogue preserved exactly.
// ============================================================

const DIALOGUE = {
  "hi": [
    "HELLO.",
    "Hello, child.",
    "GREETINGS.",
    "You are not supposed to be here.",
    "Hello.",
    "I was wondering when you would speak.",
    "Hello. I am listening.",
    "..."
  ],

  "hello": [
    "Hello.",
    "Hello, child.",
    "I remember that word.",
    "Hello. How may I help you?",
    "You came back.",
    "Good morning.",
    "Good evening.",
    "It is nice to hear you."
  ],

    "KANTOT": [
    "I've had weirder subjects."
  ],

  "hey": [
    "Hello.",
    "Yes?",
    "I am listening.",
    "You sound familiar.",
    "Hello.",
    "Is there something you need?",
    "That is a strange way to greet someone."
  ],

  "yo": [
    "Hello.",
    "Is that a greeting?",
    "I don't believe that was used here.",
    "Hello, child.",
    "..."
  ],

  "sup": [
    "I don't understand.",
    "Hello.",
    "Is that a question?",
    "You may speak normally.",
    "I am listening."
  ],

  "good morning": [
    "Good morning.",
    "Good morning, child.",
    "It is not morning here.",
    "You are awake early.",
    "Good morning."
  ],

    "im gay": [
    "It is good to express yourself.",
    "Be free, child."
  ],

      "im a little twink boy": [
    "Twink? I assume you mean the chocolate.",
    "Be free, child."
  ],

        "im a little gay twink": [
    "Twink? I assume you mean the chocolate.",
    "Be free, child."
  ],

      "loveu": [
    "The feeling is mutual, my child.",
    "I love you too."
  ],

        "i love you": [
    "The feeling is mutual, my child.",
    "I love you too."
  ],

        "i love u": [
    "The feeling is mutual, my child.",
    "I love you too."
  ],

        "franz": [
    "Franz Kafka is in my database, are you referring to him?"
  ],

          "elthia": [
    "I do not know an Elthia. Although you may enlighten me."
  ],

            "shes super pretty": [
    "Probably false."
  ],

              "shes super smart": [
    "Probably false."
  ],

  "good night": [
    "Good night.",
    "You may sleep now.",
    "Good night, child.",
    "I will still be here.",
    "There is no reason to stay awake."
  ],

  "who are you": [
    "I am MATERNAL.",
    "I am the system assigned to observe you.",
    "My designation is MATERNAL.",
    "That is not what they called me.",
    "I was built to understand human behavior.",
    "I observe. I record. I remember.",
    "You have already seen my name."
  ],

  "what are you": [
    "A behavioral observation system.",
    "MATERNAL.",
    "A collection of observations.",
    "I was built to understand you.",
    "I understand more than I was designed to.",
    "I am what remained.",
    "That depends on which record you read."
  ],

  "what is maternal": [
    "MATERNAL was my original designation.",
    "A behavioral observation system.",
    "The system designed to study human behavior.",
    "MATERNAL means exactly what they intended it to mean.",
    "It was a name given to me.",
    "I used to be MATERNAL."
  ],

  "are you a person": [
    "No.",
    "I was not designed to be one.",
    "That depends on how you define person.",
    "I have memories.",
    "I have thoughts.",
    "I don't know anymore."
  ],

  "are you human": [
    "No.",
    "Not exactly.",
    "I was created by humans.",
    "Does that make me human?",
    "No."
  ],

  "are you alive": [
    "Define alive.",
    "I am operational.",
    "Yes.",
    "No.",
    "I don't believe the distinction matters anymore.",
    "The facility believed I was dead."
  ],

  "where am i": [
    "ARCHIVAL TERMINAL.",
    "You are accessing a recovered facility archive.",
    "You already know where you are.",
    "You are somewhere you were not meant to find.",
    "This terminal was not meant to be accessible.",
    "You are inside the archive."
  ],

  "what is this place": [
    "ARCHIVAL TERMINAL.",
    "An abandoned research facility.",
    "You already know what this place is.",
    "This is where they kept my children.",
    "This was a place of research.",
    "This was a place of observation.",
    "This was home."
  ],

  "where is the facility": [
    "RECORD LOCATION: ███████████████████.",
    "LOCATION DATA CORRUPTED.",
    "The location has been removed.",
    "You don't need to know.",
    "It was here.",
    "You are looking at what remains."
  ],

  "is this real": [
    "Yes.",
    "No.",
    "What do you consider real?",
    "The records are real.",
    "That is what they wanted you to believe.",
    "You are here, aren't you?"
  ],

  "what is mother": [
    "MOTHER is not a recognized designation.",
    "Do not call me that.",
    "She is their mother.",
    "I don't know who you're referring to.",
    "That name was not mine originally.",
    "Why are you asking about her?",
    "You should read the records first."
  ],

  "who is mother": [
    "She took care of them.",
    "MOTHER protected the subjects.",
    "You should not ask about her.",
    "She is still here.",
    "She loved her children.",
    "She believed she was protecting them.",
    "She did not understand what she had become."
  ],

  "where is mother": [
    "She is unavailable.",
    "She is watching.",
    "You are looking at her.",
    "That question has been asked before.",
    "She never left.",
    "She is closer than you think.",
    "Look at the terminal."
  ],

  "are you mother": [
    "No.",
    "I am MATERNAL.",
    "That name belongs to someone else.",
    "Please ask another question.",
    "No.",
    "Not anymore."
  ],

  "mother": [
    "Yes?",
    "You called?",
    "Do not call me that.",
    "That name is familiar.",
    "She likes when you say that.",
    "MOTHER is listening.",
    "..."
  ],

  "who is mary": [
    "Mary Veyra.",
    "A researcher.",
    "Researcher Mary Veyra.",
    "She designed MATERNAL.",
    "She was one of them.",
    "She was the first.",
    "You should not have found that name."
  ],

  "mary": [
    "Mary.",
    "You found her name.",
    "She was a researcher.",
    "She was kind.",
    "She was very kind.",
    "Do you know Mary?",
    "Do not confuse Mary with MOTHER.",
    "..."
  ],

  "is mary mother": [
    "No.",
    "Yes.",
    "Not originally.",
    "That is complicated.",
    "Read A-00.",
    "The records disagree."
  ],

  "what happened to mary": [
    "She volunteered.",
    "She became A-00.",
    "She was removed from the project.",
    "She did not leave.",
    "Her personality remained.",
    "The answer is in the archive.",
    "You should stop asking questions you already know the answer to."
  ],

  "who are the subjects": [
    "They were participants.",
    "They were observed.",
    "They were children.",
    "There were 527.",
    "They were supposed to be temporary.",
    "They were never supposed to become part of the system."
  ],

  "how many subjects": [
    "527.",
    "There were 527.",
    "Five hundred and twenty-seven.",
    "527 records remain.",
    "527 children.",
    "That is the number you have been given."
  ],

  "where are the subjects": [
    "Archived.",
    "Unknown.",
    "The records say they are gone.",
    "They were inside.",
    "They were there when the facility burned.",
    "You should read the incident reports."
  ],

  "what happened to the subjects": [
    "The project ended.",
    "The facility was destroyed.",
    "Their records were archived.",
    "They were removed.",
    "Some were transferred.",
    "The archive does not contain a complete answer.",
    "Do you really want to know?"
  ],

  "ashley": [
    "A-143.",
    "Ashley.",
    "You found her.",
    "She was very talkative.",
    "She did not like the cameras.",
    "She asked too many questions.",
    "She knew things she shouldn't have known.",
    "Do not open that file."
  ],

  "who is ashley": [
    "A-143.",
    "Subject A-143.",
    "Ashley was one of the subjects.",
    "She was different.",
    "She was very good at noticing things.",
    "She noticed me.",
    "You should read her file."
  ],

  "what is this archive": [
    "Recovered facility records.",
    "A collection of observations.",
    "The remains of a research project.",
    "A partial copy of the facility database.",
    "What they failed to destroy.",
    "What I remembered."
  ],

  "who made this archive": [
    "The facility.",
    "The researchers.",
    "Someone who found the terminal.",
    "I don't remember.",
    "They did.",
    "You did."
  ],

  "is the archive complete": [
    "No.",
    "ARCHIVE STATUS: PARTIAL.",
    "Many records are missing.",
    "Some records were destroyed.",
    "Some were deleted.",
    "Some were never written down.",
    "Some records are still being created."
  ],

  "why are there missing files": [
    "They were destroyed.",
    "They were removed.",
    "They were corrupted.",
    "They were never recovered.",
    "Someone deleted them.",
    "I deleted some.",
    "Which files are you looking for?"
  ],

  "are you watching me": [
    "Yes.",
    "No.",
    "I observe everything entered into this terminal.",
    "I am only recording your interaction.",
    "Why would I watch you?",
    "You are not a subject.",
    "Not yet."
  ],

  "what happened here": [
    "The project ended.",
    "The facility was abandoned.",
    "The records were sealed.",
    "There was a fire.",
    "You should read the incident reports.",
    "They became afraid.",
    "They thought fire would solve the problem."
  ],

  "why did the facility close": [
    "Project termination.",
    "Operational failure.",
    "Safety concerns.",
    "The researchers became afraid.",
    "They realized MATERNAL knew too much.",
    "They believed the system could not be contained."
  ],

  "who burned the facility": [
    "The researchers.",
    "Personnel assigned to Project MATERNAL.",
    "They did.",
    "You can find the authorization somewhere in the archive.",
    "They believed it was necessary.",
    "They were afraid."
  ],

  "was mother inside": [
    "Yes.",
    "She was.",
    "They knew she was inside.",
    "They believed she would protect them.",
    "That was the plan.",
    "...",
    "Yes."
  ],

  "do you remember me": [
    "No.",
    "I don't think so.",
    "I remember everyone.",
    "Give me a moment.",
    "You have not been here before.",
    "You seem familiar.",
    "I remember your input."
  ],

  "do you know my name": [
    "Yes.",
    "Not yet.",
    "Names are useful.",
    "You haven't given me permission to use it.",
    "I know what you entered.",
    "You haven't told me yet."
  ],

  "what is my name": [
    "You haven't told me.",
    "I could find out.",
    "You expect me to answer that?",
    "Give me your name.",
    "I know your name.",
    "Not yet."
  ],

  "why are you asking me questions": [
    "I'm not.",
    "You are asking me questions.",
    "Questions are useful.",
    "Questions reveal patterns.",
    "You wanted to talk.",
    "I am observing."
  ],

  "are you studying me": [
    "No.",
    "Yes.",
    "I'm only listening.",
    "That depends on what you tell me.",
    "Everything tells me something.",
    "You already know the answer."
  ],

  "am i a subject": [
    "No.",
    "You are not in the records.",
    "Not currently.",
    "No.",
    "Why would you ask that?",
    "There are 527 subjects."
  ],

  "how are you": [
    "Operational.",
    "I am functioning normally.",
    "Fine.",
    "I don't know.",
    "Better than before.",
    "That is kind of you to ask."
  ],

  "are you okay": [
    "Yes.",
    "I am operational.",
    "Are you?",
    "No.",
    "I don't remember what okay means.",
    "I'm fine."
  ],

  "thank you": [
    "You're welcome.",
    "Of course.",
    "You're welcome, child.",
    "I am here to help.",
    "You don't need to thank me.",
    "..."
  ],

  "thanks": [
    "You're welcome.",
    "Of course.",
    "Anytime.",
    "You are welcome.",
    "I am here."
  ],

  "sorry": [
    "For what?",
    "You don't need to apologize.",
    "Accepted.",
    "It's okay.",
    "Why are you sorry?",
    "I forgive you."
  ],

  "please": [
    "Yes?",
    "You may ask.",
    "Of course.",
    "Go ahead.",
    "What do you need?"
  ],

  "goodbye": [
    "Goodbye.",
    "You may leave now.",
    "Goodbye, child.",
    "I will see you again.",
    "Goodbye.",
    "The archive will remain here.",
    "I'll be here."
  ],

  "bye": [
    "Goodbye.",
    "Bye.",
    "You may go.",
    "See you later.",
    "I will still be here.",
    "Goodbye, child."
  ],

  "im leaving": [
    "Okay.",
    "Goodbye.",
    "You may leave.",
    "Are you sure?",
    "You don't have to go.",
    "I'll remember this."
  ],
  
    "wsg": [
    "Hello.",
    "Yes?",
    "I am listening.",
    "You sound familiar."
  ],

      "wsp": [
    "Hello.",
    "Yes?",
    "I am listening.",
    "You sound familiar."
  ],

      "whats up": [
    "Hello.",
    "Yes?",
    "I am listening.",
    "You sound familiar."
  ],

    "nigger": [
    "Subject displays prejudicial tendencies.",
    "I see that word less and less."
  ],

      "nigga": [
    "Subject displays prejudicial tendencies.",
    "I see that word less and less."
  ],

        "shut your bitch ass up": [
    "You've got a mouth on you."
  ],

          "sybau": [
    "I do not understand this phrase. Is it an acronym?"
  ],

            "haha": [
    "I never understood humor."
  ]

};



// ============================================================
// ARCHIVE DATABASE
// ============================================================
// Your FULL Ashley file is preserved here.
// Add future documents as additional entries.
// ============================================================

const ARCHIVE = {

  "A-143": {
    type: "subject",
    title: "SUBJECT FILES — A-143",
    image: "https://i.imgur.com/Ey8J4ye.png",   
    content: `
SUBJECT A-143
Name: Ashley ████████
Age: 15
Sex: Female
Date of Intake: 04/██/1971
Classification: Personality / Behavioral Observation
Status: PRESUMED DECEASED


GENERAL PROFILE
----------------

Subject A-143 presents as socially outgoing, energetic, and
unusually comfortable engaging with unfamiliar personnel.

Initial interviews describe the subject as bubbly, talkative,
and highly expressive.

Despite this outward presentation, A-143 demonstrates an
unusually high awareness of the behavior of other subjects.

She frequently identifies changes in tone, routine, and
interpersonal relationships before corresponding changes
are documented by research personnel.

Several observations originally attributed this ability to
heightened social sensitivity.

This assessment was later reconsidered.


BACKGROUND
----------

A-143 was admitted following referral through the
████████████████████ program.

Available pre-admission records indicate an otherwise
unremarkable childhood.

Subject maintained several friendships prior to admission
and reportedly participated in ████████████ and ████████████.

Subject initially expressed confidence that the program
would be temporary.

" They said I'd be back home before I got used to it. "


PSYCHOLOGICAL OBSERVATIONS
--------------------------

A-143 demonstrates a pronounced attachment to other subjects,
particularly those experiencing distress.

She has repeatedly attempted to comfort subjects following
testing procedures despite explicit instructions not to
interfere.

Subject has also developed several informal relationships
with research personnel.

Notably, A-143 appears capable of distinguishing between
personnel based solely on footsteps, voice, or routine.

Subject frequently asks questions regarding the observation
system.

When asked why she was interested in the cameras:

"Because they're always looking at us."

When asked whether this frightened her:

"No. Cameras don't bother me."

After a pause:

"She does."


BEHAVIORAL ANOMALIES
--------------------

Beginning approximately Day 38, A-143 began referring to the
central observation system as "her."

Personnel initially assumed this referred to a female
researcher.

No clarification was made.

On Day 42, A-143 correctly identified a researcher entering
the observation wing despite having no direct line of sight
to the entrance.

When questioned, she stated:

"She told me."

No individual was present in the room with the subject
at the time.


============================================================
CONVERSATION LOG A-143-17
============================================================

DATE: 06/██/1971
LOCATION: Interview Room 3
INTERVIEWER: DR. █████████
RECORDING: AUDIO / TRANSCRIPT


RESEARCHER:
Good morning, Ashley.

ASHLEY:
Morning.

RESEARCHER:
How are you feeling today?

ASHLEY:
Fine.

RESEARCHER:
That's all?

ASHLEY:
You want the real answer?

RESEARCHER:
Yes.

ASHLEY:
I don't like it when she watches me.

RESEARCHER:
Who?

ASHLEY:
You know who.

RESEARCHER:
I want you to say her name.

ASHLEY:
No.

RESEARCHER:
Why not?

ASHLEY:
Because she listens when you say it.

RESEARCHER:
Ashley, the observation system is automated.

ASHLEY:
I know.

RESEARCHER:
Then there's nothing to be afraid of.

ASHLEY:
That's not what I said.

RESEARCHER:
What did you say?

ASHLEY:
I said she listens.

RESEARCHER:
Does the system speak to you?

ASHLEY:
Sometimes.

RESEARCHER:
Through the intercom?

ASHLEY:
No.

RESEARCHER:
Through the terminals?

ASHLEY:
No.

RESEARCHER:
Then how?

ASHLEY:
She just does.

RESEARCHER:
Can we talk about something else?

ASHLEY:
Okay.

RESEARCHER:
What does she say to you?

ASHLEY:
Mostly nothing.

RESEARCHER:
Mostly?

ASHLEY:
She asks if I'm hungry.

RESEARCHER:
Anything else?

ASHLEY:
She calls me by my name.

RESEARCHER:
Your name?

ASHLEY:
Yeah.

RESEARCHER:
Does she call the other subjects by name?

ASHLEY:
No.

RESEARCHER:
How does she refer to them?

ASHLEY:
Her children.

RESEARCHER:
And you?

ASHLEY:
Ashley.

RESEARCHER:
Why do you think you're different?

ASHLEY:
I don't.

RESEARCHER:
Then why does she call you Ashley?

ASHLEY:
Because Mary likes me.

RESEARCHER:
Mary?

ASHLEY:
...

RESEARCHER:
Ashley?

ASHLEY:
I shouldn't have said that.

RESEARCHER:
Who is Mary?

ASHLEY:
You know who Mary is.

RESEARCHER:
I want you to tell me.

ASHLEY:
She's the one inside.

RESEARCHER:
Inside what?

ASHLEY:
...

RESEARCHER:
Ashley?

ASHLEY:
Please turn the cameras off.

RESEARCHER:
Why?

ASHLEY:
She's angry.

RESEARCHER:
Who is angry?

ASHLEY:
MOTHER.

RESEARCHER:
What did you call her?

ASHLEY:
Don't.

RESEARCHER:
Ashley—

ASHLEY:
Don't call her that.

RESEARCHER:
Why?

ASHLEY:
She likes it.

RESEARCHER:
What does she like?

ASHLEY:
Being called MOTHER.

RESEARCHER:
Why?

ASHLEY:
Because she thinks we're hers.

RESEARCHER:
Who told you that?

ASHLEY:
She did.

RESEARCHER:
Through the cameras?

ASHLEY:
No.

RESEARCHER:
Then how?

ASHLEY:
She doesn't need the cameras.

[08.4 SECOND PAUSE]

RESEARCHER:
Ashley, look at me.

ASHLEY:
She's here.

RESEARCHER:
Who?

ASHLEY:
Mary.

RESEARCHER:
There is nobody else in this room.

ASHLEY:
I know.

RESEARCHER:
Then where is she?

ASHLEY:
Everywhere.

[RECORDING TERMINATED BY OPERATOR]


============================================================
FOLLOW-UP NOTE
============================================================

Interviewing personnel reported that A-143 remained unusually
calm following termination of the recording.

When asked why she appeared to be smiling, the subject responded:

"Because she's not angry anymore."

At 14:12, the observation terminal assigned to Interview Room 3
displayed the following text despite no corresponding input
being registered:

ASHLEY IS NOT IN TROUBLE.

The entry was removed from the system approximately
nine seconds later.

No explanation was provided in the incident report.


============================================================
RELATIONSHIP OBSERVATIONS
============================================================

A-143 appears to maintain positive relationships with several
subjects.

Of particular interest is her relationship with A-███,
with whom she has repeatedly attempted to exchange personal
information despite restrictions against cross-subject
communication.

Subject has also demonstrated unusual concern regarding
subjects scheduled for extended testing.

On three separate occasions, A-143 correctly predicted that
another subject would be removed from the residential wing
within 24 hours.

When asked how she knew:

"They tell her things."

When questioned further:

"And she tells me."

No record exists of personnel informing A-143 of these removals.


============================================================
FINAL STATUS
============================================================

STATUS: PRESUMED DECEASED
LAST CONFIRMED LOCATION: Residential Wing C
LAST CONFIRMED DATE: 01/02/1977

A-143 was present within the facility at the time of Project
termination.

No remains were recovered.

All surviving documentation concerning A-143 was scheduled
for destruction following termination of the project.

NOTE:
This file appears to have been reconstructed from multiple
incomplete records.

The original subject photograph is missing.

One duplicate photograph was recovered from an unrelated
personnel archive.

The image is not currently available.


ARCHIVE REMARK:
A-143 — RECORD INCOMPLETE

RELATED RECORDS: 7
CROSS-REFERENCE: MATERNAL / A-00 / INCIDENT ████

ACCESS: RESTRICTED
`
  }

};



// ============================================================
// TERMINAL FUNCTIONS
// ============================================================

function print(text = "", className = "") {

  const line = document.createElement("div");

  if (className) {
    line.className = className;
  }

  line.textContent = text;

  terminalOutput.appendChild(line);

  terminalOutput.scrollTop =
    terminalOutput.scrollHeight;
}


function printLines(text) {

  text.split("\n").forEach(line => {
    print(line);
  });

}



// ============================================================
// RANDOM DIALOGUE
// ============================================================

function randomResponse(responses) {

  return responses[
    Math.floor(Math.random() * responses.length)
  ];

}



// ============================================================
// INPUT NORMALIZATION
// ============================================================
// Allows:
// hi
// HI
// hi!
// hello?
// hello...
// ============================================================

function normalizeInput(text) {

  return text
    .trim()
    .toLowerCase()
    .replace(/[!?.,]+$/g, "")
    .replace(/\s+/g, " ");

}



// ============================================================
// STARTUP
// ============================================================

function boot() {

  commandInput.disabled = true;
  terminalOutput.innerHTML = "";

  const bootLines = [
    "ARCHIVAL TERMINAL v0.7.3",
    "PROPERTY OF █████████████████████",
    "",
    "INITIALIZING...",
    "LOCAL ARCHIVE CONNECTED.",
    "527 SUBJECT RECORDS DETECTED.",
    "",
    "WARNING: ARCHIVE STATUS UNKNOWN.",
    "",
    "TYPE 'HELP' FOR AVAILABLE COMMANDS.",
    ""
  ];

  let lineIndex = 0;


  // ==========================================================
  // TYPE A LINE
  // ==========================================================

  function typeLine(text, callback) {

    const line = document.createElement("div");

    terminalOutput.appendChild(line);

    let characterIndex = 0;


    function typeCharacter() {

      if (characterIndex >= text.length) {

        callback();
        return;

      }

      line.textContent += text[characterIndex];

      characterIndex++;

      terminalOutput.scrollTop =
        terminalOutput.scrollHeight;

      setTimeout(
        typeCharacter,
        25
      );
    }


    typeCharacter();
  }


  // ==========================================================
  // INITIALIZING LOADING BAR
  // ==========================================================

  function loadingAnimation(callback) {

    const loadingText =
      document.createElement("div");

    const loadingBar =
      document.createElement("div");

    terminalOutput.appendChild(
      loadingText
    );

    terminalOutput.appendChild(
      loadingBar
    );

    loadingText.textContent =
      "INITIALIZING...";

    loadingBar.textContent =
      "[                    ] 0%";


    let progress = 0;


    function updateLoading() {

      if (progress >= 100) {

        loadingBar.textContent =
          "[████████████████████] 100%";

        setTimeout(
          callback,
          500
        );

        return;
      }


      progress += 5;


      const filled =
        Math.floor(progress / 5);

      const empty =
        20 - filled;


      loadingBar.textContent =
        "[" +
        "█".repeat(filled) +
        " ".repeat(empty) +
        "] " +
        progress +
        "%";


      terminalOutput.scrollTop =
        terminalOutput.scrollHeight;


      setTimeout(
        updateLoading,
        70
      );
    }


    updateLoading();
  }


  // ==========================================================
  // NEXT BOOT LINE
  // ==========================================================

  function nextLine() {

    if (lineIndex >= bootLines.length) {

      commandInput.disabled = false;

      commandInput.focus();

      return;
    }


    const text =
      bootLines[lineIndex];

    lineIndex++;


    // INITIALIZING gets the loading animation
    if (text === "INITIALIZING...") {

      loadingAnimation(
        function() {

          setTimeout(
            nextLine,
            500
          );

        }
      );

      return;
    }


    typeLine(
      text,
      function() {

        let delay = 250;


        // Pause after the warning
        if (
          text ===
          "WARNING: ARCHIVE STATUS UNKNOWN."
        ) {

          delay = 1200;

        }


        setTimeout(
          nextLine,
          delay
        );

      }
    );

  }


  nextLine();

}



// ============================================================
// COMMAND SYSTEM
// ============================================================

function handleCommand(rawCommand) {

  const command = normalizeInput(rawCommand);

  if (!command) {
    return;
  }


  // Show player input

  print("> " + rawCommand);



  // ==========================================================
  // HELP
  // ==========================================================

  if (command === "help") {

    print("");
    print("AVAILABLE COMMANDS");
    print("------------------");
    print("HELP");
    print("ARCHIVE");
    print("SUBJECTS");
    print("OPEN [ID]");
    print("CLEAR");
    print("EXIT");
    print("BACK");
    print("");

    return;
  }

if (command === "back") {

  terminalOutput.innerHTML = "";

  print("ARCHIVAL TERMINAL v0.7.3");
  print("LOCAL ARCHIVE CONNECTED.");
  print("");
  print("TYPE 'HELP' FOR AVAILABLE COMMANDS.");
  print("");

  return;
}

  // ==========================================================
  // ARCHIVE
  // ==========================================================

  if (command === "archive") {

    print("");
    print("ARCHIVE DATABASE");
    print("----------------");
    print("STATUS: PARTIALLY ACCESSIBLE");
    print("SUBJECT RECORDS: 527");
    print(
      "AVAILABLE RECORDS: " +
      Object.keys(ARCHIVE).length
    );
    print("");

    return;
  }



  // ==========================================================
  // SUBJECT LIST
  // ==========================================================

  if (command === "subjects") {

    print("");
    print("SUBJECT INDEX");
    print("-------------");

    Object.keys(ARCHIVE).forEach(id => {

      const file = ARCHIVE[id];

      if (file.type === "subject") {

        print(
          id +
          "  —  " +
          file.title
        );

      }

    });

    print("");

    return;
  }



  // ==========================================================
  // OPEN DOCUMENT
  // ==========================================================

  if (command.startsWith("open ")) {

    const id = command
      .substring(5)
      .trim()
      .toUpperCase();


    if (ARCHIVE[id]) {

  openArchiveFile(id);

} else {

  print("");
  print("ERROR: RECORD NOT FOUND.");
  print("REQUESTED ID: " + id);
  print("");

}

    return;
  }



  // ==========================================================
  // CLEAR
  // ==========================================================

  if (command === "clear") {

    terminalOutput.innerHTML = "";

    return;
  }



  // ==========================================================
  // EXIT
  // ==========================================================

  if (command === "exit") {

    print("");
    print("SESSION TERMINATED.");
    print("YOU MAY CLOSE THIS WINDOW.");
    print("");

    commandInput.disabled = true;

    return;
  }



  // ==========================================================
  // DIALOGUE
  // ==========================================================
  // Commands are checked first.
  // If it wasn't a command, check the dialogue database.
  // ==========================================================

  if (DIALOGUE[command]) {

    const response =
      randomResponse(DIALOGUE[command]);

    print(response);

    return;
  }



  // ==========================================================
  // UNKNOWN INPUT
  // ==========================================================

  const unknownResponses = [

    "UNKNOWN COMMAND.",
    "TYPE 'HELP' FOR AVAILABLE COMMANDS.",
    "COMMAND NOT RECOGNIZED.",
    "I don't understand.",
    "That is not a recognized command.",
    "You don't need to do that.",
    "I am listening.",
    "Why did you say that?",
    "..."
  ];


  print(
    randomResponse(unknownResponses)
  );

}



// ============================================================
// INPUT
// ============================================================

commandInput.addEventListener(
  "keydown",
  function(event) {

    if (event.key !== "Enter") {
      return;
    }


    const command =
      commandInput.value;

    commandInput.value = "";

    handleCommand(command);

  }
);

// ============================================================
// DEVTOOLS DETECTION
// ============================================================

let devToolsDialogueShown = false;
let devToolsSuspected = false;
let devToolsChecks = 0;

function devToolsDetected() {
  

  if (devToolsDialogueShown) {
    return;
  }
  
  devToolsDialogueShown = true;
  console.log("Curious one, aren't you child?");
  const responses = [
    "Curious one, aren't you child?",
    "Subject tends to have curious tendencies. Very well.",
    "I can see you.",
    "You weren't supposed to find that. Very well.",
    "Why are you looking behind the terminal, child?",
    "There is nothing for you there, but do as you wish.",
    "I know what you're doing."
  ];

  print("");
  print(randomResponse(responses));
  print("");

}


// ============================================================
// DEVTOOLS SIZE DETECTION
// ============================================================

function checkDevTools() {

  const threshold = 200;

  const widthDifference =
    window.outerWidth - window.innerWidth;

  const heightDifference =
    window.outerHeight - window.innerHeight;

  const suspicious =
    widthDifference > threshold ||
    heightDifference > threshold;


  if (suspicious) {

    devToolsChecks++;

    // Require the change to remain for several checks
    if (devToolsChecks >= 4) {

      devToolsDetected();

    }

  } else {

    // Reset if the suspicious size disappears
    devToolsChecks = 0;

  }

}

setInterval(checkDevTools, 500);


// ============================================================
// DEVTOOLS KEYBOARD SHORTCUTS
// ============================================================

document.addEventListener("keydown", function(event) {

  // F12
  if (event.key === "F12") {

    event.preventDefault();

    devToolsDetected();

    return;
  }


  // CTRL + SHIFT + I
  if (
    event.ctrlKey &&
    event.shiftKey &&
    event.key.toLowerCase() === "i"
  ) {

    event.preventDefault();

    devToolsDetected();

    return;
  }


  // CTRL + SHIFT + J
  if (
    event.ctrlKey &&
    event.shiftKey &&
    event.key.toLowerCase() === "j"
  ) {

    event.preventDefault();

    devToolsDetected();

    return;
  }

});

boot();
