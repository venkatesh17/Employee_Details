import { combineReducers } from "redux";
import userReducer from "./user-reducer";


export default combineReducers({
  login: userReducer
});
