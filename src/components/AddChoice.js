import React, {Component} from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import PropTypes from 'prop-types';


import '../App.css';

class AddChoice extends Component {
    constructor() {
        super();

        this.state = {
            newChoice: 'default Value',
            errorText: ''
        };
    }

    render() {
        return(
            <div>
                <span>Nouveau choix </span>
                <TextField
                    id="text-field-controlled"
                    model="newChoice"
                    type="text"
                    defaultValue={this.state.newChoice}
                    errorText={this.state.errorText}
                    onChange={this.changeValue}
                    className="TextField-class"
                />
                <RaisedButton label="Ajouter" onClick={this.addChoice} />
            </div>
        );
    }

    changeValue = (e) => {
        if (e.target.value.length>0) {
            this.setState({newChoice: e.target.value, errorText:''});
        }
        else {
            this.setState({errorText: "The text is empty"});
        }
    }

    addChoice = (props) => {
            this.props.addChoice(this.state.newChoice);
            this.setState({newChoice: ''});
    }
}

AddChoice.propTypes = {
    newChoice: PropTypes.string.isRequired,
}
export {AddChoice};