import { ADD_PHOTO } from "../constants/user";
import { post } from "../helpers/request";
import uuid from "uuid";

const uploadPhoto = (beachId, photoName, metadata) => {
  return async dispatch => {
    try {
      const photoRefId = `images/beaches/${uuid.v4()}.${
        photoName.split(".")[1]
      }`;
      await post("user/photo", { beachId, photoRefId, metadata });
      return photoRefId;
    } catch (e) {}
  };
};

const addPhoto = photoRefId => {
  return dispatch => {
    try {
      dispatch({
        type: ADD_PHOTO,
        payload: { photoRefId }
      });
    } catch (e) {}
  };
};

export { addPhoto, uploadPhoto };
