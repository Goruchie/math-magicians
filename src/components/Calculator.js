import React from 'react';
import './Calculator.css';
import { calculate } from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  onClickHandler = (e) => {
    const data = e.target.innerHTML;
    const result = calculate(this.state, data);
    this.setState(result);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="keypad">
          <p className="div1 buttonsEvt">
            {total}
            {operation}
            {next}
          </p>
          <button name="A/C" className="buttonsEvt" type="button" onClick={this.onClickHandler}>AC</button>
          <button name="+/-" className="buttonsEvt" type="button" onClick={this.onClickHandler}>+/-</button>
          <button name="%" className="buttonsEvt" type="button" onClick={this.onClickHandler}>%</button>
          <button name="÷" type="button" className="orange-buttons buttonsEvt" onClick={this.onClickHandler}>&#247;</button>
          <button name="7" className="buttonsEvt" type="button" onClick={this.onClickHandler}>7</button>
          <button name="8" className="buttonsEvt" type="button" onClick={this.onClickHandler}>8</button>
          <button name="9" className="buttonsEvt" type="button" onClick={this.onClickHandler}>9</button>
          <button name="*" type="button" className="orange-buttons buttonsEvt" onClick={this.onClickHandler}>x</button>

            <button name="4" className="buttonsEvt" type="button" onClick={this.onClickHandler}>4</button>
            <button name="5" className="buttonsEvt" type="button" onClick={this.onClickHandler}>5</button>
            <button name="6" className="buttonsEvt" type="button" onClick={this.onClickHandler}>6</button>
            <button name="-" type="button" className="orange-buttons buttonsEvt" onClick={this.onClickHandler}>-</button>
            <button name="1" className="buttonsEvt" type="button" onClick={this.onClickHandler}>1</button>
            <button name="2" className="buttonsEvt" type="button" onClick={this.onClickHandler}>2</button>
            <button name="3" className="buttonsEvt" type="button" onClick={this.onClickHandler}>3</button>
            <button name="+" type="button" className="orange-buttons buttonsEvt" onClick={this.onClickHandler}>+</button>
            <button name="0" type="button" className="div2 buttonsEvt" onClick={this.onClickHandler}>0</button>
            <button name="." className="buttonsEvt" type="button" onClick={this.onClickHandler}>.</button>
            <button name="=" type="button" className="orange-buttons buttonsEvt" onClick={this.onClickHandler}>=</button>
          </div>
        </div>
      );
    }
}

export default Calculator;
