import React from 'react';
import Calculator from './pages/Calculator';
import { NavLink } from 'react-router-dom';

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
