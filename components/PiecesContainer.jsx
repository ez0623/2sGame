import React, { useEffect } from "react";
// redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { moveA } from "../redux/actions/game";
//components
import GamePiece from "./GamePiece";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;

const PiecesContainer = ({ running, moveA, gameBoard, squareSize }) => {
  useEffect(() => {
    window.addEventListener("keydown", (event) => onDown(event));
  }, []);

  const onDown = (event) => {
    doMove(event.key);
  };
  const onSwipe = (gestureName, gestureState) => {
    doMove(gestureName);
  };
  const doMove = (m) => {
    if (running) {
      switch (m) {
        case SWIPE_UP:
        case "w":
          console.log(gameBoard);
          moveA(gameBoard);
          console.log("You swiped up!");
          break;
        case SWIPE_DOWN:
        case "s":
          console.log("You swiped Down!");
          break;
        case SWIPE_LEFT:
        case "a":
          console.log("You swiped Left!");
          break;
        case SWIPE_RIGHT:
        case "d":
          console.log("You swiped Right!");
          break;
      }
    } else {
      console.log("game not started");
    }
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  // usemap to create gameboard
  return (
    <GestureRecognizer
      GestureRecognizer
      onSwipe={(direction, state) => onSwipe(direction, state)}
      config={config}
      style={{
        width: squareSize,
        height: squareSize,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "space-around",
        padding: 0,
        margin: 0,
      }}
    >
      {gameBoard.map((piece, i) => (
        <GamePiece key={i} piece={piece} squareSize={squareSize} />
      ))}
    </GestureRecognizer>
  );
};

PiecesContainer.propTypes = {
  gameBoard: PropTypes.array.isRequired,
  moveA: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  gameBoard: state.game.gameBoard,
  running: state.game.running,
});

export default connect(mapStateToProps, { moveA })(PiecesContainer);
