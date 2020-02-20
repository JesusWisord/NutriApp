/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import FoodCardSimp from './FoodCardSimp';
import Spinner from './Spinner';

import './styles/FoodCardContainer.css';

import { loading } from '../actions/foodCardActions';

const FoodCardContainer = (props) => {
  if (props.isLoading) {
    return (
      <Spinner />
    );
  }
  if (props.foodItems.length > 0) {
    const foodItems = Object.values(props.foodItems);
    return (
      <ul className="FoodList">
        {foodItems.map((item) => (
          <FoodCardSimp
            name={item.description}
            id={item.fdcId}
            type={item.dataType}
          />
        ))}
      </ul>
    );
  }
  return <p>  </p>;
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  foodItems: state.foodItems,
});

const mapDispatchToProps = {
  loading,
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodCardContainer);
