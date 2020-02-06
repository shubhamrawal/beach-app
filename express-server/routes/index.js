const express = require("express");
const authRouter = require("./auth");
const beachRouter = require("./beach");

const router = express.Router();
router.use("/auth", authRouter);
router.use("/beaches", beachRouter);

module.exports = router;
