import { SET_USER, UNSET_USER } from "../constants/auth";

const initialState = { user: null, token: null, init: false };

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        init: true
      };
    case UNSET_USER:
      return { ...state, user: null, token: null, init: true };
    default:
      return state;
  }
};

export default auth;
