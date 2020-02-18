const { db, FIREBASE_TIMESTAMP } = require("../middleware/firebase");

class UserModel {
  static async fetchUserVisited(uid, beachId) {
    try {
      const docRef = await db
        .collection("users")
        .doc(uid)
        .collection("beaches")
        .doc(beachId);

      const doc = await docRef.get();

      let visited = false;
      let wishlist = false;
      let photos = [];
      if (doc.exists) {
        const visitedData = doc.data();
        visited = visitedData.visited;
        wishlist = visitedData.wishlist;
        const snap = await docRef.collection("photos").get();
        photos = snap.docs.map(doc => doc.data().ref);
      }
      return { visited, wishlist, photos };
    } catch (e) {
      throw new Error(`Cannot fetch user information.\n${e.message}`);
    }
  }

  static async fetchVisited(uid) {
    try {
      const snap = await db
        .collection("users")
        .doc(uid)
        .collection("beaches")
        .get();

      let visited = [];
      if (!snap.empty) {
        snap.forEach(beach => {
          if (beach.data().visited) {
            visited.push(beach.id);
          }
        });
      }

      let promises = [];
      visited.forEach(id => {
        promises.push(UserModel._fetchBeachWithId(id));
      });

      return await Promise.all(promises);
    } catch (e) {
      throw new Error(`Cannot fetch user information.\n${e.message}`);
    }
  }

  static async fetchWishlist(uid) {
    try {
      const snap = await db
        .collection("users")
        .doc(uid)
        .collection("beaches")
        .get();

      let wishlist = [];
      if (!snap.empty) {
        snap.forEach(beach => {
          if (beach.data().wishlist) {
            wishlist.push(beach.id);
          }
        });
      }

      let promises = [];
      wishlist.forEach(id => {
        promises.push(UserModel._fetchBeachWithId(id));
      });

      return await Promise.all(promises);
    } catch (e) {
      throw new Error(`Cannot fetch user information.\n${e.message}`);
    }
  }

  static async markUnvisited(uid, beachId) {
    try {
      const docRef = await db
        .collection("users")
        .doc(uid)
        .collection("beaches")
        .doc(beachId);
      await docRef.set({ visited: false }, { merge: true });
    } catch (e) {
      throw new Error(`Database error\n${e.message}`);
    }
  }

  static async markVisited(uid, beachId) {
    try {
      const docRef = await db
        .collection("users")
        .doc(uid)
        .collection("beaches")
        .doc(beachId);
      await docRef.set({ visited: true }, { merge: true });
    } catch (e) {
      throw new Error(`Database error\n${e.message}`);
    }
  }

  static async markWishlisted(uid, beachId) {
    try {
      const docRef = await db
        .collection("users")
        .doc(uid)
        .collection("beaches")
        .doc(beachId);
      await docRef.set({ wishlist: true }, { merge: true });
    } catch (e) {
      throw new Error(`Database error\n${e.message}`);
    }
  }

  static async markUnwishlisted(uid, beachId) {
    try {
      const docRef = await db
        .collection("users")
        .doc(uid)
        .collection("beaches")
        .doc(beachId);
      await docRef.set({ wishlist: false }, { merge: true });
    } catch (e) {
      throw new Error(`Database error\n${e.message}`);
    }
  }

  static async addPhoto(uid, beachId, photoRefId, metadata) {
    try {
      const docRef = await db
        .collection("users")
        .doc(uid)
        .collection("beaches")
        .doc(beachId);

      const doc = await docRef.get();
      if (doc.exists) {
        if (doc.data().visited) {
          await docRef.collection("photos").add({
            created: FIREBASE_TIMESTAMP,
            ref: photoRefId,
            metadata: metadata
          });
        } else {
          // TODO: handle beach not visited
        }
      } else {
        // TODO: handle document doesn't exist
      }
      // await docRef.update(
      //   "photos",
      //   firebase.firestore.FieldValue.arrayUnion(photoRefId)
      // );
    } catch (e) {
      throw new Error(`Database error\n${e.message}`);
    }
  }

  static async _fetchBeachWithId(id) {
    const beach = (
      await db
        .collection("beaches")
        .doc(id)
        .get()
    ).data();
    return beach;
  }
}

module.exports = UserModel;
