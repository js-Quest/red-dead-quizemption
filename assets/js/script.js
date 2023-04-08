console.log("ding");


var highscoresEl = document.querySelector("highscores");
var timerEl = document.querySelector("timer");
var mainEl = document.querySelector("main");

var startBtnEl = document.getElementById("startbtn");

// hide start screen when startbtn ("shoot!" button) clicked
startBtnEl.onclick = function () {
  var startPageEl = document.getElementById("start-page");
  // if (startPageEl.style.display !== "none") {
  //   startPageEl.style.display = "none";
  //   }
  startPageEl.setAttribute("class", "hidden");

  


}