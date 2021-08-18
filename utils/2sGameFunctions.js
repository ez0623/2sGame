const SIDE_LENGTH = 4;

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

module.exports = dropPiece;
