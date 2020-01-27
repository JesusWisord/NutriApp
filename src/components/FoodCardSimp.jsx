/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setItem, unsetItem } from '../actions/foodCardActions';

import './styles/FoodCardSimp.css';
import circleRight from '../assets/SVG/circle-right.svg';
import plusIcon from '../assets/SVG/plus.svg';
import check from '../assets/SVG/checkmark.svg';

const FoodCardSimp = (props) => {
  const { name, id, selectedItems } = props;
  const handleClick = () => {
    if (!selected) {
      props.setItem({ id, amount: 100 });
    } else {
      props.unsetItem(id);
    }
  };
  let selectedArray = [];
  if (selectedItems.length > 0) {
    selectedArray = selectedItems.filter((item) => item.id === id);
    if (!(selectedArray.length > 0)) {
      selectedArray = [{ id: 0 }];
    }
  } else {
    selectedArray = [{ id: 0 }];
  }
  const selected = selectedArray[0].id === id;
  return (
    <div className="FoodCardSimp">
      <h2>{name}</h2>
      <div className="icons">
        { selected
          ? (
            <img
              src={check}
              alt="checkIcon"
              className="checkIcon"
              onClick={() => handleClick()}
            />
          )
          : (
            <img
              src={plusIcon}
              alt="plusIcon"
              className="plusIcon"
              onClick={() => handleClick()}
            />
          )}
        <Link to={`/Search/${id}`}>
          <img src={circleRight} alt="" />
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedItems: state.selectedItems,
});

const mapDispatchToProps = {
  setItem,
  unsetItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodCardSimp);
