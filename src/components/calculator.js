/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import calculate from '../logic/calculate';

const buttonsRows = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-grid">
        <div className="output">0</div>
        {
          buttonsRows.map((buttonsRow) => (
            <>
              {
                  buttonsRow.map((buttonName, index) => (
                    <button
                      key={buttonName}
                      className={`calc-btn 
                      ${buttonName === '0' ? 'span-two' : ''} 
                      ${index === buttonsRow.length - 1 ? 'operator' : ''}`}

                    >
                      { buttonName }
                    </button>
                  ))
                }
            </>
          ))
        }
      </div>

    );
  }
}
