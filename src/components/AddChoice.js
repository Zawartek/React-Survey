import React, {Component} from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import PropTypes from 'prop-types';


import '../App.css';

class AddChoice extends Component {
    constructor() {
        super();

        this.state = {
            newChoice: '',
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
                    defaultValue=''
                    hintText="Nouvelle Réponse"
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
            if (e.target.value == "Logitech G700S") {
                this.setState({errorText: "Mauvais choix"});
            }
            else {
                this.setState({newChoice: e.target.value, errorText:''});
            }
        }
        else {
            this.setState({errorText: "La nouvelle réponse est vide"});
        }
    }

    addChoice = (props) => {
        if (this.state.newChoice>0) {
            this.props.addChoice(this.state.newChoice);
            this.setState({newChoice: ''});
        }
        else {
            this.setState({errorText: "La nouvelle réponse est vide"});
        }
    }
}

AddChoice.propTypes = {
    newChoice: PropTypes.string,
}
export {AddChoice};