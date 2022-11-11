import React from 'react';
import { NavLink } from 'react-router-dom';
import Calculator from './pages/Calculator';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Calculator />
        <NavLink />
      </div>
    );
  }
}

export default App;
