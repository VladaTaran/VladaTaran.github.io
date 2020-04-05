import React from 'react';
import greyMonster from 'images/grey.png';

const GameOver = () => (
  <div className="content">
    <h2 className="game-over">Та всьо!</h2>
    <span>Треба піти ще повчитись.</span><br />
    <img alt="monster" src={greyMonster} className="grey-monster" />
  </div>
);

export default GameOver;
