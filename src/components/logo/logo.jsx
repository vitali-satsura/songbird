import React from 'react';

import img from './logo.svg';
import './logo.scss';

const Logo = () => (
  <div className="logo-wrapper">
    <h1 className="logo">
      <img src={img} alt="logo" className="logo-image" />
    </h1>
  </div>
);

export default Logo;
