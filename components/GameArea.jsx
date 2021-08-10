import React, { Fragment, useEffect } from "react";
import { View } from "react-native";
// redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startGame } from "../redux/actions/game";
//components
import PiecesContainer from "./PiecesContainer";

const squareSize = 350;

const GameArea = ({ startGame }) => {
  // usemap to create gameboard
  useEffect(() => {
    startGame();
  }, []);

  return (
    <Fragment>
      <View
        style={{
          backgroundColor: "#B8C6DB",
          width: squareSize,
          height: squareSize,
          padding: 0,
          margin: 0,
          borderRadius: squareSize * 0.03,
        }}
      >
        <PiecesContainer squareSize={squareSize} />
      </View>
    </Fragment>
  );
};

GameArea.propTypes = {
  startGame: PropTypes.func.isRequired,
};

export default connect(null, { startGame })(GameArea);
