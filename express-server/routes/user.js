const express = require("express");
const { auth } = require("../middleware/firebase");

const router = express.Router();
const userController = require("../controllers/user");

router.get("/visited", auth, userController.fetchVisited);
router.get("/wishlist", auth, userController.fetchWishlist);
router.post("/photo", auth, userController.addPhoto);

module.exports = router;
