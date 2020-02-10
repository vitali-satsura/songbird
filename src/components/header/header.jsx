import React from 'react';

import Logo from '../logo';
import Score from '../score';
import './header.scss';

const Header = () => (
  <header className="header">
    <div className="header-wrapper">
      <Logo />
      <Score />
    </div>
  </header>
);

export default Header;
