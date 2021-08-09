import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// components
import GameArea from "./components/GameArea";

const squareSize = 400;

export default function App() {
  const gameState = [
    { value: 2, state: 0 },
    { value: 1, state: 0 },
    { value: 2, state: 0 },
    { value: 3, state: 0 },
    { value: 2, state: 0 },
    { value: 2, state: 0 },
    { value: 2, state: 0 },
    { value: 2, state: 0 },
    { value: 2, state: 0 },
    { value: 2, state: 0 },
    { value: 2, state: 0 },
    { value: 2, state: 0 },
    { value: 2, state: 0 },
    { value: 2, state: 0 },
    { value: 2, state: 0 },
    { value: 2, state: 0 },
    { value: 2, state: 0 },
  ];
  return (
    <View style={styles.container}>
      <GameArea
        gameState={gameState}
        gameAreaStyle={styles.gameArea}
        gamePieceStyle={styles.gamePiece}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  gameArea: {
    backgroundColor: "yellow",
    display: "flex",
    width: squareSize,
    height: squareSize,
    minWidth: squareSize,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "space-around",
    padding: 0,
    margin: 0,
    borderRadius: squareSize * 0.03,
  },
  gamePiece: {
    margin: "auto",
    padding: "auto",
    width: (squareSize * 0.9) / 4,
    height: (squareSize * 0.9) / 4,
    borderRadius: ((squareSize * 0.9) / 4) * 0.1,
    textAlign: "center",
  },
});
