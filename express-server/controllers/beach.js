const BeachModel = require("../models/beach");

const getBeaches = async (req, res) => {
  try {
    const beachData = await BeachModel.fetchAll();
    res.status(201).send(beachData);
  } catch (e) {
    console.log(e.message);
    res.status(400).send("Could not fetch a list of beaches");
  }
};

const getBeach = (req, res) => {
  res.status(201).send(`Beach - ${req.params.name}`);
};

module.exports = {
  getBeaches,
  getBeach
};
