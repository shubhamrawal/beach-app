import { FETCH_BEACHES, FETCH_BEACH } from "../constants/beach";

const initialState = { beaches: [], currentBeach: null };

const beaches = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEACHES:
      return { ...state, beaches: action.payload.beaches };
    case FETCH_BEACH:
      return { ...state, currentBeach: action.payload.beach };
    default:
      return state;
  }
};

export default beaches;
