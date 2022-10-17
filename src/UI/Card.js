import React from 'react';

import './Card.css';

const Card = (props) => {                                  // 박스 동그랗게 하는 것
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>; 
};

export default Card;
