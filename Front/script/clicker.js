console.log("JS Launched");

const lifeBar = document.querySelector(".life");
const clickerButton = document.querySelector("#btn_clicker");
const scoreP = document.querySelector(".score");
const goldText = document.querySelector("#gold_text");
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
  lifeBar.style.width = calculPercentage;
  gold();
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
function gold () {

  var recoverWidth = window.getComputedStyle(lifeBar, null).getPropertyValue("width");
  var index3 = recoverWidth.split("").slice(0, 3).join('');
  var index2 = recoverWidth.split("").slice(0, 2).join('');
  var index1 = recoverWidth.split("").slice(0, 1).join('');

  if (recoverWidth.length == 5) {
    console.log(index3)
  }
  if (recoverWidth.length == 4){
    console.log(index2);
  }
  if (recoverWidth.length == 3) {
    console.log(index1);
  }
}