import React from 'react';

import GameOver from 'components/gameOver';
import greenMonster from 'images/green.png';

const Lose = ({ changeTry, setScore, score }) => (
  <div>
    {score === 0
      ? <GameOver />
      : <div className="content">
          <h4>От халепа, це не правильно.</h4>
          <div>-20 балів!</div>
          <img alt="green monster" src={greenMonster} className="green-monster" />
          <button
            className="green-button"
            onClick={e => {
              e.preventDefault();
              setScore(score - 20);
              changeTry(0);
            }}
          >
            Спробувати ще!
          </button>
        </div>
    }
  </div>
);

export default Lose;
