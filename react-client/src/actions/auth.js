import { SET_USER, UNSET_USER } from "../constants/auth";
import {
  firebaseLogin,
  firebaseLogout,
  firebaseSignup,
  dispatchUser
} from "../helpers/auth";
import { post } from "../helpers/request";
import { UNSET_USER_BEACH } from "../constants/user";

const initUser = () => {
  return async dispatch => {
    try {
      const callback = async user => {
        if (user) {
          const token = await user.getIdToken();
          dispatch({
            type: SET_USER,
            payload: { user, token }
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
      const token = await user.getIdToken();
      if (user) {
        dispatch({
          type: SET_USER,
          payload: { user, token }
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

const signup = (email, pass) => {
  return async dispatch => {
    try {
      const user = await firebaseSignup(email, pass);
      const token = await user.getIdToken();
      // anonymous function that returns email, uid from the user object
      const userData = (({ email, uid }) => ({ email, uid }))(user);
      await post("auth/signup", userData);
      if (user) {
        dispatch({
          type: SET_USER,
          payload: { user, token }
        });
      } else {
        throw new Error("Signup Failed");
      }
    } catch (e) {
      // TODO: handle signup failure
      console.log(e.message);
    }
  };
};

const logout = () => {
  return async dispatch => {
    dispatch({ type: UNSET_USER });
    dispatch({ type: UNSET_USER_BEACH });
    await firebaseLogout();
  };
};

export { initUser, login, logout, signup };
