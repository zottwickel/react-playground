import React, { Component } from 'react';
import Counter from './state/Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter step={3} />
      </div>
    );
  }
}

export default App;