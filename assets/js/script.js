console.log("ding");


var highscoresEl = document.querySelector("highscores");
var timerEl = document.querySelector("timer");

var startBtnEl = document.getElementById("startbtn");

// hide start screen when startbtn ("shoot!" button) clicked
startBtnEl.onclick = function start() {
  var startPageEl = document.getElementById("start-page");
  // if (startPageEl.style.display !== "none") {
  //   startPageEl.style.display = "none";
  //   }
  startPageEl.setAttribute("class", "hidden");

  // make question page appear
  var questionsPageEl = document.getElementById("question-page");
  questionsPageEl.removeAttribute("class", "hidden");
}

function showQuestions() {
  var nQuestionEl
}

