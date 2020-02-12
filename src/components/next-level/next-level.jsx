import React from 'react';

import './next-level.scss';

const NextLevel = ({ isActive, onStartNextLevel }) => {
  let classNames = 'next-level';
  if (isActive) {
    classNames += ' active';
  }
  return (
    <button
      type="button"
      className={classNames}
      onClick={onStartNextLevel}
    >Next Level</button>
  );
};

export default NextLevel;
