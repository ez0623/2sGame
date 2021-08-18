import React from "react";

//components
import PiecesContainer from "../PiecesContainer/PiecesContainer";

import "./GameContainer.css";

const GameContainer = () => {
  const row = [];
  for (let i = 0; i < 4; i++) {
    row.push(<div className="row-item" key={i} />);
  }
  const allRows = [];
  for (let i = 0; i < 4; i++) {
    allRows.push(
      <div className="row" key={i}>
        {row}
      </div>
    );
  }

  return (
    <div className="game-container">
      <div className="grid">{allRows}</div>
      <PiecesContainer />
    </div>
  );
};

export default GameContainer;
