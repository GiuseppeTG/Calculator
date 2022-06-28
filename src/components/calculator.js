/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-grid">
        <div className="output">0</div>
        <button className="calc-btn">AC</button>
        <button className="calc-btn">+/-</button>
        <button className="calc-btn">%</button>
        <button className="calc-btn operator">÷</button>
        <button className="calc-btn">7</button>
        <button className="calc-btn">8</button>
        <button className="calc-btn">9</button>
        <button className="calc-btn operator">x</button>
        <button className="calc-btn">4</button>
        <button className="calc-btn">5</button>
        <button className="calc-btn">6</button>
        <button className="calc-btn operator">-</button>
        <button className="calc-btn">1</button>
        <button className="calc-btn">2</button>
        <button className="calc-btn">3</button>
        <button className="calc-btn operator">+</button>
        <button className="span-two calc-btn">0</button>
        <button className="calc-btn">.</button>
        <button className="calc-btn operator">=</button>
      </div>

    );
  }
}
