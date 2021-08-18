import { ADD_SCORE, RESET_SCORE } from "../actions/constants";

export const addScore = (amount) => (dispatch) => {
  dispatch({ type: ADD_SCORE, payload: amount });
};

export const resetScore = () => (dispatch) => {
  dispatch({ type: RESET_SCORE });
};
