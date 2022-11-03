import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [count, setCount] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const onClickHandler = (e) => {
    const data = e.target.innerHTML;
    const result = calculate(count, data);
    setCount(result);
  };

  const { total, next, operation } = count;
  return (
    <div className="container">
      <div className="keypad">
        <p className="div1 buttonsEvt">
          {total}
          {operation}
          {next}
        </p>
        <button name="A/C" className="buttonsEvt" type="button" onClick={onClickHandler}>AC</button>
        <button name="+/-" className="buttonsEvt" type="button" onClick={onClickHandler}>+/-</button>
        <button name="%" className="buttonsEvt" type="button" onClick={onClickHandler}>%</button>
        <button name="÷" type="button" className="orange-buttons buttonsEvt" onClick={onClickHandler}>&#247;</button>
        <button name="7" className="buttonsEvt" type="button" onClick={onClickHandler}>7</button>
        <button name="8" className="buttonsEvt" type="button" onClick={onClickHandler}>8</button>
        <button name="9" className="buttonsEvt" type="button" onClick={onClickHandler}>9</button>
        <button name="*" type="button" className="orange-buttons buttonsEvt" onClick={onClickHandler}>x</button>

        <button name="4" className="buttonsEvt" type="button" onClick={onClickHandler}>4</button>
        <button name="5" className="buttonsEvt" type="button" onClick={onClickHandler}>5</button>
        <button name="6" className="buttonsEvt" type="button" onClick={onClickHandler}>6</button>
        <button name="-" type="button" className="orange-buttons buttonsEvt" onClick={onClickHandler}>-</button>
        <button name="1" className="buttonsEvt" type="button" onClick={onClickHandler}>1</button>
        <button name="2" className="buttonsEvt" type="button" onClick={onClickHandler}>2</button>
        <button name="3" className="buttonsEvt" type="button" onClick={onClickHandler}>3</button>
        <button name="+" type="button" className="orange-buttons buttonsEvt" onClick={onClickHandler}>+</button>
        <button name="0" type="button" className="div2 buttonsEvt" onClick={onClickHandler}>0</button>
        <button name="." className="buttonsEvt" type="button" onClick={onClickHandler}>.</button>
        <button name="=" type="button" className="orange-buttons buttonsEvt" onClick={onClickHandler}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
