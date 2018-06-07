import React, { Component } from 'react';
import logo from './logo.svg';
import ChartDataProvider from './Components/ChartDataProvider/ChartDataProvider'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChartDataProvider />
      </div>
    );
  }
}

export default App;
