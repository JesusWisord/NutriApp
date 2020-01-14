import React from 'react';
import propTypes from 'prop-types';

// import './css/FoodCard.css';

// import getData from "../api_2";

class FoodCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
  }

  handleClick = (e) => {
    e.preventDefault();
    const container = e.target;
    this.changingClass(container);
  };


  render() {
    const { loading } = this.state;
    const { ndbno, food } = this.props.data.report;
    if (loading) {
      return (
        <p> Loading ... </p>
      );
    }
    return (
      <>
        <div key={ndbno} className="card text-center mt-4">
          <div className="card-header">
            <div className="title-card">
              <p className="h3 food-name">
                {data.report.food.name}
              </p>
            </div>
            <ul className="nav nav-pills card-header-pills">
              <li className="nav-item">
                <a id="Gen-tab" className="btn btn-info mr-2 nav-link tab-item active" onClick={this.handleClick} href="/gen">
                  General
                </a>
              </li>
              <li className="nav-item">
                <a id="Azuc-tab" className="btn btn-info mr-2 nav-link tab-item" onClick={this.handleClick} href="/carb">
                  Azúcares
                </a>
              </li>
              <li className="nav-item">
                <a id="Min-tab" className="btn btn-info mr-2 nav-link tab-item" onClick={this.handleClick} href="/#">
                  Minerales
                </a>
              </li>
              <li className="nav-item">
                <a id="Vit-tab" className="btn btn-info mr-2 nav-link tab-item" onClick={this.handleClick} href="/#">
                  Vitaminas
                </a>
              </li>
              <li className="nav-item">
                <a id="Lip-tab" className="btn btn-info mr-2 nav-link tab-item" onClick={this.handleClick} href="/#">
                  Lípidos
                </a>
              </li>
              <li className="nav-item">
                <a id="Oth-tab" className="btn btn-info mr-2 nav-link tab-item" onClick={this.handleClick} href="/#">
                  Otros
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <h5 className="card-title">Información General del Alimento</h5>
            <ol className="pl-0">
              <div id="gen-info" className="info-item is-active">
                <li className="list-group-item">
                  <span>Agua</span>
                  <span>{this.nutrientValue(255)}</span>
                </li>
                <li className="list-group-item">
                  <span>Energía</span>
                  {this.nutrientValue(208)}
                  ||
                  {this.nutrientValue(268)}
                </li>
                <li className="list-group-item">
                  <span>Proteína</span>
                  {this.nutrientValue(203)}
                </li>
                <li className="list-group-item">
                  <span>Lípidos Totales</span>
                  {this.nutrientValue(204)}
                </li>
                <li className="list-group-item">
                  <span>Azúcares Totales</span>
                  {this.nutrientValue(269)}
                </li>
                <li className="list-group-item">
                  <span>Minerales Totales</span>
                  {this.nutrientValue(207)}
                </li>
                <li className="list-group-item">
                  <span>Carbohidratos por diferencia</span>
                  {this.nutrientValue(205)}
                </li>
                <li className="list-group-item">
                  <span>Fibra Total Dietética</span>
                  {this.nutrientValue(291)}
                </li>
              </div>
              <div id="azuc-info" className="info-item">
                <li className="list-group-item">
                  <span>Sacarosa</span>
                  {this.nutrientValue(210)}
                </li>
                <li className="list-group-item">
                  <span>Glucosa</span>
                  {this.nutrientValue(211)}
                </li>
                <li className="list-group-item">
                  <span>Fructosa</span>
                  {this.nutrientValue(212)}
                </li>
                <li className="list-group-item">
                  <span>Lactosa</span>
                  {this.nutrientValue(213)}
                </li>
                <li className="list-group-item">
                  <span>Maltosa</span>
                  {this.nutrientValue(214)}
                </li>
                <li className="list-group-item">
                  <span>Galactosa</span>
                  {this.nutrientValue(287)}
                </li>
                <li className="list-group-item">
                  <span>Azúcares Totales</span>
                  {this.nutrientValue(269)}
                </li>
              </div>
              <div id="min-info" className="info-item">
                <li className="list-group-item">
                  <span>Calcio</span>
                  {this.nutrientValue(301)}
                </li>
                <li className="list-group-item">
                  <span>Hierro</span>
                  {this.nutrientValue(303)}
                </li>
                <li className="list-group-item">
                  <span>Magnesio</span>
                  {this.nutrientValue(304)}
                </li>
                <li className="list-group-item">
                  <span>Fósforo</span>
                  {this.nutrientValue(305)}
                </li>
                <li className="list-group-item">
                  <span>Potasio</span>
                  {this.nutrientValue(306)}
                </li>
                <li className="list-group-item">
                  <span>Sodio</span>
                  {this.nutrientValue(307)}
                </li>
                <li className="list-group-item">
                  <span>Zinc</span>
                  {this.nutrientValue(309)}
                </li>
                <li className="list-group-item">
                  <span>Cobre</span>
                  {this.nutrientValue(312)}
                </li>
                <li className="list-group-item">
                  <span>Manganeso</span>
                  {this.nutrientValue(315)}
                </li>
                <li className="list-group-item">
                  <span>Selenio</span>
                  {this.nutrientValue(317)}
                </li>
              </div>
              <div id="vit-info" className="info-item">
                <li className="list-group-item">
                  <span>Vitamina C</span>
                  {this.nutrientValue(401)}
                </li>
                <li className="list-group-item">
                  <span>Tiamina</span>
                  {this.nutrientValue(404)}
                </li>
                <li className="list-group-item">
                  <span>Riboflavina</span>
                  {this.nutrientValue(405)}
                </li>
                <li className="list-group-item">
                  <span>Niacina</span>
                  {this.nutrientValue(406)}
                </li>
                <li className="list-group-item">
                  <span>Ácido pantoténico</span>
                  {this.nutrientValue(410)}
                </li>
                <li className="list-group-item">
                  <span>Vitamina B-6</span>
                  {this.nutrientValue(415)}
                </li>
                <li className="list-group-item">
                  <span>Ácido Fólico</span>
                  {this.nutrientValue(431)}
                </li>
                <li className="list-group-item">
                  <span>Vitamina B-12</span>
                  {this.nutrientValue(418)}
                </li>
                <li className="list-group-item">
                  <span>Vitamina D</span>
                  {this.nutrientValue(324)}
                </li>
              </div>
              <div id="lip-info" className="info-item">
                <li className="list-group-item">
                  <span>Ácidos Lípidos Saturados Totales</span>
                  {this.nutrientValue(606)}
                </li>
              </div>
              <div id="oth-info" className="info-item">
                <li className="list-group-item">
                  <span>Alcohol etílico</span>
                  {this.nutrientValue(221)}
                </li>
              </div>
            </ol>
          </div>
        </div>
      </>
    );
  }
}

FoodCard.propTypes = {
  data: propTypes.object,

};

export default FoodCard;
