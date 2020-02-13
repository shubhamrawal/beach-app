import {
  FETCH_BEACHES,
  FETCH_BEACH,
  UNSET_BEACH,
  MARK_BEACH_VISITED,
  MARK_BEACH_WISHLISTED
} from "../constants/beach";
import { get, post } from "../helpers/request";

const fetchBeaches = () => {
  return async dispatch => {
    try {
      const beaches = await get("beaches");
      dispatch({
        type: FETCH_BEACHES,
        payload: { beaches }
      });
    } catch (e) {
      // TODO: handle fetch beaches failure
      console.log(e.message);
    }
  };
};

const fetchBeach = name => {
  return async dispatch => {
    try {
      const beach = await get(`beaches/${name}`);
      // TODO: handle beach not found
      dispatch({
        type: FETCH_BEACH,
        payload: { beach }
      });
    } catch (e) {
      // TODO: handle fetch beach failure
      console.log(e.message);
    }
  };
};

const unsetBeach = () => {
  return dispatch => {
    dispatch({
      type: UNSET_BEACH
    });
  };
};

const markBeachVisited = (id, visited) => {
  return async dispatch => {
    try {
      await post(`beaches/mark/visited/${id}`, { visited });
      dispatch({
        type: MARK_BEACH_VISITED,
        payload: { visited }
      });
    } catch (e) {
      console.log(e.message);
    }
  };
};

const markBeachWishlisted = (id, wishlisted) => {
  return async dispatch => {
    try {
      await post(`beaches/mark/wishlisted/${id}`, { wishlisted });
      dispatch({
        type: MARK_BEACH_WISHLISTED,
        payload: { wishlisted }
      });
    } catch (e) {
      console.log(e.message);
    }
  };
};

export {
  fetchBeaches,
  fetchBeach,
  unsetBeach,
  markBeachVisited,
  markBeachWishlisted
};
