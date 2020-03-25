import {
  SHOW_MODAL,
  HIDE_MODAL
} from "../actionTypes/authUserModalActionTypes";

const initialState = {
  selectedModal: null,
  open: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        open: action.payload,
        selectedModal: action.selectedModal
      };
    case HIDE_MODAL:
      return {
        type: action.payload
      };
    default:
      return state;
  }
};
