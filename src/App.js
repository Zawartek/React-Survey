import React, { Component } from 'react';

import Choices from './components/Choices';
import {defaultChoices} from './components/defaultChoices';
import {choiceHelper} from './components/choiceHelper'

import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      choices: defaultChoices
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Survey</h1>
        </header>
        <ul>
          <span>Quel sport fais-tu?</span>
          <Choices choices={this.state.choices} updateChoice={this.updateChoice}/>
        </ul>
      </div>
    );
  }

  addChoiceToState = () => {
    this.state.choices.push({
      id: Math.floor((Math.random * 10000)+1)
    })
  };

  updateChoice = (id) => {
    const updatedChoices = choiceHelper.updateChoice(this.state.choices, id);
    this.setState({choices:updatedChoices});
  }
}

export default App;
