import { SET_USER, UNSET_USER } from "../constants/auth";

const logIn = user => ({
  type: SET_USER,
  payload: {
    user
  }
});

const logOut = () => ({
  type: UNSET_USER
});

export { logIn, logOut };
