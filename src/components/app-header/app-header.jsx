import React from 'react';

import Logo from '../logo';
import Score from '../score';
import './app-header.scss';

const AppHeader = () => (
  <header className="header">
    <div className="header-wrapper">
      <Logo />
      <Score />
    </div>
  </header>
);

export default AppHeader;
