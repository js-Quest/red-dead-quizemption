console.log("ding");


var highscoresEl = document.querySelector("highscores");
var timeID = document.getElementById("time")
var startBtnEl = document.getElementById("startbtn");
var askEl = document.getElementById("ask-question");
var answersEl = document.getElementById("answers");
var resultEl = document.getElementById("result");
var questionsPageEl = document.getElementById("question-page");
var initialsEl = document.getElementById("initials");
var submitBtnEl = document.getElementById("submit");

var questionIndex = 0;

var questions = [
  {
    ask: "What is the name of the main protagonist that you start playing as?",
    answers: ["John", "Sara", "Arthur", "Caleb"],
    correct: "Arthur"
  },
  {
    ask: "What is best arrow to use to get perfect pelts from large animals?",
    answers: ["Fire", "Exploding", "Regular", "Improved"],
    correct: "Improved"
  },
  {
    ask: "Who is the boss of the gang you are in?",
    answers: ["Dutch", "Colin", "Boss", "Felix"],
    correct: "Dutch"
  },
  {
    ask: "What gun do you start out with?",
    answers: ["Carbine", "Volcano Pistol", "Mauser", "Carcano Rifle"],
    correct: "Carbine"
  },
  {
    ask: "What are the creepy zombie-like hostile individuals in the bayou called?",
    answers: ["Swimmers", "The Cursed", "The Night Folk", "Townsfolk"],
    correct: "The Night Folk"
  }
];

console.log(questions);

var time = questions.length * 12;

// testing time allotment
console.log(time);
var timer;

// function for timer countdown
function timeRunDown() {
  time--;
  timeID.textContent = time;

  // go to end-page if user runs out of time
  if (time <= 0) { endQuiz() };
}

// hide start screen when startbtn ("shoot!" button) clicked
startBtnEl.onclick = function start() {
  var startPageEl = document.getElementById("start-page");

  // hides start page
  startPageEl.setAttribute("class", "hidden");

  // make question page appear
  questionsPageEl.removeAttribute("class", "hidden");

  // set timer to 1 second at a time, show time on page.
  timer = setInterval(timeRunDown, 1000)
  timeID.textContent = time;

  getQuestion();
}




function getQuestion() {
  // clear old stuff
  answersEl.textContent = "";
  
  // fetch question from question array
  var currentQuestion = questions[questionIndex];

  askEl.textContent = currentQuestion.ask;
  
  // answers populate on buttons, .forEach
  currentQuestion.answers.forEach(function(answer, i) {
    var answerButton = document.createElement("button");
    answerButton.setAttribute("class", "answer");
    answerButton.setAttribute("value", answer);
    // i+1 to show numbers 1-4 since array starts at 0.
    answerButton.textContent = i + 1 + ". " + answer;

    // answers and events for answers
    answerButton.onclick = chooseAnswer;
    answersEl.appendChild(answerButton);
  });
}

// function for answer, result shown, and 
// time penalty for wrong answer
function chooseAnswer() {
  if (this.value !== questions[questionIndex].correct) {
    time -=13;
    resultEl.textContent = "Nope";
    

    // check for 0 time, set to <=1 or else actual 0 will show -1 seconds.
    if (time <= 1) {time=0};
    timeID.textContent = time;

  } else {
    resultEl.textContent = "Right on!";
  }
  // show result and then make it go away
  resultEl.setAttribute("class", "result");
  setTimeout(function() {
    resultEl.setAttribute("class", "hidden")
  }, 1000);

  // move on
  questionIndex++;

  // check for final question
  if (questionIndex === questions.length) {
    endQuiz();
  } else {
    getQuestion();
  }
}

function endQuiz () {
  clearInterval(timer);

  // make end page appear
  var endPageEl = document.getElementById("end-page");
  endPageEl.removeAttribute("class", "hidden");

  // make questions go away
  questionsPageEl.setAttribute("class", "hidden");

  // show final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;
  
}




var restartBtn = document.getElementById("restart");
restartBtn.onclick = function restart () {
  window.location.reload();
}


submitBtnEl.onclick = function saveScore() {

  // get info from input box
  var initials = initialsEl.value.trim()

  // make sure intials form isn't empty
  if (initials !== "") {
    // get saved scores.  if none, set up array.
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // make new score object for current user
    var newScore = {
      score: time,
      initials: initials
    };

    // save object to local storage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // goes to high score page
    window.location.href = "highscore.html";
  }
}

