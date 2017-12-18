import React from 'react'

import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

import '../App.css';

const Choice = (props) => (
    <li key={props.id}>
        <span className="intitule">{props.value} </span>
        <TextField
            id="text-field-controlled"
            type="number"
            value={props.nbVote}
            min="0"
            className="TextField-class"
            style = {{width: 80}}
            onChange={(e) => props.updateChoice(props.id, Number(e.target.value))}
        />
        <span className="percentage">{props.percent} %</span>
    </li>
)

Choice.propTypes = {
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    nbVote: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
}

export default Choice;