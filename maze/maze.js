var isLose = false;
var isWin = false;
var isStart = false;

$(function () {
  $("#start").on("click", showMessage);
});

function showMessage(evt) {
  $("#status").text("Game is started...");
  $(".boundary").css("backgroundColor", "#eeeeee");
  isLose = false;
  isWin = false;
  isStart = true;
}

$(function () {
  $(".boundary").on("mouseover", showMessage1);
});

function showMessage1(evt) {
  if (!isWin && isStart) {
    $(".boundary").css("backgroundColor", "#ff8888");
    isLose = true;
    $("#status").text("You lose!");
  }
}

$(function () {
  $("#end").on("mouseleave", showMessage2);
});

function showMessage2(evt) {
  if (!isLose && isStart) {
    $("#status").text("You win!");
    isWin = true;
  }
}

$(function () {
  $("#maze").on("mouseleave", showMessage1);
});
