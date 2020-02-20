import React from 'react';
import { connect } from 'react-redux';

import { goBack } from '../actions/foodCardActions';

import SearchBar from '../components/SearchBar';
import SearchButton from '../components/SearchButton';
import FoodCardContainer from '../components/FoodCardContainer';

// import getData from '../functions/getData';

const SearchPage = (props) => {
  if (Object.entries(props.foodInfo).length > 0) {
    props.goBack();
  }

  return (
    <>
      <SearchBar />
      <SearchButton />
      <FoodCardContainer />
    </>
  );
};

const mapStateToProps = (state) => ({
  foodInfo: state.foodInfo,
});

const mapDispatchToProps = {
  goBack,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
