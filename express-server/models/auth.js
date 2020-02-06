const firebase = require("../middleware/firebase");

class AuthModel {
  static async login(email, pass) {
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, pass);
      console.log(user);
      // const token = await firebase.auth().createCustomToken(uid);
      // console.log(token);
      // return { token };
    } catch (e) {
      throw new Error();
    }
  }
}

module.exports = AuthModel;
