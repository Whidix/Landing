const button = document.querySelectorAll(".stripe-w-item");
const scoresHTMl = document.querySelector("#scores");
const scores = {
  player: 0,
  computer: 0,
};

button.addEventListener("click", playRound);

document.querySelector(
  "#scores"
).innerHTML = `Scores<br>Player : ${scores.player}<br>Computer : ${scores.computer}`;

function computerPlay() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "ciseaux";
    case 1:
      return "feuille";
    case 2:
      return "pierre";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "No winners ! Both losers";
  } else if (
    (playerSelection === "pierre" && computerSelection === "ciseaux") ||
    (playerSelection === "feuille" && computerSelection === "pierre") ||
    (playerSelection === "ciseaux" && computerSelection === "papier")
  ) {
    scores.player++;
    return "You win !";
  }
  scores.computer++;
  return "You lose";
}

/* for (let gameCount = 1; gameCount <= 5; gameCount++) {
  const playerSelection = prompt("Pierre / Fauille / Ciseaux").toLowerCase();
  console.log(playRound(playerSelection, computerPlay()));
}

if (scores.player > scores.computer) {
  console.log("You win the game");
} else if (scores.player < scores.computer) {
  console.log("You lose");
}
console.log("No winners in the end"); */
