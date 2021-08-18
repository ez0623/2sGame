import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
// components
import GameArea from "./components/GameArea";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GameArea />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#faf8ef",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "50px",
    color: "#776e65",
  },
});
