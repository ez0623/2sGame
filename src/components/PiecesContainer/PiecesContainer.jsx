import React, { Fragment, useState, useEffect } from "react";

//components
import Piece from "../Piece/Piece";
import GameOver from "../GameOver/GameOver";

const SIDE_LENGTH = 4;

const PiecesContainer = () => {
  //const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(false);
  const [board, setBoard] = useState([
    { value: 0, state: 0, pos: 0 },
    { value: 0, state: 0, pos: 1 },
    { value: 0, state: 0, pos: 2 },
    { value: 0, state: 0, pos: 3 },
    { value: 0, state: 0, pos: 4 },
    { value: 0, state: 0, pos: 5 },
    { value: 0, state: 0, pos: 6 },
    { value: 0, state: 0, pos: 7 },
    { value: 0, state: 0, pos: 8 },
    { value: 0, state: 0, pos: 9 },
    { value: 0, state: 0, pos: 10 },
    { value: 0, state: 0, pos: 11 },
    { value: 0, state: 0, pos: 12 },
    { value: 0, state: 0, pos: 13 },
    { value: 0, state: 0, pos: 14 },
    { value: 0, state: 0, pos: 15 },
  ]);
  useEffect(() => {
    window.addEventListener(
      "keydown",
      (event) => {
        if (!event.repeat) {
          doMove(event);
        }
      },
      false
    );
    dropPiece();
    dropPiece();
  }, []);

  const onRestart = () => {
    const newBoard = [...board];
    for (let i = 0; i < 16; i++) {
      newBoard[i].value = 0;
      newBoard[i].state = 0;
    }
    dropPiece();
    dropPiece();
    setGameOver(false);
  };

  const doMove = (event) => {
    let validMove = false;
    if (!loading) {
      const newBoard = [...board];
      newBoard.forEach((ele) => (ele.state = 0));
      setBoard(newBoard);

      setLoading(true);
      switch (event.key) {
        case "w":
          //console.log("You swiped up!");
          validMove = moveUp();
          break;
        case "s":
          //console.log("You swiped Down!");
          validMove = moveDown();
          break;
        case "a":
          //console.log("You swiped Left!");
          validMove = moveLeft();
          break;
        case "d":
          //console.log("You swiped Right!");
          validMove = moveRight();
          break;
        default:
      }
      if (validMove) {
        dropPiece();
        if (checkGameOver()) {
          setGameOver(true);
          return;
        }
      }
      setLoading(false);
    }
  };

  //game logic
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
    if ((i + 1) % SIDE_LENGTH === 0) {
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
    if (i % SIDE_LENGTH === 0) {
      return [];
    }
    const indexes = [];
    const lim = Math.floor(--i / SIDE_LENGTH) * SIDE_LENGTH;
    while (i >= lim) {
      indexes.push(i--);
    }
    return indexes;
  };

  const dropPiece = () => {
    const spaces = [];
    for (let i = 0; i < 16; i++) {
      if (board[i].value === 0) {
        spaces.push(i);
      }
    }
    //update board
    if (spaces.length > 0) {
      const newBoard = [...board];
      const r = spaces[Math.floor(Math.random() * spaces.length)];
      newBoard[r].value = Math.random() < 0.15 ? 4 : 2;
      newBoard[r].state = 2;

      setBoard(newBoard);
    }
  };
  const moveSingle = (start, destIndexes) => {
    let spot = -1;
    let combined = false;
    destIndexes.every((i) => {
      if (board[i].value === 0) {
        // move to spot
        spot = i;
        return true;
      } else if (
        board[i].value === board[start].value &&
        board[i].state === 0
      ) {
        // combine
        const newBoard = [...board];
        newBoard[i].value = newBoard[i].value * 2;
        newBoard[i].state = 1;
        newBoard[start].value = 0;
        newBoard[start].state = 0;
        setBoard(newBoard);
        combined = true;
        return false;
      } else {
        return false;
      }
    });
    if (!combined && spot >= 0 && spot < SIDE_LENGTH ** 2) {
      const newBoard = [...board];
      newBoard[spot].value = newBoard[start].value;
      newBoard[spot].state = 0;
      newBoard[start].value = 0;
      newBoard[start].state = 0;
      setBoard(newBoard);
      return true;
    }
    return combined;
  };

  const moveUp = () => {
    let validMove = false;
    // for each row
    for (let i = 1; i < SIDE_LENGTH; i++) {
      for (let j = 0; j < SIDE_LENGTH; j++) {
        let z = i * SIDE_LENGTH + j;
        if (board[z].value !== 0) {
          if (moveSingle(z, indexAbove(z))) {
            validMove = true;
          }
        }
      }
    }
    return validMove;
  };

  const moveDown = () => {
    let validMove = false;
    for (let i = SIDE_LENGTH - 2; i >= 0; i--) {
      for (let j = 0; j < SIDE_LENGTH; j++) {
        let z = i * SIDE_LENGTH + j;
        if (board[z].value !== 0) {
          if (moveSingle(z, indexBelow(z))) {
            validMove = true;
          }
        }
      }
    }
    const newBoard = [...board];
  };

  const moveRight = () => {
    let validMove = false;
    for (let i = 0; i < SIDE_LENGTH; i++) {
      for (let j = SIDE_LENGTH - 2; j >= 0; j--) {
        let z = i * SIDE_LENGTH + j;
        if (board[z].value !== 0) {
          if (moveSingle(z, indexRight(z))) {
            validMove = true;
          }
        }
      }
    }
    return validMove;
  };
  const moveLeft = () => {
    let validMove = false;
    for (let i = 0; i < SIDE_LENGTH; i++) {
      for (let j = 1; j < SIDE_LENGTH; j++) {
        let z = i * SIDE_LENGTH + j;
        if (board[z].value !== 0) {
          //console.log("--" + z + "--");
          if (moveSingle(z, indexLeft(z))) {
            validMove = true;
          }
        }
      }
    }
    return validMove;
  };
  const checkGameOver = () => {
    const zeroes = board.filter((x) => x.value === 0);
    if (zeroes.length <= 0) {
      // check for valid moves
      // check rows
      for (let i = 0; i < SIDE_LENGTH; i++) {
        let prevCol = board[i * SIDE_LENGTH].value;
        let prevRow = board[i].value;
        for (let j = 1; j <= 3; j++) {
          let z = i * SIDE_LENGTH + j;
          let y = i + SIDE_LENGTH * j;
          if (prevCol === board[z].value) {
            return false;
          }
          if (prevRow === board[y].value) {
            return false;
          }
          prevCol = board[z].value;
          prevRow = board[y].value;
        }
      }
      return true;
    }
    return false;
  };
  //render
  return (
    <Fragment>
      <div className="piece-container">
        {board.map((e) => (
          <Piece key={e.pos} piece={e} />
        ))}
      </div>
      {gameOver && <GameOver onRestart={onRestart} />}
    </Fragment>
  );
};

export default PiecesContainer;
