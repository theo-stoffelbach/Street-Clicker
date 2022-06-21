const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");

// router.get("/test", (req, res) => {
//   console.log("Youpi ca marche");
//   return res.status(201).json("Yopi ca marcuhe");
// });

router.post("/login", userController.login);
router.post("/test", userController.test);
router.post("/create/test", userController.Testpost);
router.post("/create/user", userController.userCreator);
router.get("/a", userController.getAll);

router.get("/:id", userController.connection);

router.patch("/update", userController.update);
router.post("/test", userController.update);

module.exports = router;
