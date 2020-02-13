import {
  FETCH_BEACHES,
  FETCH_BEACH,
  UNSET_BEACH,
  MARK_BEACH
} from "../constants/beach";
import { ADD_PHOTO } from "../constants/user";

const initialState = { beaches: [], currentBeach: {}, photos: [] };

const beaches = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEACHES:
      return { ...state, beaches: action.payload.beaches };
    case FETCH_BEACH:
      return {
        ...state,
        currentBeach: action.payload.beach,
        photos: action.payload.beach.photos
      };
    case UNSET_BEACH:
      return { ...state, currentBeach: {}, photos: [] };
    case MARK_BEACH:
      return {
        ...state,
        currentBeach: { ...state.currentBeach, visited: action.payload.visited }
      };
    case ADD_PHOTO:
      return {
        ...state,
        photos: [...state.photos, action.payload.photoRefId]
      };
    default:
      return state;
  }
};

export default beaches;
