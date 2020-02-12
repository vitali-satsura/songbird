import React from 'react';

import './bird.scss';
import BirdImage from '../bird-image';
import Player from '../player';

const Bird = ({ bird }) => {
  return (
    <div className="bird">
      <BirdImage image={bird.image} />
      <div className="bird-name">
        <h3 className="name">{bird.name}</h3>
        <p className="name-latin">{bird.species}</p>
        <Player audio={bird.audio} />
      </div>
      <p className="bird-description">{bird.description}</p>
    </div>
  );
};

export default Bird;
