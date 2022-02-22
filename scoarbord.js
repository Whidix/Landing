const player1 = document.querySelector("#p1");
const player2 = document.querySelector("#p2");
const resetBtn = document.querySelector("#reset");
const scoreP1 = document.querySelector(".scoreP1");
const scoreP2 = document.querySelector(".scoreP2");
const input = document.querySelector("#maxPoint");

const game = {
  p1: 0,
  p2: 0,
  maxPoints: input.value,
};

displayScore();

player1.addEventListener("click", addPointP1);
player2.addEventListener("click", addPointP2);
resetBtn.addEventListener("click", doReset);
input.addEventListener("change", () => (game.maxPoints = input.value));

function addPointP1() {
  game.p1++;
  displayScore();
  isWinner();
}

function addPointP2() {
  game.p2++;
  displayScore();
  isWinner();
}

function doReset() {
  game.p1 = 0;
  game.p2 = 0;
  displayScore();
  scoreP1.style.color = "black";
  scoreP2.style.color = "black";
  player1.addEventListener("click", addPointP1);
  player2.addEventListener("click", addPointP2);
}

function displayScore() {
  scoreP1.innerText = `${game.p1}`;
  scoreP2.innerText = `${game.p2}`;
}

function isWinner() {
  if (game.p1 >= game.maxPoints) {
    console.log("bitrez");
    player1.removeEventListener("click", addPointP1);
    player2.removeEventListener("click", addPointP2);
    scoreP1.style.color = "green";
    scoreP2.style.color = "red";
  } else if (game.p2 >= game.maxPoints) {
    player1.removeEventListener("click", addPointP1);
    player2.removeEventListener("click", addPointP2);
    scoreP1.style.color = "red";
    scoreP2.style.color = "green";
  }
}
