const AuthModel = require("../models/auth");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await AuthModel.login(email, password);
    res.status(201).send(userData);
  } catch (e) {
    console.log(e.message);
    res.status(400).send("Login Error");
  }
};

const signup = async (req, res) => {};

module.exports = { login, signup };
