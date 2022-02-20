const button = document.querySelectorAll("button");
const scoresHTMl = document.querySelector("#scores");
const msg = document.querySelector("#msg");
const scores = {
  player: 0,
  computer: 0,
};
scoresHTMl.innerHTML = `Scores<br>Player : ${scores.player}<br>Computer : ${scores.computer}`;

button.forEach((button) => {
  button.addEventListener("click", () => {
    msg.innerHTML = playRound(button.id, computerPlay());
    scoresHTMl.innerHTML = `Scores<br>Player : ${scores.player}<br>Computer : ${scores.computer}`;
    isWinner();
  });
});

function computerPlay() {
  //Generate a random selection
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
  console.log(playerSelection + computerSelection);
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

function isWinner() {
  if (scores.player == 5) {
    console.log("You win the game");
  } else if (scores.computer == 5) {
    console.log("You lose");
  }
}
