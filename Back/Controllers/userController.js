const userModel = require("../models/userModel");

exports.userCreator = (req, res) => {
  // const user = new user({name: req.body.name,});
  const user = new userModel(req.body);

  user
    .save()
    .then((userModel) => {
      return res.status(201).json(userModel);
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
};

// const Cat = mongoose.model("Cat", { name: String });

// const kitty = new Cat({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));
