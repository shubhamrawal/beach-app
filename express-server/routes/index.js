const express = require("express");
const authRouter = require("./auth");
const beachRouter = require("./beach");
const userRouter = require("./user");
const { insertToken } = require("../middleware/firebase");

const router = express.Router();
router.use("*", insertToken);
router.use("/auth", authRouter);
router.use("/beaches", beachRouter);
router.use("/user", userRouter);

module.exports = router;
