import React, {Component} from 'react'

import PropTypes from 'prop-types';
import { choiceHelper } from './choiceHelper'

class AddChoice extends React.Component {
    constructor() {
        super();

        this.state = {
            newChoice: ''
        };
    }

    render() {
        return(
            <div>
                <span>Nouveau choix</span>
                <input type="text" value={this.state.newChoice} onChange={this.changeValue}/>
                <input type="button" value="Ajouter" onClick={this.addChoice}/>
            </div>
        );
    }

    changeValue = (e) => {
        this.setState({newChoice: e.target.value});
    }

    addChoice = (props) => {
        this.props.addChoice(this.state.newChoice);
        this.setState({newChoice: ''});
    }
}

AddChoice.propTypes = {
    value: PropTypes.string.isRequired,
}
export {AddChoice};