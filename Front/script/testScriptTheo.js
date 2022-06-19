//   192.168.1.31 à Lourdes
//   192.168.1.45 à Toulouse

let VerificatorColor = [
  "aqua",
  "black",
  "blue",
  "fuchsia",
  "gray",
  "green",
  "lime",
  "maroon",
  "navy",
  "olive",
  "purple",
  "red",
  "silver",
  "teal",
  "white",
  "yellow",
];

const TranslatorColor = {
  Couleur: [
    { black: "#00000" },
    { blue: "#0000FF" },
    { fuchsia: "#FF00FF" },
    { gray: "#808080" },
    { green: "#008000" },
    { lime: "#00FF00" },
    { maroon: "#000080" },
    { navy: "#000080" },
    { olive: "#808000" },
    { purple: "#800080" },
    { red: "#FF0000" },
    { silver: "#C0C0C0" },
    { teal: "#008080" },
    { white: "#FFFFFF" },
    { yellow: "#FFFF00" },
  ],
};

var emailValidForm,
  passwordValidForm,
  pseudoValidForm,
  emailValidForm = (passwordValidForm = pseudoValidForm = 0);

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

  if (inputPasswordList.length >= 8 && inputPasswordList.length < 32) {
    inputPassword.classList.add("validPassword");
    inputPassword.classList.remove("inValidPassword");
    passwordValidForm = 1;
  } else {
    inputPassword.classList.add("inValidPassword");
    inputPassword.classList.remove("validPassword");
    passwordValidForm = 0;
  }
  validatorForm();
}

function validatorpseudo() {
  let inputPseudo = document.getElementById("inputPseudo");
  let inputPseudoValue = document.getElementById("inputPseudo").value;

  if (inputPseudoValue.length >= 2 && inputPseudoValue.length < 40) {
    inputPseudo.classList.add("validPseudo");
    inputPseudo.classList.remove("invalidPseudo");
    pseudoValidForm = 1;
  } else {
    inputPseudo.classList.add("invalidPseudo");
    inputPseudo.classList.remove("validPseudo");
    pseudoValidForm = 0;
  }
  validatorForm();
}

function validatorForm() {
  let inputForm = document.getElementById("inputSubmit");

  if (passwordValidForm == 1 && emailValidForm == 1 && pseudoValidForm == 1) {
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
  let inputPseudoValue = document.getElementById("inputPseudo").value;
  let inputColorValue = document.getElementById("inputColor").value;
  let inputJordanValue = document.getElementById("inputJordan").checked;
  var response = "";

  validatorForm();
  validatorpseudo();
  validatorEmail();
  validatorpassword();

  if (passwordValidForm == 1 && emailValidForm == 1 && pseudoValidForm == 1) {
    var sendData = {
      email: inputEmailValue,
      password: inputPasswordValue,
      pseudo: inputPseudoValue,
    };

    sendData = JSON.stringify(sendData);

    console.log("Voici jordan : " + inputJordanValue);

    if (inputJordanValue == true) {
      axios
        .post("http://localhost:1337/api/user/create/user", {
          email: inputEmailValue,
          password: inputPasswordValue,
          pseudo: inputPseudoValue,
          colorAdmin: inputColorValue,
          jordan: "true",
        })
        .then((res) => {
          response = res;
          console.log(res);
        });
    } else {
      axios
        .post("http://localhost:1337/api/user/create/user", {
          email: inputEmailValue,
          password: inputPasswordValue,
          pseudo: inputPseudoValue,
          colorAdmin: inputColorValue,
        })
        .then((res) => {
          response = res;
          console.log(res);
        });
    }

    console.log("\n\n\n" + response);

    // 192.168.1.45
  } else {
    return;
  }
}

function test() {
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
}

// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------

function sendTest() {
  let inputEmailValue = document.getElementById("inputEmail").value;
  let inputPasswordValue = document.getElementById("inputPassword").value;
  let inputPseudoValue = document.getElementById("inputPseudo").value;
  let inputColorValue = document.getElementById("inputColor").value;
  let statusInput = document.getElementById("inputJordan").checked;

  if (statusInput) statusInput = "Jordan";
  else statusInput = "Admin";

  console.log("Test");
  axios
    .post("http://localhost:1337/api/user/test", {
      pseudo: inputPseudoValue,
      email: inputEmailValue,
      password: inputPasswordValue,
      colorAdmin: inputColorValue,
      status: statusInput,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err.response.data));
}
