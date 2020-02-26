import React from 'react';
import { connect } from 'react-redux';

import { goBack } from '../actions/foodCardActions';

import getDial from '../functions/DialGet';

import SearchBar from '../components/SearchBar';
import SearchButton from '../components/SearchButton';
import FoodCardContainer from '../components/FoodCardContainer';
import Spinner from '../components/Spinner';

// import getData from '../functions/getData';

const DialSearchPage = (props) => {
  if (Object.entries(props.foodInfo).length > 0) {
    props.goBack();
  }

  const data = getDial()
    .then((d) => {
      console.log(d);
      return JSON.parse(d);
    });

  if (Object.keys(data).length > 0) {
    return (
      <>
        <SearchBar />
        <SearchButton />
        <FoodCardContainer />
      </>
    );
  }
  return (
    <Spinner />
  );
};

const mapStateToProps = (state) => ({
  foodInfo: state.foodInfo,
});

const mapDispatchToProps = {
  goBack,
};

export default connect(mapStateToProps, mapDispatchToProps)(DialSearchPage);
