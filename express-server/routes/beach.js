const express = require("express");
const { auth } = require("../middleware/firebase");

const router = express.Router();
const beachController = require("../controllers/beach");

router.get("/", beachController.getBeaches);
router.get("/:name", beachController.getBeach);
router.post("/mark/visited/:id", auth, beachController.markBeachVisited);
router.post("/mark/wishlisted/:id", auth, beachController.markBeachWishlisted);

module.exports = router;
