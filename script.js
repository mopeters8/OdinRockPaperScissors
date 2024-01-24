console.log("script loaded...");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function getPlayerChoice() {
  let valid = false;
  let cleanedInp;

  while (valid === false) {
    const playerInp = prompt("Rock, Paper, or Scissors (Case insensitive): ");
    cleanedInp = playerInp.toLowerCase();
    if (
      //valid answers?
      cleanedInp === "rock" ||
      cleanedInp === "paper" ||
      cleanedInp === "scissors"
    ) {
      valid = true;
    }
  }

  return cleanedInp;
}

function playRound(playerChoice, computerChoice) {
  let winner; //0-computer, 1-player, 2-tie

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

  const winningStatements = [
    "You lose! " + computerChoice + " beats " + playerChoice,
    "You win! " + playerChoice + " beats " + computerChoice,
    "It is a tie!",
  ];

  return [winner, winningStatements[winner]];
}

function game() {
  let computerWins = 0;
  let playerWins = 0;

  while (computerWins != 3 && playerWins != 3) {
    console.log("Score:\nCPU: " + computerWins + "\nPlayer: " + playerWins);
    let computer = getComputerChoice();
    let player = getPlayerChoice();
    let winnerStats = playRound(player, computer);

    if (winnerStats[0] === 0) {
      computerWins++;
    } else if (winnerStats[0] === 1) {
      playerWins++;
    }
    console.log(winnerStats[1]);
  }

  if (playerWins === 3) {
    console.log("Player wins! You beat the Robot!");
  } else if (computerWins === 3) {
    console.log("Computer wins... you suck.");
  }
}

//Launches full game
game();
