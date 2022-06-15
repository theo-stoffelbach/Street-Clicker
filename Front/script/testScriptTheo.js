var emailValidForm,
  passwordValidForm,
  emailValidForm = (passwordValidForm = 0);

console.log(
  emailValidForm + " = " + passwordValidForm + " = " + emailValidForm
);

function validatorEmail() {
  let inputEmail = document.getElementById("inputEmail");
  let inputEmailValue = document.getElementById("inputEmail").value;

  let paternEmail = /^[^ ]+@+[^ ]+\.[a-z]{2,10}$/;

  if (inputEmailValue.match(paternEmail)) {
    inputEmail.classList.add("validAdressEmail");
    inputEmail.classList.remove("inValidAdressEmail");
    emailValidForm = 1;
  } else {
    inputEmail.classList.add("inValidAdressEmail");
    inputEmail.classList.remove("validAdressEmail");
    emailValidForm = 0;
  }
  validatorForm();
}

function validatorpassword() {
  let inputPassword = document.getElementById("inputPassword");
  let inputPasswordValue = document.getElementById("inputPassword").value;
  let inputPasswordList = inputPasswordValue.split("");

  console.log(inputPassword);
  console.log(inputPasswordList.length);

  if (inputPasswordList.length >= 8 && inputPasswordList.length < 32) {
    console.log("valid");
    inputPassword.classList.add("validPassword");
    inputPassword.classList.remove("inValidPassword");
    passwordValidForm = 1;
  } else {
    console.log("invalid");
    inputPassword.classList.add("inValidPassword");
    inputPassword.classList.remove("validPassword");
    passwordValidForm = 0;
  }
  validatorForm();
}

function validatorForm() {
  let inputForm = document.getElementById("inputSubmit");

  if (passwordValidForm == 1 && emailValidForm == 1) {
    inputForm.classList.add("validForm");
    inputForm.classList.remove("inValidForm");
  } else {
    inputForm.classList.add("inValidForm");
    inputForm.classList.remove("validForm");
  }
}

function sendData() {
  let inputEmailValue = document.getElementById("inputEmail").value;
  let inputPasswordValue = document.getElementById("inputPassword").value;

  var sendData = {
    email: inputEmailValue,
    password: inputPasswordValue,
  };
  sendData = JSON.stringify(sendData);
  console.log(sendData);

  // console.log(inputEmailValue + " + " + inputPasswordValue);
}

var sendData = {
  pseudo: "Snakeshader",
  password: "paslevrai",
  email: "Snakeshader@gmail.com",
};
console.log(sendData);

function test() {
  console.log("halo");

  // axios
  //   .get("http://192.168.1.45:1337/api/user/a")
  //   .then((response) => console.log(response))
  //   .catch((err) => console.log(err));

  console.log(sendData);

  axios
    .post("http://192.168.1.45:1337/api/user/create", {
      pseudo: "Je vais me couper les couilles",
      password: "avec les dents",
      email: "couille@gmail.org",
    })
    .then((res) => console.log(res));

  console.log("E,d");
}
