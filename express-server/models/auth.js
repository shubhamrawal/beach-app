const { db } = require("../middleware/firebase");

class AuthModel {
  static async signup(uid, email) {
    try {
      await db
        .collection("users")
        .doc(uid)
        .set({
          email
        });
    } catch (e) {
      throw new Error(`Signup Failed.\n${e.message}`);
    }
  }
}

module.exports = AuthModel;
