import { FETCH_BEACHES } from "../constants/beach";

const INITIAL_STATE = { beaches: [] };

export default function beaches(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BEACHES:
      return { ...state, beaches: action.payload.beaches };
    default:
      return state;
  }
}
