console.log("JS Launched");

const lifeText = document.querySelector(".life");
const clickerButton = document.querySelector("#btn_clicker");
const scoreP = document.querySelector(".score");
var totalLifeMonster = 2;
var result = 0;
var lifeMonster = 2;
var calculPercentage = 0;

function clicker() {
  lifeMonster--;
  result++;
  if (lifeMonster <= 0) {
    generatorMob(1);
  }
  calculPercentage = Math.round((lifeMonster / totalLifeMonster) * 100) + "%";
  console.log(calculPercentage);
  lifeText.style.width = calculPercentage;
}

clickerButton.addEventListener("click", function () {
  clicker();
  scoreP.innerHTML = result;
});

function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generatorMob(zone) {
  switch (zone) {
    case 1:
      totalLifeMonster = random(30, 10);
      lifeMonster = totalLifeMonster;
      break;
    default:
      lifeMonster = random(1, 1);
      break;
  }
}
