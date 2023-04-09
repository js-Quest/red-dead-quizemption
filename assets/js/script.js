console.log("ding");


var highscoresEl = document.querySelector("highscores");
var timerEl = document.querySelector("timer");
var startBtnEl = document.getElementById("startbtn");
var askEl = document.getElementById("ask-question");
var answersEl = document.getElementById("answers");


// hide start screen when startbtn ("shoot!" button) clicked
startBtnEl.onclick = function start() {
  var startPageEl = document.getElementById("start-page");

  // hides start page
  startPageEl.setAttribute("class", "hidden");

  // make question page appear
  var questionsPageEl = document.getElementById("question-page");
  questionsPageEl.removeAttribute("class", "hidden");

  getQuestion();
}

var questionIndex = 0;



function getQuestion() {
  
  
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

  //clear old stuff
  // answersEl.textContent = "";
  // askEl.textContent = "";
}

function chooseAnswer() {
  if (this.value !== allQuestions[questionIndex].correct) {
    // time -=10;
  }
}


