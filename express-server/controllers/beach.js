const BeachModel = require("../models/beach");
const UserModel = require("../models/user");
const { getUid } = require("../middleware/firebase");

const getBeaches = async (req, res) => {
  try {
    const beachData = await BeachModel.fetchAll();
    res.status(200).send(beachData);
  } catch (e) {
    console.log(e.message);
    res.status(400).send("Fetch error");
  }
};

const getBeach = async (req, res) => {
  try {
    const beach = await BeachModel.fetchBeachByName(req.params.name);
    if (!beach) {
      res.status(404).send({ error: "Could not find the resource" });
      return;
    }
    if (req.token) {
      const uid = await getUid(req.token);
      const userData = await UserModel.fetchUserVisited(uid, beach.id);
      const data = { ...beach, ...userData };
      res.status(200).send(data);
    } else {
      res.status(200).send(beach);
    }
  } catch (e) {
    console.log(e.message);
    res.status(400).send("Fetch error");
  }
};

const markBeach = async (req, res) => {
  try {
    const uid = await getUid(req.token);
    const { visited } = req.body;
    if (visited) {
      await UserModel.markVisited(uid, req.params.id);
    } else {
      await UserModel.markUnvisited(uid, req.params.id);
    }
    // const beach = await BeachModel.fetchBeachById(req.params.id);
    // const data = { ...beach, ...{ visited: visited } };
    res.status(200).send({ success: true });
  } catch (e) {
    console.log(e.message);
    res.status(400).send("Database error");
  }
};

const _getFQN = id => {
  return `beaches/${id}`;
};

module.exports = {
  getBeaches,
  getBeach,
  markBeach
};
