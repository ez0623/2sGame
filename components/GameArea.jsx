import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
// redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startGame } from "../redux/actions/game";
//components
import GamePiece from "./GamePiece";

const squareSize = 350;

const GameArea = ({ startGame, gameBoard, gameAreaStyle, gamePieceStyle }) => {
  // usemap to create gameboard
  useEffect(() => {
    startGame();
  }, []);
  return (
    <View style={styles.gameArea}>
      {gameBoard.map((x) => (
        <GamePiece
          piece={x}
          squareSize={squareSize}
          pieceStyle={styles.gamePiece}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: "orange",
    textAlign: "center",
    textAlignVertical: "center",
  },
});

GameArea.propTypes = {
  startGame: PropTypes.func.isRequired,
  gameBoard: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  gameBoard: state.game.gameBoard,
});

export default connect(mapStateToProps, { startGame })(GameArea);
