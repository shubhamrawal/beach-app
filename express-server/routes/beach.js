const express = require("express");
const { auth } = require("../middleware/firebase");

const router = express.Router();
const beachController = require("../controllers/beach");

router.get("/", beachController.getBeaches);
router.get("/:name", beachController.getBeach);
router.post("/mark/:id", auth, beachController.markBeach);

module.exports = router;
