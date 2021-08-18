import React, { Fragment } from "react";

import "./Piece.css";

const Piece = ({ piece }) => {
  return (
    <Fragment>
      {piece.value > 0 && (
        <div
          className={`piece piece-state-${piece.state} tile-${piece.value} loc-${piece.pos}`}
        >
          <div className={"piece-number"}>{piece.value}</div>
        </div>
      )}
    </Fragment>
  );
};

export default Piece;
