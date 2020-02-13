import {
  FETCH_BEACHES,
  FETCH_BEACH,
  UNSET_BEACH,
  MARK_BEACH
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

const markBeach = (id, visited) => {
  return async dispatch => {
    try {
      await post(`beaches/mark/${id}`, { visited });
      dispatch({
        type: MARK_BEACH,
        payload: { visited }
      });
    } catch (e) {
      console.log(e.message);
    }
  };
};

export { fetchBeaches, fetchBeach, unsetBeach, markBeach };
