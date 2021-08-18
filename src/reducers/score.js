import { ADD_SCORE, RESET_SCORE } from "../actions/constants";

const initialState = {
  score: 0,
  best: 0,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_SCORE:
      return { ...state, score: state.score + payload };
    case RESET_SCORE:
      if (state.score > state.best) {
        return { ...state, best: state.score, score: 0 };
      }
      return { ...state, score: 0 };
    default:
      return state;
  }
}
