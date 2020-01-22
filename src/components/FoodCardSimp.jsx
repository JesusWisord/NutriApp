/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import './styles/FoodCardSimp.css';
import circleRight from '../assets/SVG/circle-right.svg';
import plusIcon from '../assets/SVG/plus.svg';
import check from '../assets/SVG/checkmark.svg';

const FoodCardSimp = ({ name, id }) => {
  return (
    <div className="FoodCardSimp">
      <h2>{name}</h2>
      <div className="icons">
        <img src={plusIcon} alt="" className="plusIcon" />
        <Link to={`/Search/${id}`}>
          <img src={circleRight} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default FoodCardSimp;
