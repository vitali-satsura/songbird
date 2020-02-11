import React from 'react';

import AppHeader from '../app-header';
import IndicationList from '../indication-list';
import './app.scss';

const App = () => {
  const types = [
    { id: 1, type: 'Разминка', active: true },
    { id: 2, type: 'Воробьиные', active: false },
    { id: 3, type: 'Лесные птицы', active: false },
    { id: 4, type: 'Певчие птицы', active: false },
    { id: 5, type: 'Хищные птицы', active: false },
    { id: 6, type: 'Морские птицы', active: false },
  ];

  return (
    <div className="app">
      <AppHeader />
      <IndicationList types={types} />
    </div>
  );
};


export default App;
