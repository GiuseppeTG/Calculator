import React, { Fragment, useState } from 'react';
import calculate from '../logic/calculate';

const buttonsRows = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const defaultCalculatorData = {
  total: null,
  next: null,
  operation: null,
};

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState(defaultCalculatorData);
  const { total, next, operation } = calculatorData;

  const handleCalculation = (buttonName) => {
    const { total, next, operation } = calculate(calculatorData, buttonName);
    setCalculatorData({ total, next, operation });
  };

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
                      onClick={() => { handleCalculation(buttonName); }}
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
};

export default Calculator;
