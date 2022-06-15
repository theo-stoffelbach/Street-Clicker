const userModel = require("../models/userModel");
const CryptoJS = require("crypto-js");
var crypt = {
  secret: `+j&l$?/t{/8?xZk:E~<}&%w>&yT%I!gg&/SVe,;=aqT4&<y?}c#CWrXbEsc!t=xg|T(dNsU".$V)+h$0XzC0=z/Ye$Ap+%>cn,W`,
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

  console.log(
    "pseudo : " + pseudo + " email : " + email + " password : " + password
  );

  const encryption = (password) => {
    var password_input = CryptoJS.AES.encrypt(password, crypt.secret);
    password_input = password_input.toString();
    return password_input;
  };

  userData.password = encryption(password);
  userData.status = "Admin";

  console.log(userData);

  userData
    .save()
    .then((createUser) => {
      return res.status(201).json(createUser);
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
};

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

  const decryptage = (password_user) => {
    password_user = CryptoJS.AES.decrypt(password_user, crypt.secret);
    password_user = password_user.toString(CryptoJS.enc.Utf8);
    return password_user;
  };

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
