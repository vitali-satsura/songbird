import React from 'react';

import './birds-list-item.scss';

const BirdsListItem = ({ name, onRefresh, isError, isRightAnswer }) => {
  let classNames = 'birds-list-item';

  if (isRightAnswer) {
    classNames += ' ok';
  }

  if (isError) {
    classNames += ' error';
  }

  return (
    <li
      className={classNames}
      onClick={onRefresh}
    >
      <span className="birds-list-item-name">
        {name}
      </span>
    </li>
  );
};
export default BirdsListItem;
