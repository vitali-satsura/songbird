import React from 'react';

import Logo from '../logo';
import Score from '../score';
import './app-header.scss';

const AppHeader = ({ score }) => (
  <header className="header">
    <div className="header-wrapper">
      <Logo />
      <Score score={score} />
    </div>
  </header>
);

export default AppHeader;
