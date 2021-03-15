/* eslint-disable no-eval */
import './calc.scss';
import './App.scss';
import { useState } from 'react';

const ACTIONS = {
  PLUS: '+',
  MINUS: '-',
  MULT: '*',
  DIVIDE: '/',
  EQUAL: '=',
  PERCENT: '%',
  TOGGLE: '+/-',
}

function App() {

  const [expression, setExpression] = useState('');
  const [value, setValue] = useState('0');

  const handleDigitClick = (digit) => {
    const newExpression = `${expression}${digit}`;

    // Handle 0
    setExpression(newExpression);
    setValue(eval(newExpression))
  };

  const handleActionClick = (action) => {
    switch (action) {
      case ACTIONS.EQUAL:
        setValue(eval(expression))
        break;
      case ACTIONS.TOGGLE:
        // We will see
        break;
      default:
        const newExpression = `${expression}${action}`;
        setExpression(newExpression);
    }
  };

  const clearAll = () => {
    setValue('0');
    setExpression('');
  }

  return (
    <div className="App">
      <div className="container">
        <div className="editor">
          <div className="stack">{expression}</div>
          <div className="inputArea">
            {value}
          </div>
        </div>
        <div className="actions">
          <div className="cell primary" onClick={clearAll}>C</div>
          <div className="cell primary">+/-</div>
          <div className="cell primary">%</div>
          <div className="cell transparent" onClick={() => handleActionClick(ACTIONS.DIVIDE)}>{ACTIONS.DIVIDE}</div>
          <div className="cell" onClick={() => handleDigitClick(7)}>7</div>
          <div className="cell" onClick={() => handleDigitClick(8)}>8</div>
          <div className="cell" onClick={() => handleDigitClick(9)}>9</div>
          <div className="cell transparent" onClick={() => handleActionClick(ACTIONS.MULT)}>{ACTIONS.MULT}</div>
          <div className="cell" onClick={() => handleDigitClick(4)}>4</div>
          <div className="cell" onClick={() => handleDigitClick(5)}>5</div>
          <div className="cell" onClick={() => handleDigitClick(6)}>6</div>
          <div className="cell transparent" onClick={() => handleActionClick(ACTIONS.MINUS)}>{ACTIONS.MINUS}</div>
          <div className="cell" onClick={() => handleDigitClick(1)}>1</div>
          <div className="cell" onClick={() => handleDigitClick(2)}>2</div>
          <div className="cell" onClick={() => handleDigitClick(3)}>3</div>
          <div className="cell transparent" onClick={() => handleActionClick(ACTIONS.PLUS)}>{ACTIONS.PLUS}</div>
          <div className="cell span" onClick={() => handleDigitClick(0)}>0</div>
          <div className="cell">,</div>
          <div className="cell transparent">=</div>
        </div>
      </div>
    </div>
  );
}

export default App;
