import React from 'react';

import BirdImage from '../bird-image';
import Player from '../player';
import './question.scss';

const Question = ({ image, audio, name }) => {
  return (
    <section className="question">
      <BirdImage image={image} />
      <div className="question-player-wrapper">
        <h3 className="question-bird-name">{name}</h3>
        <Player audio={audio} />
      </div>
    </section>
  );
};

export default Question;
