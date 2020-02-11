import React from 'react';

import './indication-list-item.scss';

const IndicationListItem = ({ type }) => (
  <span className="indication-list-item-type">
    {type}
  </span>
);

export default IndicationListItem;
