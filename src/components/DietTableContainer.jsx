/* eslint-disable react/prop-types */
import React from 'react';

import './styles/FoodTable.css';
import DietTable from '../functions/DietTable';

const DietTableContainer = (props) => {
  const finalReport = DietTable(props.nutrientsArray);
  console.log(finalReport);
  return (
    <div className="dietTableContainer">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Nutrient</th>
            <th scope="col">Value</th>
            <th scope="col">Units</th>
          </tr>
        </thead>
        <tbody>
          {finalReport.map((nutrient) => {
            if (nutrient.value || nutrient.value === 0) {
              return (
                <tr>
                  <th scope="row">{nutrient.name}</th>
                  <td>
                    {Number.isInteger(nutrient.value)
                      ? nutrient.value
                      : nutrient.value.toFixed(2)}
                  </td>
                  <td>{nutrient.unit}</td>
                </tr>
              );
            }
            return (
              // <tr className="table-info">
              //   <th scope="row">{nutrient.name}</th>
              //   <td> </td>
              //   <td> </td>
              // </tr>
              <>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DietTableContainer;
