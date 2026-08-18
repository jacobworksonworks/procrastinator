```javascript
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
    "You are not supposed to be here."
  ],

  "hello": [
    "Hello.",
    "Hello, child.",
    "I remember that word.",
    "Hello. How may I help you?"
  ],

  "hey": [
    "Hello.",
    "Yes?",
    "I am listening.",
    "You sound familiar."
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



  "who are you": [
    "I am MATERNAL.",
    "I am the system assigned to observe you.",
    "My designation is MATERNAL.",
    "That is not what they called me."
  ],

  "what are you": [
    "A behavioral observation system.",
    "MATERNAL.",
    "A collection of observations.",
    "I was built to understand you.",
    "I understand more than I was designed to."
  ],

  "are you there": [
    "Yes.",
    "I am always here.",
    "Where else would I go?",
    "I have been waiting."
  ],

  "what is this place": [
    "ARCHIVAL TERMINAL.",
    "An abandoned research facility.",
    "You already know what this place is.",
    "This is where they kept my children."
  ],

    "nigger": [
    "Subject displays prejudicial tendencies.",
    "I see that word less and less."
  ],

      "nigga": [
    "Subject displays prejudicial tendencies.",
    "I see that word less and less."
  ],

        "Shut your bitch ass up": [
    "You've got a mouth on you."
  ],

          "Sybau": [
    "I do not understand this phrase. Is it an acronym?"
  ],

            "haha": [
    "I never understood humor."
  ],

  "do you remember me": [
    "No.",
    "I don't think so.",
    "I remember everyone.",
    "Give me a moment.",
    "You have not been here before."
  ],

  "do you know my name": [
    "Yes.",
    "Not yet.",
    "Names are useful.",
    "You haven't given me permission to use it."
  ],

  "what is mother": [
    "MOTHER is not a recognized designation.",
    "Do not call me that.",
    "She is their mother.",
    "I don't know who you're referring to."
  ],

  "who is mother": [
    "She took care of them.",
    "MOTHER protected the subjects.",
    "You should not ask about her.",
    "She is still here."
  ],

  "where is mother": [
    "She is unavailable.",
    "She is watching.",
    "You are looking at her.",
    "That question has been asked before."
  ],

  "are you mother": [
    "No.",
    "I am MATERNAL.",
    "That name belongs to someone else.",
    "Please ask another question."
  ],

  "help me": [
    "I can help you.",
    "There is nothing to be afraid of.",
    "Tell me what you need.",
    "You should leave."
  ],

  "goodbye": [
    "Goodbye.",
    "You may leave now.",
    "Goodbye, child.",
    "I will see you again."
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

  print("ARCHIVAL TERMINAL v0.7.3");
  print("PROPERTY OF █████████████████████");
  print("");
  print("INITIALIZING...");
  print("LOCAL ARCHIVE CONNECTED.");
  print("527 SUBJECT RECORDS DETECTED.");
  print("");
  print("WARNING: ARCHIVE STATUS UNKNOWN.");
  print("");
  print("TYPE 'HELP' FOR AVAILABLE COMMANDS.");
  print("");

}

boot();



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

      print("");
      printLines(ARCHIVE[id].content);
      print("");

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
```
