import React, { useState, useEffect } from "react";
import { View } from "react-native";
//components
import GamePiece from "./GamePiece";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;

const PiecesContainer = ({ squareSize }) => {
  const [xC, setX] = useState(2);
  const [yC, setY] = useState(2);

  useEffect(() => {
    window.addEventListener("keydown", (event) => onDown(event));
  }, []);

  const onDown = (event) => {
    doMove(event.key);
  };
  const onSwipe = (gestureName) => {
    doMove(gestureName);
  };
  const doMove = (m) => {
    switch (m) {
      case SWIPE_UP:
      case "w":
        console.log("You swiped up!");
        setY(yC - 1);
        break;
      case SWIPE_DOWN:
      case "s":
        console.log("You swiped Down!");
        setY(yC + 1);
        break;
      case SWIPE_LEFT:
      case "a":
        console.log("You swiped Left!");
        setX(xC - 1);
        break;
      case SWIPE_RIGHT:
      case "d":
        console.log("You swiped Right!");
        setX(xC + 1);
        break;
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
      onSwipe={(direction, state) => onSwipe(direction)}
      config={config}
      style={{
        display: "inline",
        width: squareSize * 0.94,
        height: squareSize * 0.94,
        zIndex: 1,
        position: "absolute",
      }}
    >
      <View
        style={{
          display: "inline",
          position: "absolute",
        }}
      >
        <GamePiece
          squareSize={squareSize}
          init={[0, 0]}
          xDest={xC}
          yDest={yC}
        />
      </View>
    </GestureRecognizer>
  );
};

export default PiecesContainer;
