const userModel = require("../models/userModel");

exports.userCreator = (req, res) => {
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
