import React from 'react';

import './end-game.scss';

const EndGame = ({ score, isVisible, onStartGame }) => {
  let classNames = 'end-game';
  if (isVisible) {
    classNames += ' visible';
  }
  return (
    <div className={classNames}>
      <h2 className="end-game-congratulation">Поздравляем!</h2>
      <p className="end-game-score">Вы прошли викторину и набрали {score} из 30 возможных баллов</p>
      <button type="button" className="start-game" onClick={onStartGame}>Попробовать еще раз</button>
    </div>
  );
};

export default EndGame;
