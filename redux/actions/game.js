import {
  START_GAME,
  END_GAME,
  MOVE_SQUARE,
  COMBINE_SQUARE,
  INVALID_MOVE,
} from "../constants";

// actions
export const startGame = () => (dispatch) => {
  const board = createBoard(4);
  dropPiece(board);
  dispatch({ type: START_GAME, payload: board });
};

export const moveA = (board) => (dispatch) => {
  console.log(board);
  const moved = moveUp(board);

  if (moved) {
    dispatch({ type: VALID_MOVE, payload: board });
  } else {
    dispatch({ type: INVALID_MOVE });
  }
};

// game functions
const createBoard = (size) => {
  const board = [];
  for (let i = 0; i < size ** 2; i++) {
    board.push({ value: 0, state: 0 });
  }
  return board;
};

const dropPiece = (gameBoard) => {
  const spaces = [];
  gameBoard.forEach((ele, i) => {
    if (ele.value == 0) {
      spaces.push(i);
    }
  });
  Math.random() < 0.15
    ? (gameBoard[spaces[Math.floor(Math.random() * spaces.length)]].value = 4)
    : (gameBoard[spaces[Math.floor(Math.random() * spaces.length)]].value = 2);
};
