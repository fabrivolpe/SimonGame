var gamePattern = [];

var userClickedPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var title = $("h1");

var playButton = $("button");

var randomChosenColor = "";

var level = 1;

var userChosenColor = "";

function nextSequence() {

  var randomNumber = Math.round(Math.random() * 3);

  return randomNumber;

}

//Simon says

function playSimon() {

  $("button").click(function() {

    if (level === 1) {

      title.text("Level 1");

      playButton.text("Next level");

      level++;

    } else {

      title.text("Level " + level);

      level++;

    }

    randomChosenColor = buttonColors[nextSequence()];

    gamePattern.push(randomChosenColor);

    var sound = new Audio("sounds/" + randomChosenColor + ".mp3");
    
    sound.play();

  }

    var randomChosenButton = $("#" + randomChosenColor)

    randomChosenButton.fadeOut(100).fadeIn(100);

    userClickedPattern = [];

  });

}

//Player's turn

function playSound(name) {

  var sound = new Audio("sounds/" + name + ".mp3");

  sound.play();

}

function playWrongSound() {

  var wrong = new Audio("sounds/wrong.mp3");

  wrong.play();

}

function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");

  setTimeout(function() {

    $("#" + currentColor).removeClass("pressed");

  }, 100);

}

function startOver() {

  level = 1;

  gamePattern = [];

}

function checkAnswer(currentLevel) {

  for (var i = 0; i < currentLevel; i++) {

    if (gamePattern[i] === userClickedPattern[i]) {

      continue;

    } else {

      $("body").addClass("game-over");

      setTimeout(function () {

        $("body").removeClass("game-over");

      }, 200);

      playWrongSound();

      title.text("Game Over");

      playButton.text("Star Over")

      playButton.click(startOver());

    }

  }

}

  function playPlayer() {

    $(".btn").click(function() {

      userChosenColor = $(this).attr("id");

      userClickedPattern.push(userChosenColor);

      animatePress(userChosenColor);

      playSound(userChosenColor);

      checkAnswer(userClickedPattern.length);

    });

  }

  playSimon();

  playPlayer();
