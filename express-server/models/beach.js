const db = require("./db");

class BeachModel {
  constructor() {}

  static async fetchAll() {
    try {
      const snap = await db.collection("beaches").get();
      return snap.docs.map(doc => doc.data());
    } catch (e) {
      throw new Error("Could not fetch documents");
    }
  }
}

module.exports = BeachModel;
