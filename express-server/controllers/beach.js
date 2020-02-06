const BeachModel = require("../models/beach");

const getBeaches = async (req, res) => {
  try {
    const beachData = await BeachModel.fetchAll();
    res.status(201).send(beachData);
  } catch (e) {
    console.log(e.message);
    res.status(400).send("Fetch error");
  }
};

const getBeach = async (req, res) => {
  try {
    const beachData = await BeachModel.fetch(req.params.name);
    res.status(201).send(beachData);
  } catch (e) {
    console.log(e.message);
    res.status(201).send("Fetch error");
  }
};

module.exports = {
  getBeaches,
  getBeach
};
