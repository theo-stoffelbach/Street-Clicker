console.log("JS Launched");

const lifeBar = document.querySelector(".life");
const clickerButton = document.querySelector("#btn_clicker");
const scoreP = document.querySelector(".score");
const goldText = document.querySelector("#gold_text");
var totalLifeMonster = 2;
var result = 0;
var lifeMonster = 2;
var calculPercentage = 0;
var gold = 0;

goldText.innerHTML = "0";
scoreP.innerHTML = "0";

function clicker() {
  lifeMonster--;
  result++;
  if (lifeMonster <= 0) {
    generatorMob(1);
    getGold();
  }
  calculPercentage = Math.round((lifeMonster / totalLifeMonster) * 100) + "%";
  console.log(calculPercentage);
  lifeBar.style.width = calculPercentage;
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

/** function gold for buy in the shop **/
function getGold () {
  let stockRandom = random(10, 100);
  gold += stockRandom + stockRandom;
  goldText.innerHTML = gold;
}

/** Function for buy Bonus in the shop **/
function buyBonus () {

}