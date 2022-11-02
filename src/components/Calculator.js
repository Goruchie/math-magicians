import React from 'react';
import './Calculator.css';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <div className="container">
        <div className="keypad">
          <input className="div1" type="text" placeholder="0s" />
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button" className="orange-buttons">&#247;</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="orange-buttons">x</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="orange-buttons">-</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="orange-buttons">+</button>
          <button type="button" className="div2">0</button>
          <button type="button">.</button>
          <button type="button" className="orange-buttons">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
