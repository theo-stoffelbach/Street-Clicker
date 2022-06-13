console.log("JS Launched");

const lifeText = document.querySelector(".life");
const clickerButton = document.querySelector("#btn_clicker");
var totalLifeMonster = 100;
var lifeMonster = totalLifeMonster;
var result = 0;
clickerButton.addEventListener("click", function () {
  lifeText.setAttribute("style", "");
  onceClick(totalLifeMonster);
});

function onceClick(totalLifeMonster) {
  lifeMonster = lifeMonster - 1;
  result = lifeMonster;
  console.log(result);
}
