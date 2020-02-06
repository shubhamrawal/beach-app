const firebase = require("../middleware/firebase");
const db = firebase.firestore();

class BeachModel {
  static async fetchAll() {
    try {
      const snap = await db.collection("beaches").get();
      return snap.docs.map(doc => doc.data());
    } catch (e) {
      throw new Error(
        `Fetch error. Check connection to the database.\n${e.message}`
      );
    }
  }

  static async fetch(beachName) {
    try {
      const snap = await db
        .collection("beaches")
        .doc(beachName)
        .get();
      return snap.data();
    } catch (e) {
      throw new Error(
        `Fetch error. Check connection to the database.\n${e.message}`
      );
    }
  }
}

module.exports = BeachModel;
