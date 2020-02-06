import { combineReducers } from "redux";
import beachReducer from "./beach";
import authReducer from "./auth";

export default combineReducers({
  auth: authReducer,
  beaches: beachReducer
});
