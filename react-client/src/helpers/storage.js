import { storage } from "./auth";

const firebaseUploadPhoto = (refId, photo) => {
  try {
    const storagePathRef = storage.ref().child(refId);
    return storagePathRef.put(photo);
  } catch (e) {
    console.log(e.message);
  }
};

const getFirebaseDownloadUrl = async refId => {
  try {
    return await storage
      .ref()
      .child(refId)
      .getDownloadURL();
  } catch (e) {
    // TODO: handle resource not found
    console.log(e.message);
  }
};

export { firebaseUploadPhoto, getFirebaseDownloadUrl };
