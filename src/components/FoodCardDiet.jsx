/* eslint-disable react/prop-types */
import React from 'react';
import FoodPortions from '../functions/FoodPortions';

import './styles/FoodCardDiet.css';


// eslint-disable-next-line object-curly-newline
const FoodCardDiet = ({ name, value, id, onChange, portionsArray }) => {
  const portions = FoodPortions(portionsArray);
  return (
    <div className="FoodCardDiet">
      <h3 className="FoodCardDiet__name">{name}</h3>
      <input type="number" name={`${id}`} className="amountFood" value={value} onChange={(e) => onChange(e)} />
      <div className="FoodCardDiet__portions__container">
        {portions.map((item) => (
          <label className="FoodCardDiet__portion" htmlFor={`${id}-${item.id}`}>
            <input type="radio" name={`${id}`} onChange={(e) => onChange(e)} value={item.weight} id={`${id}-${item.id}`} />
            {item.amount}
            {' '}
            {item.portion}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FoodCardDiet;
