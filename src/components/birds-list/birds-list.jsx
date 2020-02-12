import React from 'react';

import './birds-list.scss';
import BirdsListItem from '../birds-list-item';

const BirdsList = ({ birds, onRefresh, birdState }) => {
  const elements = birds.map((item) => {
    const { id, name } = item;
    const currentBirdState = birdState.filter((el) => el.id === id)[0];

    return (
      <BirdsListItem
        key={id}
        name={name}
        onRefresh={() => onRefresh(id)}
        isError={currentBirdState.error}
        isRightAnswer={currentBirdState.rightAnswer}
      />
    );
  });

  return (
    <div className="birds-choice">
      <ul className="birds-list">
        {elements}
      </ul>
    </div>
  );
};

export default BirdsList;
