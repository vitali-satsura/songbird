import React from 'react';

import './bird-image.scss';
import img from './bird.jpg';

const BirdImage = () => (
  <div className="bird-image-wrapper">
    <img src={img} alt="bird" className="bird-image" />
  </div>
);

export default BirdImage;
