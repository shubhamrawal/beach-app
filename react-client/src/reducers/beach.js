import {
  FETCH_BEACHES,
  FETCH_BEACH,
  UNSET_BEACH,
  MARK_BEACH_VISITED,
  MARK_BEACH_WISHLISTED
} from "../constants/beach";
import {
  ADD_PHOTO,
  FETCH_VISITED,
  FETCH_WISHLIST,
  UNSET_USER_BEACH
} from "../constants/user";

const initialState = {
  beaches: [],
  currentBeach: {},
  photos: [],
  visited: [],
  wishlist: []
};

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
      return {
        ...state,
        currentBeach: {},
        photos: []
      };
    case UNSET_USER_BEACH:
      return {
        ...state,
        currentBeach: {},
        photos: [],
        visited: [],
        wishlist: []
      };
    case MARK_BEACH_VISITED:
      if (action.payload.visited) {
        const beach = (({ name, location, state, country }) => ({
          name,
          location,
          state,
          country
        }))(state.currentBeach);
        return {
          ...state,
          currentBeach: {
            ...state.currentBeach,
            visited: action.payload.visited
          },
          visited: [...state.visited, beach]
        };
      }
      return {
        ...state,
        currentBeach: {
          ...state.currentBeach,
          visited: action.payload.visited
        },
        visited: state.visited.filter(
          beach => beach.name !== state.currentBeach.name
        )
      };
    case MARK_BEACH_WISHLISTED:
      if (action.payload.wishlisted) {
        const beach = (({ name, location, state, country }) => ({
          name,
          location,
          state,
          country
        }))(state.currentBeach);
        return {
          ...state,
          currentBeach: {
            ...state.currentBeach,
            wishlist: action.payload.wishlisted
          },
          wishlist: [...state.wishlist, beach]
        };
      }
      return {
        ...state,
        currentBeach: {
          ...state.currentBeach,
          wishlist: action.payload.wishlisted
        },
        wishlist: state.wishlist.filter(
          beach => beach.name !== state.currentBeach.name
        )
      };
    case ADD_PHOTO:
      return {
        ...state,
        photos: [...state.photos, action.payload.photoRefId]
      };
    case FETCH_VISITED:
      return {
        ...state,
        visited: action.payload.beaches
      };
    case FETCH_WISHLIST:
      return {
        ...state,
        wishlist: action.payload.beaches
      };
    default:
      return state;
  }
};

export default beaches;
