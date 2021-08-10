import React from "react";
import { Text, View, StyleSheet } from "react-native";

// constants
import squareColors from "../utils/colors";

const GamePiece = ({ piece, squareSize }) => {
  // usemap to create gameboard
  return (
    <View
      style={{
        margin: "auto",
        padding: "auto",
        width: (squareSize * 0.9) / 4,
        height: (squareSize * 0.9) / 4,
        borderRadius: ((squareSize * 0.9) / 4) * 0.1,
        backgroundColor:
          squareColors[piece.value == 0 ? 0 : Math.log2(piece.value)],
        textAlign: "center",
        textAlignVertical: "center",
      }}
    >
      <View style={styles.gameText}>
        <Text style={styles.text}>{piece.value > 0 ? piece.value : " "}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameText: {
    justifyContent: "center",
    margin: "auto",
    padding: "auto",
    textAlign: "center",
    textAlignVertical: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: 500,
    color: "white",
  },
});

export default GamePiece;
