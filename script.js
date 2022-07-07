const icon = document.getElementById("icon");
var count = 0, player = "rock";
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
document.getElementById("hand-rock").onclick = () => {
  document.getElementById("player-result").classList.remove("fa-hand-rock");
  document.getElementById("player-result").classList.remove("fa-hand-paper");
  document.getElementById("player-result").classList.remove("fa-hand-scissors");
  document.getElementById("player-result").classList.add("fa-hand-rock");
  player = "rock";
};
document.getElementById("hand-paper").onclick = () => {
  document.getElementById("player-result").classList.remove("fa-hand-rock");
  document.getElementById("player-result").classList.remove("fa-hand-paper");
  document.getElementById("player-result").classList.remove("fa-hand-scissors");
  document.getElementById("player-result").classList.add("fa-hand-paper");
  player = "paper";
};
document.getElementById("hand-scissors").onclick = () => {
  document.getElementById("player-result").classList.remove("fa-hand-rock");
  document.getElementById("player-result").classList.remove("fa-hand-paper");
  document.getElementById("player-result").classList.remove("fa-hand-scissors");
  document.getElementById("player-result").classList.add("fa-hand-scissors");
  player = "scissors";
};