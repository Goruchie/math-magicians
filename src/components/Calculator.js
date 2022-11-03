import React from 'react';
import './Calculator.css';
import { calculate, isNumber } from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { toDisplay: 0 };
    this.obj = {
      total: null,
      next: null,
      operation: null,
    };
    this.buttonsEvt = {
      AC: 'AC',
      plusminus: 'X/-',
      percent: '%',
      seven: '7',
      eight: '8',
      nine: '9',
      four: '4',
      five: '5',
      six: '6',
      one: '1',
      two: '2',
      three: '3',
      zero: '0',
      decimal: '.',
      divide: '÷',
      multiply: 'x',
      substract: '-',
      add: '+',
      equal: '=',
    };
     }
    handleClick = (event) => {
      const buttonNum = event.target.name;
      this.obj = calculate(this.obj, buttonNum);
      if(isNumber(buttonNum) || buttonNum === '+/-') {
        this.setState({ toDisplay: this.obj.next || 0});
      } else {
        this.setState({ toDisplay: this.obj.total || 0});
      }
    };
  

  render() {
    const { toDisplay } = this.state;
    return (
      <div className="container">
        <div className="keypad">          
          <p className="div1 buttonsEvt">{ toDisplay }</p>          
          <button name={this.buttonsEvt.AC} className='buttonsEvt' type="button" onClick={this.handleClick}>AC</button>
          <button name={this.buttonsEvt.plusminus} className='buttonsEvt' type="button" onClick={this.handleClick}>+/-</button>
          <button name={this.buttonsEvt.percent} className='buttonsEvt' type="button" onClick={this.handleClick}>%</button>
          <button name={this.buttonsEvt.divide} type="button" className="orange-buttons buttonsEvt" onClick={this.handleClick}>&#247;</button>
          <button name={this.buttonsEvt.seven} className='buttonsEvt' type="button" onClick={this.handleClick}>7</button>
          <button name={this.buttonsEvt.eight} className='buttonsEvt' type="button" onClick={this.handleClick}>8</button>
          <button name={this.buttonsEvt.nine} className='buttonsEvt' type="button" onClick={this.handleClick}>9</button>
          <button name={this.buttonsEvt.multiply} type="button" className="orange-buttons buttonsEvt" onClick={this.handleClick}>x</button>
          <button name={this.buttonsEvt.four} className='buttonsEvt' type="button" onClick={this.handleClick}>4</button>
          <button name={this.buttonsEvt.five} className='buttonsEvt' type="button" onClick={this.handleClick}>5</button>
          <button name={this.buttonsEvt.six} className='buttonsEvt' type="button" onClick={this.handleClick}>6</button>
          <button name={this.buttonsEvt.substract} type="button" className="orange-buttons buttonsEvt" onClick={this.handleClick}>-</button>
          <button name={this.buttonsEvt.one} className='buttonsEvt' type="button" onClick={this.handleClick}>1</button>
          <button name={this.buttonsEvt.two} className='buttonsEvt' type="button" onClick={this.handleClick}>2</button>
          <button name={this.buttonsEvt.three} className='buttonsEvt' type="button" onClick={this.handleClick}>3</button>
          <button name={this.buttonsEvt.add} type="button" className="orange-buttons buttonsEvt" onClick={this.handleClick}>+</button>
          <button name={this.buttonsEvt.zero} type="button" className="div2 buttonsEvt" onClick={this.handleClick}>0</button>
          <button name={this.buttonsEvt.decimal} className='buttonsEvt' type="button" onClick={this.handleClick}>.</button>
          <button name={this.buttonsEvt.equal} type="button" className="orange-buttons buttonsEvt" onClick={this.handleClick}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
