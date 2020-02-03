import { combineReducers } from "redux";
import beachReducer from "./beach";

export default combineReducers({
  beaches: beachReducer
});
