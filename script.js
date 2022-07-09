const icon = document.getElementById("icon");
var count = 0;
function themechange() {
  count++;
  if (count % 2 == 0) {
    //Light Theme
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    document.documentElement.style.setProperty("--primary", "#010a26");
    document.documentElement.style.setProperty("--secondary", "#E33F2B");
    document.documentElement.style.setProperty("--tertiary", "#F7F7F7");
  } else {
    //Dark Theme
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    document.documentElement.style.setProperty("--primary", "#E33F2B");
    document.documentElement.style.setProperty("--tertiary", "#121212");
    document.documentElement.style.setProperty("--secondary", "#010a26");
  }
}
let buttons = document.querySelectorAll(".choiceBox button");
const opponent = document.getElementById("opponent-result");
const player = document.getElementById("player-result");
let opponentData = opponent.dataset["{element}"];
let playerData = player.dataset["{element}"];

const dataArr = ["hand-scissors", "hand-paper", "hand-rock"];

const matchResults = document.querySelector("p#match-results");
const wonCount = document.querySelector("p.times-won");
let timesWon = 0;

const lostCount = document.querySelector("p.times-lost");
let timesLost = 0;

const drawCount = document.querySelector("p.times-draw");
let timesDraw = 0;

const animationReciever = document.querySelector(".playersBox");

let buttonData;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    animationReciever.classList.add("fists-animation");
    player.className = "result far fa-hand-paper";
    playerData = "";
    opponent.className = "far fa-hand-paper";
    opponentData = "";
    buttonData = button.dataset.element;
  });
});

// When animation ends...
animationReciever.addEventListener("animationend", () => {
  animationReciever.classList.remove("fists-animation");
  // Player recieves option chosen
  playerData = buttonData;
  player.className = `result far fa-${playerData}`;

  // Opponent recieves random data from array
  opponentRandom();

  whoWon();
});

function opponentRandom() {
  const randomData = Math.floor(Math.random() * dataArr.length);
  opponent.className = `far fa-${dataArr[randomData]}`;
  opponentData = dataArr[randomData];
}

function whoWon() {
  if (
    (opponentData == "hand-scissors" && playerData == "hand-paper") ||
    (opponentData == "hand-paper" && playerData == "hand-rock") ||
    (opponentData == "hand-rock" && playerData == "hand-scissors")
  ) {
    matchWon();
  } else if (opponentData == playerData) {
    matchDraw();
  } else {
    matchLost();
  }
}

function matchWon() {
  timesWon++;
  wonCount.innerText = timesWon;
  matchResults.innerText = "You won!";
}

function matchDraw() {
  timesDraw++;
  drawCount.innerText = timesDraw;
  matchResults.innerText = "Draw!";
}

function matchLost() {
  timesLost++;
  lostCount.innerText = timesLost;
  matchResults.innerText = "You lost";
}
