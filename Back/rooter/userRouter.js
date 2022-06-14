const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");

router.get("/a", userController.getAll);

router.post("/create", userController.userCreator);

router.get("/:id", userController.connection);

router.patch("/update", userController.update);

module.exports = router;
