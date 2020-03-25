import { combineReducers } from "redux";
import authUserReducer from "./authUserReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  authUser: authUserReducer,
  modal: modalReducer
});
