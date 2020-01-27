/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import FoodCardDiet from '../components/FoodCardDiet';
import Spinner from '../components/Spinner';

import { unsetItem, resetReport } from '../actions/foodCardActions';
import reporteFinal from '../actions/traerInfoReporteFinal';

const DietPage = (props) => {
  const { selectedItems, finalReport } = props;
  if (!(selectedItems.length > 0)) {
    return (<p> ¡¡Error, no se ha seleccionado ningún alimento!! </p>);
  }

  if (!(finalReport.length > 0)) {
    const ids = selectedItems.map((item) => item.id);
    props.reporteFinal(ids);
    return (<Spinner />);
  }

  if (finalReport.length < selectedItems.length) {
    props.resetReport();
  }

  return (
    <div className="DietContainer">
      {finalReport.map((item) => {
        return (
          <FoodCardDiet name={item.description} amount="100" />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedItems: state.selectedItems,
  finalReport: state.finalReport,
});

const mapDispatchToProps = {
  unsetItem,
  reporteFinal,
  resetReport,
};

export default connect(mapStateToProps, mapDispatchToProps)(DietPage);
