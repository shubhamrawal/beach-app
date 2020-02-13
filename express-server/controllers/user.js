const UserModel = require("../models/user");
const { getUid } = require("../middleware/firebase");

const addPhoto = async (req, res) => {
  try {
    const { beachId, photoRefId } = req.body;
    const uid = await getUid(req.token);
    await UserModel.addPhoto(uid, beachId, photoRefId);
    res.status(201).send({ success: true });
  } catch (e) {
    console.log(e.message);
    res.status(400).send("Database error");
  }
};

module.exports = { addPhoto };
