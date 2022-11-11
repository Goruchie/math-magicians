import React from 'react';
import Calculator from './pages/Calculator';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
