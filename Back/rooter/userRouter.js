const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");

router.post("/post", userController.userCreator);

module.exports = router;
