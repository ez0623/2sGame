import React from "react";
import { Fragment, Text, View } from "react-native";

const Cat = ({ gameState, gameAreaStyle, gamePieceStyle }) => {
  // usemap to create gameboard
  return (
    <View style={gameAreaStyle}>
      <View style={{ ...gamePieceStyle, backgroundColor: "orange" }}></View>

      <View style={{ ...gamePieceStyle, backgroundColor: "red" }}>
        <Text>aa</Text>
      </View>
      <View style={{ ...gamePieceStyle, backgroundColor: "orange" }}></View>
      <View style={{ ...gamePieceStyle, backgroundColor: "red" }}></View>
      <View style={{ ...gamePieceStyle, backgroundColor: "orange" }}></View>
      <View style={{ ...gamePieceStyle, backgroundColor: "red" }}></View>
      <View style={{ ...gamePieceStyle, backgroundColor: "orange" }}></View>
      <View style={{ ...gamePieceStyle, backgroundColor: "red" }}></View>
      <View style={{ ...gamePieceStyle, backgroundColor: "orange" }}></View>
      <View style={{ ...gamePieceStyle, backgroundColor: "red" }}></View>
      <View style={{ ...gamePieceStyle, backgroundColor: "orange" }}></View>
      <View style={{ ...gamePieceStyle, backgroundColor: "red" }}></View>
      <View style={{ ...gamePieceStyle, backgroundColor: "orange" }}></View>
      <View style={{ ...gamePieceStyle, backgroundColor: "red" }}></View>
      <View style={{ ...gamePieceStyle, backgroundColor: "orange" }}></View>
      <View style={{ ...gamePieceStyle, backgroundColor: "red" }}></View>
    </View>
  );
};

export default Cat;
