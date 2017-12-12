import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Survey from './components/Survey'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Survey</h1>
        </header>
        <Survey/>
      </div>
    );
  }
}

export default App;
