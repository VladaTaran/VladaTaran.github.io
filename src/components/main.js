import React, { useState, useEffect } from 'react';

import Lose from 'pages/lose';
import GuessWord from 'components/guessWord';


const Main = () => {
  const [tryCount, changeTry] = useState(0);

  const [correctChars, setCorrectChars] = useState([]);
  const [incorrectChars, setIncorrectChars] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let newScore = Number(window.localStorage.getItem('score'));
    setScore(newScore)
  }, [setScore]);


  return (
    <div className="container-main device">
    {(tryCount > 3 || score < 0)
    ? 
      <Lose changeTry={changeTry} setScore={setScore} score={score} />
    : 
      <GuessWord
        incorrectChars={incorrectChars}
        setIncorrectChars={setIncorrectChars}
        setCorrectChars={setCorrectChars}
        correctChars={correctChars}
        score={score}
        tryCount={tryCount}
        changeTry={changeTry}
        setScore={setScore}
      />
      }
    </div>
 
  ) 
};

export default Main;
