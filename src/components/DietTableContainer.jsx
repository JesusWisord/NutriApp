/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';

import './styles/FoodTable.css';
import DietTable from '../functions/DietTable';
import quitIcon from '../assets/SVG/cancel-circle.svg';

const DietTableContainer = (props) => {
  const finalReport = DietTable(props.nutrientsArray);
  const handleClick = (event) => {
    event.target.parentElement.classList.add('nutrient__hidden');
  };
  return (
    <>
      {/* <div className="filterContainer">
        {finalReport.map((nutrient) => (
          <label className="filter__nutrient" htmlFor={`nut-${nutrient.id}`}>
          <input type="checkbox" defaultChecked onClick={() => handleClick(nutrient)} name={`${nutrient.id}`} id={`nut-${nutrient.id}`} />
            {nutrient.name}
          </label>
        ))}
      </div> */}
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
                  <tr
                    className={nutrient.checked ? 'nutrient__showed' : 'nutrient__hidden'}
                  >
                    <th scope="row">{nutrient.name}</th>
                    <td>
                      {Number.isInteger(nutrient.value)
                        ? nutrient.value
                        : nutrient.value.toFixed(2)}
                    </td>
                    <td>{nutrient.unit}</td>
                    <img
                      src={quitIcon}
                      alt="quitIcon"
                      className="quitIcon"
                      onClick={(e) => handleClick(e)}
                    />
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
    </>
  );
};

export default DietTableContainer;
