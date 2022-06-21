var emailValidForm,
  passwordValidForm,
  emailValidForm = (passwordValidForm = 0);

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

function validatorForm() {
  let inputForm = document.getElementById("inputSubmit");

  if (passwordValidForm == 1 && emailValidForm == 1) {
    inputForm.classList.add("validForm");
    inputForm.classList.remove("inValidForm");

    // Mettre le back ici
  } else {
    inputForm.classList.add("inValidForm");
    inputForm.classList.remove("validForm");
  }
}

function Test() {
  let inputEmailValue = document.getElementById("inputEmail").value;
  let inputPasswordValue = document.getElementById("inputPassword").value;

  console.log(inputPasswordValue + " ; " + inputEmailValue);

  new axios.post("http://localhost:1337/api/user/login", {
    email: inputEmailValue,
    password: inputPasswordValue,
  })
    .then((res) => {
      res.console.log(res);
      console.log("et oui c'est moi : " + res.data.callBack);
    })
    .catch((err) => {
      console.log(err);
      let statusRequest = err.response.status;
      console.log(err.response.data.errorMessage);

      if (statusRequest == 500) {
        /* Now test if request return error 500 (It's not good password)*/
        // .remove();
        var inputPassword = document.getElementById("inputPassword");
        var p2 = document.createElement("p");
        var p3 = document.getElementById("inputPassword");
        p3.parentNode.insertBefore(p2, p3.nextSibling);
        p2.innerHTML = "* " + err.response.data.errorMessage;
        p2.style.margin = "0px 0 10% 10%";
        p2.style.color = "red";
        inputPassword.style.margin = "5% 0 0 0";
      } else if (statusRequest == 404) {
        /* Then test if request return error 404 (email not found)*/
        var inputEmail = document.getElementById("inputEmail");
        var pMessageError = document.createElement("p");
        var inputPassword = document.getElementById("inputPassword");

        inputPassword.parentNode.insertBefore(pMessageError, inputPassword);

        inputEmail.style.margin = "5% 0 0 0";

        pMessageError.innerHTML = "* " + err.response.data.errorMessage;
        pMessageError.style.margin = "0px 0 10% 10%";
        pMessageError.style.color = "red";
      } else {
        /* Finnaly Error not expected*/
        console.log("Error not expected ... CodeError : THEO-003");
      }
    });
}
