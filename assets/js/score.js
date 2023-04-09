
// get the scores, if any.
function showHighScores () {
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
  // sort scores
  highscores.sort(function(b, a) {
    return a.score - b.score;
  });

  // to populate scores
  highscores.forEach(function(score) {
    var tagEl = document.createElement("li");
    tagEl.textContent = " " + score.initials + " ... " + score.score + " xp";
    
    var olEl = document.getElementById("scoreboard");
    olEl.appendChild(tagEl);
  });

}

// run function to show the sorted scores
showHighScores();

// clear scoreboard
function clearScores () {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

var clearBtn = document.getElementById("clear");
clearBtn.onclick = clearScores;
