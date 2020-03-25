import {
  TRACK_SUBSCRIPTION,
  SHOW_MODAL,
  HIDE_MODAL,
  SELECT_SEARCH_RESULT
} from "../actionTypes/authUserModalActionTypes";

export const showModal = info => dispatch => {
  dispatch({
    type: SHOW_MODAL,
    payload: true,
    selectedModal: info.selectedModal
  });
};

export const hideModal = () => dispatch => {
  dispatch({
    type: HIDE_MODAL,
    payload: false
  });
};

export const trackSubscription = info => dispatch => {
  dispatch({
    type: TRACK_SUBSCRIPTION,
    payload: info
  });
};

export const selectSearchResult = info => dispatch => {
  dispatch({
    type: SELECT_SEARCH_RESULT,
    selected: info
  });
};
