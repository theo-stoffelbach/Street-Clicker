const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const CryptoJS = require("crypto-js");

const userRouter = require("./rooter/userRouter");

const mongoose = require("mongoose");

// Le TEST CRYPTAGE
var crypt = {
  secret: `+j&l$?/t{/8?xZk:E~<}&%w>&yT%I!gg&/SVe,;=aqT4&<y?}c#CWrXbEsc!t=xg|T(dNsU".$V)+h$0XzC0=z/Ye$Ap+%>cn,W`,
};

const password = (clear) => {
  var cipher = CryptoJS.AES.encrypt(clear, crypt.secret);
  cipher = cipher.toString();
  return cipher;
};

let test = password("Merde");
console.log("Le cryptage = " + test);

const decrypt = (cipher) => {
  var decipher = CryptoJS.AES.decrypt(cipher, crypt.secret);
  decipher = decipher.toString(CryptoJS.enc.Utf8);
  return decipher;
};

let test2 = decrypt(test);

// Le TEST CRYPTAGE FIN

app.use(cors());

mongoose
  .connect(
    "mongodb+srv://fs:FloriantetsonJs...@cluster0.fbppb.mongodb.net/Kitty",
    {
      useNewUrlParser: true,
      UseUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("conncetion reussit avec la BD");
  })
  .catch(() => console.log(error));

app.use(bodyParser.json());

app.use("/api/user", userRouter);

module.exports = app;
