import { getCurrentUser } from "../helpers/auth";
import { SET_USER, UNSET_USER } from "../constants/auth";

const INITIAL_STATE = { user: getCurrentUser() };

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload.user };
    case UNSET_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default auth;
