console.log("JS Launched");

const lifeText = document.querySelector(".life");
const clickerButton = document.querySelector("#btn_clicker");
var totalLifeMonster = 100;
var lifeMonster = totalLifeMonster;

clickerButton.addEventListener("click", function () {
  lifeText.setAttribute("style", "");
  lifeMonster--;
  result = lifeMonster;
  console.log(lifeMonster);
});
