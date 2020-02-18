import { FETCH_VISITED, FETCH_WISHLIST, ADD_PHOTO } from "../constants/user";
import { post, get } from "../helpers/request";
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

const fetchVisited = () => {
  return async dispatch => {
    try {
      const beaches = await get("user/visited");
      dispatch({
        type: FETCH_VISITED,
        payload: { beaches }
      });
    } catch (e) {}
  };
};

const fetchWishlist = () => {
  return async dispatch => {
    try {
      const beaches = await get("user/wishlist");
      dispatch({
        type: FETCH_WISHLIST,
        payload: { beaches }
      });
    } catch (e) {}
  };
};

export { fetchVisited, fetchWishlist, addPhoto, uploadPhoto };
