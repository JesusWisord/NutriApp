import React from 'react';

import './styles/FoodTable.css';

import Spinner from './Spinner';

const FoodTable = (props) => {
  if (props.data.foodNutrients) {
    return (
      <div className="tableContainer">
        <h1>{props.data.description}</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Nutrient</th>
              <th scope="col">Value</th>
              <th scope="col">Units</th>
            </tr>
          </thead>
          <tbody>
            {props.data.foodNutrients.map((nutrient) => {
              if (nutrient.amount || nutrient.amount === 0) {
                return (
                  <tr>
                    <th scope="row">{nutrient.nutrient.name}</th>
                    <td>{nutrient.amount}</td>
                    <td>{nutrient.nutrient.unitName}</td>
                  </tr>
                );
              }
              return (
                <tr className="table-info">
                  <th scope="row">{nutrient.nutrient.name}</th>
                  <td>{nutrient.amount}</td>
                  <td>-</td>
                </tr>
              );
            })
            }
          </tbody>
        </table>
      </div>
    );
  }
  return (<Spinner />);
};

export default FoodTable;
