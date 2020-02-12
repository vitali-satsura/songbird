import React from 'react';

import './bird-image.scss';

const BirdImage = ({ image }) => (
  <div className="bird-image-wrapper">
    <img src={image} alt="bird" className="bird-image" />
  </div>
);

export default BirdImage;
