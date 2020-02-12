import React from 'react';
import './score.scss';

const Score = ({ score }) => (
  <div className="header-score">{`Score: ${score}`}</div>
);

export default Score;
