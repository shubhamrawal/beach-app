const express = require("express");
const beachRouter = require("./beach");

const router = express.Router();
router.use("/beaches", beachRouter);

module.exports = router;
