console.log("ding");


var highscoresEl = document.querySelector("highscores");
var timerEl = document.querySelector("timer");
var timeID = document.getElementById("time")
var startBtnEl = document.getElementById("startbtn");
var askEl = document.getElementById("ask-question");
var answersEl = document.getElementById("answers");
var resultEl = document.getElementById("result");
var questionsPageEl = document.getElementById("question-page");

var questionIndex = 0;
var time = questions.length * 12;


// hide start screen when startbtn ("shoot!" button) clicked
startBtnEl.onclick = function start() {
  var startPageEl = document.getElementById("start-page");

  // hides start page
  startPageEl.setAttribute("class", "hidden");

  // make question page appear
  questionsPageEl.removeAttribute("class", "hidden");

  timeID = setInterval(timeRunDown, 1000)
  timerEl.textContent = time;



  getQuestion();
}




function getQuestion() {
  // clear old stuff
  answersEl.textContent = "";
  
  // fetch question from question array
  var currentQuestion = allQuestions[questionIndex];
  askEl.textContent = currentQuestion.ask;
  
  // answers appear, forEach, loop
  currentQuestion.answers.forEach(function(answer, i) {
    var answerButton = document.createElement("button");
    answerButton.setAttribute("class", "answer");
    answerButton.setAttribute("value", "answer");
    answerButton.textContent = i + 1 + answer;

    // answers and events for answers
    answerButton.onclick = chooseAnswer;
    answersEl.appendChild(answerButton);
  });

  // clear old stuff
  askEl.textContent = "";
}

function chooseAnswer() {
  if (this.value !== allQuestions[questionIndex].correct) {
    time -=10;

    if (time < 0) {time=0}
    timerEl.textContent = time;
    resultEl.textContent = "Nope"

  } else {
    resultEl.textContent = "Right on!"
  }

  resultEl.setAttribute("class", "result");
  setTimeout(function() {
    resultEl.setAttribute("class", "hidden")
  }, 1000);
}

// move on
questionIndex++;

// check for final question
if (questionIndex === questions.length) {
  endQuiz();
} else {
  getQuestion();
}

function endQuiz () {
  clearInterval(timeID);

  // make end page appear
  var endPageEl = document.getElementById("end-page");
  endPageEl.removeAttribute("class", "hidden");

  // make questions go away
  questionsPageEl.setAttribute("class", "hidden");
}

function timeRunDown () {
  time--;
  timerEl.textContent = time;
  if (time <=0) {endQuiz()};
}




