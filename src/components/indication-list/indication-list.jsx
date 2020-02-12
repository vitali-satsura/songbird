import React from 'react';

import IndicationListItem from '../indication-list-item';
import './indication-list.scss';

const IndicationList = ({ types }) => {
  const elements = types.map((item) => {
    const { id, type, active } = item;
    let classNames = 'indication-list-item';
    if (active) {
      classNames += ' active';
    }
    return (
      <li key={id} className={classNames}>
        <IndicationListItem type={type} />
      </li>
    );
  });

  return (
    <section className="indication">
      <ul className="indication-list">
        {elements}
      </ul>
    </section>
  );
};

export default IndicationList;
