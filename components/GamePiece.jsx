import React, { useRef, useEffect } from "react";
import { Animated, Text, View, StyleSheet } from "react-native";

// constants
import squareColors from "../utils/colors";

const GamePiece = ({ squareSize, init, xDest, yDest }) => {
  const space = squareSize * 0.03;
  const tileSize = (squareSize - space * 5) / 4;
  const i = space + tileSize;
  // usemap to create gameboard
  //backgroundColor:
  //squareColors[piece.value == 0 ? 0 : Math.log2(piece.value)],
  const trans = useRef(
    new Animated.ValueXY({ x: init[0] * i, y: init[1] * i })
  ).current;

  useEffect(() => {
    Animated.timing(trans, {
      toValue: { x: xDest * i, y: trans.y },
      duration: 200,
    }).start();
    console.log(xDest);
  }, [xDest]);
  useEffect(() => {
    Animated.timing(trans, {
      toValue: { x: trans.x, y: yDest * i },
      duration: 200,
    }).start();
    console.log(yDest);
  }, [yDest]);

  const styles = StyleSheet.create({
    gameText: {
      justifyContent: "center",
      margin: "auto",
      padding: "auto",
      textAlign: "center",
      textAlignVertical: "center",
      fontWeight: "bold",
      fontSize: 50,
      color: "#776e65",
    },
  });
  return (
    <Animated.View
      style={{
        backgroundColor: "#eee1c9",
        margin: "auto",
        padding: "auto",
        width: tileSize,
        height: tileSize,
        borderRadius: 3,
        textAlign: "center",
        textAlignVertical: "center",
        transform: trans.getTranslateTransform(),
      }}
    >
      <Text style={styles.gameText}>2</Text>
    </Animated.View>
  );
};

export default GamePiece;
