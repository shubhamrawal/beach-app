import { SET_USER, UNSET_USER } from "../constants/auth";
import { firebaseLogin, firebaseLogout, dispatchUser } from "../helpers/auth";

const initUser = () => {
  return dispatch => {
    try {
      const callback = user => {
        if (user) {
          dispatch({
            type: SET_USER,
            payload: { user }
          });
        } else {
          dispatch({
            type: UNSET_USER
          });
        }
      };
      dispatchUser(callback);
    } catch (e) {
      // TODO: handle firebase error
      console.log("initialisation error");
    }
  };
};

const login = (email, pass) => {
  return async dispatch => {
    try {
      const user = await firebaseLogin(email, pass);
      if (user) {
        dispatch({
          type: SET_USER,
          payload: { user }
        });
      } else {
        throw new Error("Login Failed");
      }
    } catch (e) {
      // TODO: handle login failure
      console.log(e.message);
    }
  };
};

const logout = () => {
  return dispatch => {
    firebaseLogout();
    dispatch({ type: UNSET_USER });
  };
};

export { initUser, login, logout };
