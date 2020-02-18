const UserModel = require("../models/user");
const { getUid } = require("../middleware/firebase");

const addPhoto = async (req, res) => {
  try {
    const { beachId, photoRefId, metadata } = req.body;
    const uid = await getUid(req.token);
    await UserModel.addPhoto(uid, beachId, photoRefId, metadata);
    res.status(201).send({ success: true });
  } catch (e) {
    console.log(e.message);
    res.status(400).send("Database error");
  }
};

const fetchVisited = async (req, res) => {
  try {
    const uid = await getUid(req.token);
    const beaches = await UserModel.fetchVisited(uid);
    res.status(200).send(beaches);
  } catch (e) {
    console.log(e.message);
    res.status(400).send("Database error");
  }
};

const fetchWishlist = async (req, res) => {
  try {
    const uid = await getUid(req.token);
    const beaches = await UserModel.fetchWishlist(uid);
    res.status(200).send(beaches);
  } catch (e) {
    console.log(e.message);
    res.status(400).send("Database error");
  }
};

module.exports = { addPhoto, fetchVisited, fetchWishlist };
