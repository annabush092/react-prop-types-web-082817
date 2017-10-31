// Code Goes Here
import React from 'react';
import ReactDOM from 'react-dom';
import Order from './Order';

ReactDOM.render(
  < Order cone={false} size="medium" scoops={["chocolate", "vanilla"]} orderInfo={{customerName: "Anna", orderedAt: 577}} />,
  document.getElementById('root'))
