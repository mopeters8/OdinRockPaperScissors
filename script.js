console.log("script loaded...");

/* Globals */
const choices = ["rock", "paper", "scissors"];
let computerWins = 4;
let playerWins = 4;

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function setPlayerChoices() {
  let choiceButtons = document.getElementsByName("gameOption");
  choiceButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      playRound(btn.id);
    });
  });
}

function playRound(playerChoice) {
  let computerChoice = getComputerChoice();
  let winner = decideWinner(playerChoice, computerChoice); //0-computer, 1-player, 2-tie

  if (winner === 0) {
    computerWins++;
    updateScoresTable("You lose! " + computerChoice + " beats " + playerChoice);
  } else if (winner === 1) {
    playerWins++;
    updateScoresTable("You win! " + playerChoice + " beats " + computerChoice);
  } else {
    updateScoresTable("It is a tie!");
  }
  // console.log("Score:\nCPU: " + computerWins + "\nPlayer: " + playerWins);
}

function decideWinner(playerChoice, computerChoice) {
  let winner;
  //logic for the game
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      winner = 2;
    } else if (computerChoice === "scissors") {
      winner = 1;
    } else if (computerChoice === "paper") {
      winner = 0;
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      winner = 1;
    } else if (computerChoice === "scissors") {
      winner = 0;
    } else if (computerChoice === "paper") {
      winner = 2;
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      winner = 0;
    } else if (computerChoice === "scissors") {
      winner = 2;
    } else if (computerChoice === "paper") {
      winner = 1;
    }
  }

  return winner;
}

function updateScoresTable(description) {
  const computerScore = document.getElementById("computerScore");
  const playerScore = document.getElementById("playerScore");
  const roundRecap = document.querySelector("#scores");
  let choiceButtons = document.getElementsByName("gameOption");
  let choiceDiv = document.getElementById;

  roundRecap.textContent = description;

  computerScore.textContent = computerWins;
  playerScore.textContent = playerWins;

  if (computerWins >= 5) {
    roundRecap.textContent = "Computer Won The Game!";
  } else if (playerWins >= 5) {
    roundRecap.textContent = "Player Won The Game!";
  }
}

//Launches full game
setPlayerChoices();
