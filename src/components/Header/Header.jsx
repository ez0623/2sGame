// redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./Header.css";

const Header = ({ score, best }) => {
  return (
    <div className="header-container">
      <div className="title-container">
        <div className="title">2048</div>
      </div>

      <div className="score-container">
        <div className="score">
          <div className="score-label">SCORE</div>
          <div className="score-number">{score}</div>
        </div>
        <div className="score">
          <div className="score-label">BEST</div>
          <div className="score-number">{best}</div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  score: PropTypes.number.isRequired,
  best: PropTypes.number.isRequired,
};
const mapStateToProps = (state) => ({
  score: state.score.score,
  best: state.score.best,
});

export default connect(mapStateToProps, {})(Header);
