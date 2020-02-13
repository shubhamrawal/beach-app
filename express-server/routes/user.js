const express = require("express");
const { auth } = require("../middleware/firebase");

const router = express.Router();
const userController = require("../controllers/user");

router.post("/photo", auth, userController.addPhoto);

module.exports = router;
