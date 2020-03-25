import {
  AUTH_USER_SIGN_IN_SUCCESSFUL,
  AUTH_USER_LOGOUT
} from "../actionTypes/authUserActionTypes";
import { jwtDecodeTokenAndSetUser } from "./helpers/authReducerHelper";

const initialState = {
  isAuthenticated: false,
  user: null,
  selectedSearch: "",
  subscriptionsList: [
    "Netflix",
    "ESPN",
    "Hulu",
    "Youtube",
    "Pandora",
    "Spotify",
    "Adobe",
    "AWS",
    "Verizon",
    "Disney",
    "PlayStation",
    "Xbox"
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER_SIGN_IN_SUCCESSFUL:
      return jwtDecodeTokenAndSetUser(state, action.payload);
    case AUTH_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
}
