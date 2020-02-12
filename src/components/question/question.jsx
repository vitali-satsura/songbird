import React from 'react';

import BirdImage from '../bird-image';
import Player from '../player';
import './question.scss';

const Question = ({ image }) => {
  return (
    <section className="question">
      <BirdImage image={image} />
      <div className="question-player-wrapper">
        <h3 className="question-bird-name">******</h3>
        <Player />
      </div>
    </section>
  );
};

export default Question;
