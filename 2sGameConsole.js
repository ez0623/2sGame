const SIDE_LENGTH = 4;

const createBoard = (size) => {
  const board = [];
  for (let i = 0; i < size ** 2; i++) {
    board.push({ value: 0, state: 0 });
  }
  return board;
};

const printGameboard = (gameBoard) => {
  console.log("BOARD:");
  for (let i = 0; i < SIDE_LENGTH; i++) {
    for (let j = 0; j < SIDE_LENGTH; j++) {
      process.stdout.write(
        gameBoard[i * SIDE_LENGTH + j].value +
          (gameBoard[i * SIDE_LENGTH + j].state == 0 ? " " : "!")
      );
    }
    console.log();
  }
  console.log();
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

const indexAbove = (i) => {
  const indexes = [];
  i = i - SIDE_LENGTH;
  while (i >= 0) {
    indexes.push(i);
    i = i - SIDE_LENGTH;
  }
  return indexes;
};
const indexBelow = (i) => {
  const indexes = [];
  i = i + SIDE_LENGTH;
  while (i < SIDE_LENGTH ** 2) {
    indexes.push(i);
    i = i + SIDE_LENGTH;
  }
  return indexes;
};
const indexRight = (i) => {
  if ((i + 1) % SIDE_LENGTH == 0) {
    return [];
  }
  const indexes = [];
  const lim = Math.floor(++i / SIDE_LENGTH) * SIDE_LENGTH + SIDE_LENGTH;

  while (i < lim) {
    indexes.push(i++);
  }
  return indexes;
};
const indexLeft = (i) => {
  if (i % SIDE_LENGTH == 0) {
    return [];
  }
  const indexes = [];
  const lim = Math.floor(--i / SIDE_LENGTH) * SIDE_LENGTH;
  while (i >= lim) {
    indexes.push(i--);
  }
  return indexes;
};

const moveSingle = (gameBoard, start, destIndexes) => {
  let spot = -1;
  let combined = false;
  //console.log(start);
  destIndexes.every((i) => {
    //console.log(gameBoard[i]);
    if (gameBoard[i].value == 0) {
      // move to spot
      spot = i;
      return true;
    } else if (
      gameBoard[i].value == gameBoard[start].value &&
      gameBoard[i].state == 0
    ) {
      // combine
      gameBoard[i].value = gameBoard[i].value * 2;
      gameBoard[i].state = 1;
      gameBoard[start].value = 0;
      gameBoard[start].state = 0;
      combined = true;
      //console.log(i);
      return false;
    } else {
      return false;
    }
  });
  //console.log(spot);
  if (!combined && spot >= 0 && spot < SIDE_LENGTH ** 2) {
    gameBoard[spot].value = gameBoard[start].value;
    gameBoard[spot].state = 0;
    gameBoard[start].value = 0;
    gameBoard[start].state = 0;
    //console.log(spot);
    return true;
  }
  return combined;
};

const moveUp = (gameBoard) => {
  let validMove = false;
  // for each row
  for (let i = 1; i < SIDE_LENGTH; i++) {
    for (let j = 0; j < SIDE_LENGTH; j++) {
      let z = i * SIDE_LENGTH + j;
      if (gameBoard[z].value != 0) {
        if (moveSingle(gameBoard, z, indexAbove(z))) {
          validMove = true;
        }
      }
    }
  }
  gameBoard.forEach((ele) => (ele.state = 0));
  return validMove;
};
const moveDown = (gameBoard) => {
  let validMove = false;
  for (let i = SIDE_LENGTH - 2; i >= 0; i--) {
    for (let j = 0; j < SIDE_LENGTH; j++) {
      let z = i * SIDE_LENGTH + j;
      if (gameBoard[z].value != 0) {
        if (moveSingle(gameBoard, z, indexBelow(z))) {
          validMove = true;
        }
      }
    }
  }
  gameBoard.forEach((ele) => (ele.state = 0));
  return validMove;
};

const moveRight = (gameBoard) => {
  let validMove = false;
  for (let i = 0; i < SIDE_LENGTH; i++) {
    for (let j = SIDE_LENGTH - 2; j >= 0; j--) {
      let z = i * SIDE_LENGTH + j;
      if (gameBoard[z].value != 0) {
        if (moveSingle(gameBoard, z, indexRight(z))) {
          validMove = true;
        }
      }
    }
  }
  gameBoard.forEach((ele) => (ele.state = 0));
  return validMove;
};

const moveLeft = (gameBoard) => {
  let validMove = false;
  for (let i = 0; i < SIDE_LENGTH; i++) {
    for (let j = 1; j < SIDE_LENGTH; j++) {
      let z = i * SIDE_LENGTH + j;
      if (gameBoard[z].value != 0) {
        //console.log("--" + z + "--");
        if (moveSingle(gameBoard, z, indexLeft(z))) {
          validMove = true;
        }
      }
    }
  }
  gameBoard.forEach((ele) => (ele.state = 0));
  return validMove;
};

const checkGameOver = (gameBoard) => {
  const zeroes = gameBoard.filter((x) => x.value == 0);
  if (zeroes.length <= 0) {
    // check for valid moves
    // check rows
    for (let i = 0; i < SIDE_LENGTH; i++) {
      let prevCol = gameBoard[i * SIDE_LENGTH].value;
      let prevRow = gameBoard[i].value;
      for (let j = 1; j <= 3; j++) {
        let z = i * SIDE_LENGTH + j;
        let y = i + SIDE_LENGTH * j;
        if (prevCol == gameBoard[z].value) {
          return false;
        }
        if (prevRow == gameBoard[y].value) {
          return false;
        }
        prevCol = gameBoard[z].value;
        prevRow = gameBoard[y].value;
      }
    }
    return true;
  }
  return false;
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const runGame = async () => {
  console.log(
    "Use w,a,s or d to move. You lose when there are no more valid moves."
  );
  const board = createBoard(SIDE_LENGTH);
  dropPiece(board);
  dropPiece(board);
  printGameboard(board);
  for await (const line of rl) {
    let validMove = false;
    switch (line) {
      case "w":
        validMove = moveUp(board);
        break;
      case "s":
        validMove = moveDown(board);
        break;
      case "a":
        validMove = moveLeft(board);
        break;
      case "d":
        validMove = moveRight(board);
        break;
      default:
        break;
    }
    if (validMove) {
      dropPiece(board);
      printGameboard(board);
      if (checkGameOver(board)) {
        console.log("GAMEOVER");
        return;
      }
    }
  }
};

runGame();
