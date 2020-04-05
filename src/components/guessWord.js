import React, { useState, useEffect } from 'react';
import data from '../data.json';

// components
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import ukrainian from './keyboardLayout';
import NextRound from 'pages/nextRound';
import Win from 'components/win';
import blueMonster from 'images/blue.png';

function getRandomWord(data, guessedWord) {
  const dataLength = data.length && data.length - 1;
  if (data.length === guessedWord.length) return null; 
  if (guessedWord.length === 0) {
    return data[Math.floor(Math.random() * Math.floor(dataLength))];
  } else {
    return data.filter(word => !guessedWord.includes(word.name))[Math.floor(Math.random() * Math.floor(dataLength))];
  }
}

const GuessWord = ({ tryCount, changeTry, incorrectChars, setIncorrectChars, correctChars, setCorrectChars, score, setScore}) => {
  const [wordData, setWordData] = useState(null);
  const [word, setword] = useState([]);
  const [wordLength, setWorldLength] = useState(null);
  const [totalWin, setTotalWin] = useState(false);

  // set all correct word for non repeated
  const [guessedWord, setGuessedWords] = useState([]);

  const correct = new Set(correctChars);
  const incorrect = new Set(incorrectChars);

  
  useEffect(() => {
    if(tryCount === 0){ 
      const randomWordData = getRandomWord(data, guessedWord);
      if (randomWordData) {
        const wordSet = new Set(randomWordData.name);
        setWorldLength(Array.from(wordSet).length);
        setWordData(randomWordData);
        setword(randomWordData.name.split(''))
        setCorrectChars && setCorrectChars([]);
        setIncorrectChars && setIncorrectChars([]);
      } else {
        setTotalWin(true);
      }
    }
  }, [setWordData, tryCount, guessedWord, setCorrectChars, setIncorrectChars]);

  const onKeyPress = (button) => {
    if(word.includes(button.toLowerCase())) {
      correct.add(button.toLowerCase());
      setCorrectChars && setCorrectChars(Array.from(correct))
    } else {
      changeTry(tryCount+1);
      incorrect.add(button.toLowerCase());
      setIncorrectChars && setIncorrectChars(Array.from(incorrect))
    }
  }
 
  return (
    totalWin
    ? <Win score={ score } />
    : word.length
    ? (
      <div className="content">
        <div className="score">Рахунок: {score}</div>
          <h2 className="title">Опис:</h2>
          
          <img alt="monster" src={blueMonster} className="blue-monster" />
          <span>{wordData && wordData.value}</span>
        <div className="game-box">
          <div className="words-box">
            {word.map((el, index) => {
              return (
              <div key={index} className="word">
                {correctChars.length && correctChars.includes(el) ? el : null}
              </div> 
              )}
            )}
          </div>
          {correctChars.length === wordLength 
            && <NextRound
            changeTry={changeTry}
            openModal
            setScore={ setScore }
            score={ score }
            setGuessedWords={setGuessedWords}
            guessedWord={guessedWord}
            word={ wordData.name }
            />
          }
          <Keyboard
            style={{ marginTop: "38px" }}
            onKeyPress={button => onKeyPress(button)}
            layout={ukrainian}
            buttonTheme={[
              {
                class: "choosen-incorrect",
                buttons: incorrectChars && incorrectChars.join(' ')
              },
              {
                class: "choosen-correct",
                buttons: correctChars && correctChars.join(' ')
              }
            ]}
            />
        </div>
      </div>
    )
    : <div className="content">Завантажую ...</div>
  )
}


export default GuessWord;
