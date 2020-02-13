const { db, firebase } = require("../middleware/firebase");

class UserModel {
  static async fetchUserVisited(uid, beachId) {
    try {
      const doc = await db
        .collection("users")
        .doc(uid)
        .collection("visited")
        .doc(beachId)
        .get();

      let visited = false;
      let photos = [];
      if (doc.exists) {
        const visitedData = doc.data();
        visited = visitedData.visited;
        photos = visitedData.photos;
      }
      // const visited = doc.exists && doc.da;
      // let photos = [];
      // if (visited) {
      //   const visitedData = doc.data();
      //   if (visitedData.visited) {
      //     photos = visitedData.photos;
      //   }
      // }
      return { visited, photos };
    } catch (e) {
      throw new Error(`Cannot fetch user information.\n${e.message}`);
    }
  }

  static async markUnvisited(uid, beachId) {
    try {
      const docRef = await db
        .collection("users")
        .doc(uid)
        .collection("visited")
        .doc(beachId);
      await docRef.set({ visited: false }, { merge: true });
      // const docRef = await db.collection("users").doc(uid);
      // await docRef.update(
      //   "visited",
      //   firebase.firestore.FieldValue.arrayRemove(beachId)
      // );
    } catch (e) {
      throw new Error(`Database error\n${e.message}`);
    }
  }

  static async markVisited(uid, beachId) {
    try {
      const docRef = await db
        .collection("users")
        .doc(uid)
        .collection("visited")
        .doc(beachId);
      await docRef.set({ visited: true }, { merge: true });
    } catch (e) {
      throw new Error(`Database error\n${e.message}`);
    }
  }

  static async addPhoto(uid, beachId, photoRefId) {
    try {
      const docRef = await db
        .collection("users")
        .doc(uid)
        .collection("visited")
        .doc(beachId);

      if (docRef.get().exists) {
        if (doc.data().visited === true) {
          docRef.collection("photos").add({
            created: firebase.database.ServerValue.TIMESTAMP,
            ref: photoRefId
          });
        } else {
          // TODO: handle beach not visited
        }
      } else {
        // TODO: handle document doesn't exist
      }
      await docRef.update(
        "photos",
        firebase.firestore.FieldValue.arrayUnion(photoRefId)
      );
    } catch (e) {
      throw new Error(`Database error\n${e.message}`);
    }
  }
}

module.exports = UserModel;
