const express = require("express");

const router = express.Router();
const beachController = require("../controllers/beach");

router.get("/", beachController.getBeaches);
router.get("/:name", beachController.getBeach);

module.exports = router;
