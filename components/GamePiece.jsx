import React from "react";
import { Text, View, StyleSheet } from "react-native";

const GamePiece = ({ piece, pieceStyle }) => {
  // usemap to create gameboard
  return (
    <View style={pieceStyle}>
      <View style={styles.gameText}>
        <Text style={styles.text}>{piece.value}</Text>
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
