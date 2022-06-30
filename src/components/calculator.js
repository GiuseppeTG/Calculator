import React, { Fragment } from 'react';
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
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleCalculation = (buttonName) => {
    const updatedState = calculate(this.state, buttonName);
    this.setState(updatedState);
  }

  render() {
    const { total, next, operation } = this.state;
    const isStateNull = () => !total && !next && !operation;
    const displayCalculation = () => {
      if (operation) return `${total} ${operation} ${next || ''}`;
      return next || total;
    };
    return (
      <div className="calculator-grid">
        <div className="output">{isStateNull() ? '0' : displayCalculation()}</div>
        {
          buttonsRows.map((buttonsRow, rowIndex) => (
            <Fragment key={`row ${rowIndex + 1}`}>
              {
                  buttonsRow.map((buttonName, index) => (
                    <button
                      onClick={() => { this.handleCalculation(buttonName); }}
                      type="button"
                      key={buttonName}
                      className={`calc-btn 
                      ${buttonName === '0' ? 'span-two' : ''} 
                      ${index === buttonsRow.length - 1 ? 'operator' : ''}`}
                    >
                      { buttonName }
                    </button>
                  ))
                }
            </Fragment>
          ))
        }
      </div>

    );
  }
}
