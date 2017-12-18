import React, { Component } from 'react';

import { PieChart, Pie, Tooltip, LabelList } from 'recharts';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Choices from './components/Choices';
import { defaultChoices } from './components/defaultChoices';
import { choiceHelper } from './components/choiceHelper'
import { AddChoice } from './components/AddChoice';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      choices: defaultChoices,
      activeIndex:0
    }
  };

  render() {
    return (
      <MuiThemeProvider >
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Survey</h1>
          </header>
          <ul>
            <div id="question">Quelle souris utilisez-vous ?</div>
            <Choices choices={this.state.choices} updateChoice={this.updateChoice} />
            <br/>
            <AddChoice addChoice={this.addChoiceToState}/>
          </ul>
          
          <PieChart width={1000} height={350}>
            <Tooltip />
            <Pie data={this.state.choices} dataKey="nbVote" nameKey="value"
              cx="50%" cy="50%" outerRadius={100} fill="#8884d8" >
              <LabelList dataKey="value" position="outside"/>
              </Pie>
          </PieChart>
        </div>
      </MuiThemeProvider>
    );
  }

  addChoiceToState = (newChoice) => {
    const updatedChoices = choiceHelper.addChoice(this.state.choices, newChoice);
    this.setState({ choices: updatedChoices });
  };

  updateChoice = (id, updatedNbVote) => {

    var arrayNbVote = Array.from(this.state.choices.map(c => (c.id === id) ? updatedNbVote : c.nbVote));
    var totalNbVote = arrayNbVote.reduce(function (a, b) { return a + b }, 0);

    const updatedChoices = choiceHelper.updateChoice(this.state.choices, id, updatedNbVote, totalNbVote);
    this.setState({ choices: updatedChoices });
  }
}

export default App;
