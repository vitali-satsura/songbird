import React from 'react';

import BirdImage from '../bird-image';
import Player from '../player';
import './question.scss';

const Question = () => {
  return (
    <section className="question">
      <BirdImage />
      <div className="question-player-wrapper">
        <h3 className="question-bird-name">******</h3>
        <Player />
      </div>
    </section>
  );
};

export default Question;
