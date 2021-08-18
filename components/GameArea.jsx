import React, { Fragment, useEffect } from "react";
import { View } from "react-native";

//components
import PiecesContainer from "./PiecesContainer";

const squareSize = 400;

const GameArea = () => {
  const space = squareSize * 0.03;
  const tileSize = (squareSize - space * 5) / 4;
  const row = [];
  for (let i = 0; i < 4; i++) {
    row.push(
      <View
        key={i}
        style={{
          width: tileSize,
          height: tileSize,
          marginRight: i == 3 ? 0 : space,
          float: "left",
          borderRadius: 3,
          background: "rgba(238, 228, 218, 0.35)",
        }}
      />
    );
  }
  const allRows = [];
  for (let i = 0; i < 4; i++) {
    allRows.push(
      <View
        key={i}
        style={{
          display: "inline",
          height: tileSize,
          marginBottom: i == 3 ? 0 : space,
        }}
      >
        {row}
      </View>
    );
  }
  return (
    <Fragment>
      <View
        style={{
          backgroundColor: "#bbada0",
          width: squareSize,
          height: squareSize,
          padding: space,
          margin: "0 auto",
          marginTop: 50,
          borderRadius: 6,
          position: "relative",
          zIndex: 0,
        }}
      >
        {allRows}
        <PiecesContainer squareSize={squareSize} />
      </View>
    </Fragment>
  );
};

export default GameArea;
