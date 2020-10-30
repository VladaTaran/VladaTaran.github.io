import React from 'react';
import pinkMonster from 'images/pink.png';

const Win = ({score}) => (
  <div className="content">
    <h2 className="win-score">Вітаємо!</h2>
    <span>Пройти всю гру та виграти, вау!</span><br />
    <span>Далеко не кожному це під силу.</span>
    <div>Ваш рахунок: <span className="win-score">{score}</span></div>
    <img alt="monster" src={pinkMonster} className="pink-monster" />
  </div>
);

export default Win;
