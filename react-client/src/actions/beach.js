import { FETCH_BEACHES, FETCH_BEACH } from "../constants/beach";
import { get } from "../helpers/request";

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

export { fetchBeaches, fetchBeach };
