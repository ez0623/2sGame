import React from "react";

import "./GameOver.css";

const GameOver = ({ onRestart }) => {
  return (
    <div className="msg-container">
      <div className="game-over">Game over!</div>
      <a
        className="retry-btn"
        onClick={() => {
          onRestart();
        }}
      >
        Try Again
      </a>
    </div>
  );
};

export default GameOver;
