console.log("JS Launched");

const lifeText = document.querySelector(".life");
const clickerButton = document.querySelector("#btn_clicker");
const scoreP = document.querySelector(".score")
var totalLifeMonster = 100;
var result = 0;
var lifeMonster = 100; 
var calculPercentage = 0

function clicker () {
    lifeMonster++;
    result = lifeMonster;
    calculPercentage = Math.round(totalLifeMonster / lifeMonster  * 100) + "%";
    if(calculPercentage < 0) {

    }
    console.log(calculPercentage)
    lifeText.style.width = calculPercentage;
}

clickerButton.addEventListener("click", function () {
  clicker();
  scoreP.innerHTML = result;
});