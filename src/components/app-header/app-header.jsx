import React from 'react';

import Logo from '../logo';
import Score from '../score';
import IndicationList from '../indication-list';
import './app-header.scss';

const AppHeader = ({ score, types }) => (
  <header className="header">
    <div className="header-wrapper">
      <Logo />
      <Score score={score} />
    </div>
    <IndicationList types={types} />
  </header>
);

export default AppHeader;
