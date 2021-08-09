import { START_GAME, END_GAME, VALID_MOVE, INVALID_MOVE } from "../constants";

const initialState = {
  gameBoard: [],
  score: 0,
  running: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case START_GAME:
      return { ...state, gameBoard: payload, running: true };
    case VALID_MOVE:
      return { ...state, gameBoard: payload };
    case END_GAME:
      return { ...state, running: false };
    case INVALID_MOVE:
    default:
      return { ...state };
  }
};
