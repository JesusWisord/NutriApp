/* eslint-disable react/prop-types */
import React from 'react';

import './styles/FoodCardDiet.css';

const FoodCardDiet = ({ name, amount }) => {
  return (
    <div className="FoodCardDiet">
      <h3>{name}</h3>
      <input type="text" name="amount" className="amountFood" placeholder={amount} />
    </div>
  );
};

export default FoodCardDiet;
