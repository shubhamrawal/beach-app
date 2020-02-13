const { db } = require("../middleware/firebase");
const _capitalize = require("lodash/capitalize");
const _isEmpty = require("lodash/isEmpty");

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

  static async fetchBeachByName(beachName) {
    try {
      const name = beachName
        .split("_")
        .map(word => _capitalize(word))
        .join(" ");
      const snap = await db
        .collection("beaches")
        .where("name", "==", name)
        .limit(1)
        .get();
      if (!_isEmpty(snap.docs)) {
        const beachRef = snap.docs[0];
        const beach = { ...beachRef.data(), ...{ id: beachRef.id } };
        return beach;
      }
      return null;
    } catch (e) {
      throw new Error(
        `Fetch error. Check connection to the database.\n${e.message}`
      );
    }
  }

  static async fetchBeachById(beachId) {
    try {
      const snap = await db
        .collection("beaches")
        .doc(beachId)
        .get();
      return { ...snap.data(), ...{ id: snap.id } };
    } catch (e) {
      throw new Error(
        `Fetch error. Check connection to the database.\n${e.message}`
      );
    }
  }
}

module.exports = BeachModel;
