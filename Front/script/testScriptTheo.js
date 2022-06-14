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

// for (n = 0; n < 100; n++) {
//   let randomvar = random(30, 10);
//   console.log(randomvar);
// }

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

// var emailValidForm,
//   passwordValidForm,
//   emailValidForm = (passwordValidForm = 0);

// console.log(
//   emailValidForm + " = " + passwordValidForm + " = " + emailValidForm
// );

// function validatorEmail() {
//   let inputEmail = document.getElementById("inputEmail");
//   let inputEmailValue = document.getElementById("inputEmail").value;

//   let paternEmail = /^[^ ]+@+[^ ]+\.[a-z]{2,10}$/;

//   if (inputEmailValue.match(paternEmail)) {
//     inputEmail.classList.add("validAdressEmail");
//     inputEmail.classList.remove("inValidAdressEmail");
//     emailValidForm = 1;
//   } else {
//     inputEmail.classList.add("inValidAdressEmail");
//     inputEmail.classList.remove("validAdressEmail");
//     emailValidForm = 0;
//   }
//   validatorForm();
// }

// function validatorpassword() {
//   let inputPassword = document.getElementById("inputPassword");
//   let inputPasswordValue = document.getElementById("inputPassword").value;
//   let inputPasswordList = inputPasswordValue.split("");

//   console.log(inputPassword);
//   console.log(inputPasswordList.length);

//   if (inputPasswordList.length >= 8 && inputPasswordList.length < 32) {
//     console.log("valid");
//     inputPassword.classList.add("validPassword");
//     inputPassword.classList.remove("inValidPassword");
//     passwordValidForm = 1;
//   } else {
//     console.log("invalid");
//     inputPassword.classList.add("inValidPassword");
//     inputPassword.classList.remove("validPassword");
//     passwordValidForm = 0;
//   }
//   validatorForm();
// }

// function validatorForm() {
//   let inputForm = document.getElementById("inputSubmit");

//   if (passwordValidForm == 1 && emailValidForm == 1) {
//     inputForm.classList.add("validForm");
//     inputForm.classList.remove("inValidForm");
//   } else {
//     inputForm.classList.add("inValidForm");
//     inputForm.classList.remove("validForm");
//   }
// }
