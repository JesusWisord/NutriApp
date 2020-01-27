/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';
import FoodTable from '../components/FoodTable';
import traerInfo from '../actions/traerIdFoodInfo';

import icon from '../assets/SVG/circle-left.svg';

import './Styles/FoodPage.css';

const FoodPage = (props) => {
  const handleClick = () => {
    props.history.goBack();
  };

  if (Object.entries(props.foodInfo).length === 0) {
    props.traerInfo(props.match.params.id);
  }
  if (props.isLoading) {
    return (<Spinner />);
  }
  return (
    <>
      <div className="backButton">
        <img src={icon} alt="" onClick={handleClick} />
      </div>
      <FoodTable data={props.foodInfo} />
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  foodInfo: state.foodInfo,
});

const mapDispatchToProps = {
  traerInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodPage);
