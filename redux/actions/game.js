import { START_GAME, END_GAME, VALID_MOVE, INVALID_MOVE } from "../constants";

const createBoard = (size) => {
  const board = [];
  for (let i = 0; i < size ** 2; i++) {
    board.push({ value: 0, state: 0 });
  }
  return board;
};

export const startGame = () => (dispatch) => {
  const board = createBoard(4);
  console.log(board);
  dispatch({ type: START_GAME, payload: board });
};
