import { render } from "@testing-library/react";
import React from "react";

//components
import Piece from "../Piece/Piece";

class PiecesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.board = {
      0: { value: 0, state: 0 },
      1: { value: 0, state: 0 },
      2: { value: 0, state: 0 },
      3: { value: 0, state: 0 },
      4: { value: 0, state: 0 },
      5: { value: 0, state: 0 },
      6: { value: 0, state: 0 },
      7: { value: 0, state: 0 },
      8: { value: 0, state: 0 },
      9: { value: 0, state: 0 },
      10: { value: 0, state: 0 },
      11: { value: 0, state: 0 },
      12: { value: 0, state: 0 },
      13: { value: 0, state: 0 },
      14: { value: 0, state: 0 },
      15: { value: 0, state: 0 },
    };
  }
  // key inputs
  componentDidMount() {
    window.addEventListener("keydown", (event) => this.onDown(event));
  }

  onDown = (event) => {
    this.doMove(event.key);
  };

  doMove = (m) => {
    switch (m) {
      case "w":
        console.log("You swiped up!");
        break;
      case "s":
        console.log("You swiped Down!");
      case "a":
        console.log("You swiped Left!");
        break;
      case "d":
        console.log("You swiped Right!");
        break;
    }
  };

  render() {
    return (
      <div className="piece-container">
        <Piece />
      </div>
    );
  }
}

export default PiecesContainer;
