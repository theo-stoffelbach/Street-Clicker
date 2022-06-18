const userModel = require("../models/userModel");
const CryptoJS = require("crypto-js");
var crypt = {
  secret: `+j&l$?/t{/8?xZk:E~<}&%w>&yT%I!gg&/SVe,;=aqT4&<y?}c#CWrXbEsc!t=xg|T(dNsU".$V)+h$0XzC0=z/Ye$Ap+%>cn,W`,
};

const encryption = (password) => {
  var password_input = CryptoJS.AES.encrypt(password, crypt.secret);
  password_input = password_input.toString();
  return password_input;
};

const decryptage = (password_user) => {
  password_user = CryptoJS.AES.decrypt(password_user, crypt.secret);
  password_user = password_user.toString(CryptoJS.enc.Utf8);
  return password_user;
};

const CreateAccount = (userData) => {
  userData
    .save()
    .then((createUser) => {
      return createUser;
    })
    .catch((err) => {
      return err;
    });
};

exports.Testpost = (req, res) => {
  // const user = new user({name: req.body.name,});
  const user = new userModel(req.body);
  console.log("Test1");
  user
    .save()
    .then((createUser) => {
      return res.status(201).json(createUser);
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
};

exports.userCreator = (req, res) => {
  let userData = new userModel(req.body);
  const pseudo = req.body.pseudo;
  const email = req.body.email;
  const password = req.body.password;
  const jordan = req.body.jordan;

  if ((jordan != "undefined" && jordan != "true") || jordan == "false")
    userData.status = "Admin";
  else userData.status = "Jordan";

  console.log(
    "pseudo : " + pseudo + " email : " + email + " password : " + password
  );

  const encryption = (password) => {
    var password_input = CryptoJS.AES.encrypt(password, crypt.secret);
    password_input = password_input.toString();
    return password_input;
  };
};

exports.test = (req, res) => {
  // Le test pour créer le register pour admin
  let userData = new userModel(req.body);

  userData.password = encryption(userData.password);

  // console.log("La fonction appeller est test - ");

  userModel
    .findOne({ email: userData.email })
    .then((user) => {
      if (user === null) {
        CreateAccount(userData);
        return res.status(200).json("Le compte à était créer avec succées");
      }
      return res
        .status(500)
        .json("Il existe déjà un compte avec cette adress mail");
    })
    .catch((err) => {
      // Ici l'adress est déja verif plus qu'a creer le compte

      // CreateAccount(userData);

      return res
        .status(500)
        .json(
          "OUF CA BUG TRUC DE OUF mais dit a théo le code d'erreur : THEO-001"
        );
    });
};

if (color == "aqua") color = "#00FFFF";
else if (color == "black") color = "#00000";
else if (color == "blue") color = "#0000FF";
else if (color == "fuchsia") color = "#FF00FF";
else if (color == "gray") color = "#808080";
else if (color == "green") color = "#008000";
else if (color == "lime") color = "#00FF00";
else if (color == "maroon") color = "#000080";
else if (color == "navy") color = "#000080";
else if (color == "olive") color = "#808000";
else if (color == "purple") color = "#800080";
else if (color == "red") color = "#FF0000";
else if (color == "silver") color = "#C0C0C0";
else if (color == "teal") color = "#008080";
else if (color == "white") color = "#FFFFFF";
else if (color == "yellow") color = "#FFFF00";
else erreur = "Ca n'existe pas elle ne vigur pas dans la liste des couleurs : ";

let color = [
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

exports.connection = (req, res, next) => {
  const id = req.params.id;

  userModel
    .findOne({ _id: id })
    .then((user) => {
      return res.status(200).json(user);
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
};

// const res = await Person.replaceOne({ _id: 24601 }, { name: 'Jean Valjean' });

// PostModel.findByIdAndUpdate(
//   req.params.id,
//   { $set: updatedRecord },
//   { new: true },
//   (err, docs) => {
//     if (!err) res.send(docs);
//     else console.log("Update error : " + err);
//   }
// );

exports.getAll = (req, res) => {
  userModel
    .find()
    .then((users) => {
      return res.status(200).json(users);
    })
    .catch((err) => {
      return res.status(404).json(err);
    });
};

exports.update = (req, res) => {
  const user = new userModel(req.body);

  const query = { pseudo: user.lookfor };
  userModel
    .findOneAndUpdate(query, { pseudo: user.pseudo })
    .then((users) => {
      console.log(user);
      return res.status(201).json(users);
    })
    .catch((err) => {
      return res.status(404).json(err);
    });
};

exports.delete = (req, res) => {
  const user = new userModel(req.body);

  const query = { pseudo: user.lookfor };
  userModel
    .findOneAndUpdate(query, { pseudo: user.pseudo })
    .then((users) => {
      console.log(user);
      return res.status(201).json(users);
    })
    .catch((err) => {
      return res.status(404).json(err);
    });
};

exports.login = (req, res) => {
  const user = new userModel(req.body);
  const email = user.email;
  const password = user.password;
  // const merde2 = password;

  userModel
    .findOne({ email: email })
    .then((user) => {
      const cryptage_password_user = user.password;
      const password_user = decryptage(cryptage_password_user);
      if (password_user === password) console.log("BON MDP");
      else console.log("PAS LE BON MDP");
      return res.status(200).json(user);
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
};
