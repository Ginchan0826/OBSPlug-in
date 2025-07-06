let wins = parseInt(localStorage.getItem("wins")) || 0;
let losses = parseInt(localStorage.getItem("losses")) || 0;

function updateDisplay() {
  const total = wins + losses;
  const winrate = total ? ((wins / total) * 100).toFixed(1) : 0;

  document.getElementById("wins").textContent = wins;
  document.getElementById("losses").textContent = losses;
  document.getElementById("total").textContent = total;
  document.getElementById("winrate").textContent = `${winrate}%`;
}

function addWin() {
  wins++;
  localStorage.setItem("wins", wins);
  updateDisplay();
}

function addLoss() {
  losses++;
  localStorage.setItem("losses", losses);
  updateDisplay();
}

function reset() {
  if (confirm("リセットしますか？")) {
    wins = 0;
    losses = 0;
    localStorage.setItem("wins", 0);
    localStorage.setItem("losses", 0);
    updateDisplay();
  }
}

updateDisplay();
