import React from 'react';
import Calculator from './components/Calculator';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return <Calculator />;
  }
}

export default App;
