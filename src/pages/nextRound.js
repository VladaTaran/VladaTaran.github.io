import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import darkBlueMonster from 'images/dark-blue.png';

const NextRound = ({ changeTry, openModal, setScore, score, word, setGuessedWords, guessedWord }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  useEffect(() => {
    openModal && setIsOpen(true)
  }, [openModal]);

  function closeModal(){
    setIsOpen(false);
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Next round"
      ariaHideApp={false}
    >
      <div className="next-round">
        <h2>Правильно!</h2>
        <span>Вам нараховано + 5 балів!</span>
        <p>Ваш рахунок: {score + 5}</p>
        <img alt="monster" src={darkBlueMonster} className="dark-blue-monster" />
        <button
          className="dark-blue-button"
          onClick={e => {
            e.preventDefault();
            setScore(score + 5);
            const guessed = guessedWord.concat(word);
            setGuessedWords(guessed)
            changeTry(0);
            closeModal();
          }}
        >
          Продовжити
        </button>
      </div>
    </Modal>
  )
};

export default NextRound;
