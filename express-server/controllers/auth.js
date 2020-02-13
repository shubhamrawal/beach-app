const AuthModel = require("../models/auth");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await AuthModel.login(email, password);
    res.status(200).send(userData);
  } catch (e) {
    console.log(e.message);
    res.status(400).send("Login Error");
  }
};

const signup = async (req, res) => {
  try {
    const { uid, email } = req.body;
    const userData = await AuthModel.signup(uid, email);
    res.status(201).send(userData);
  } catch (e) {
    // TODO: handle signup database failure
    console.log(e.message);
    res.status(400).send("Signup failure");
  }
};

module.exports = { login, signup };
