import React from 'react'

import PropTypes from 'prop-types';

const Choice = (props) => (
    <li key={props.id}>
        <span>{props.value} </span>
        <input type="number" value={props.nbVote} min="0"
            onChange={(e) => props.updateChoice(props.id, Number(e.target.value))} />
        <span>{props.percent} %</span>
    </li>
)

Choice.propTypes = {
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    nbVote: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
}

export default Choice;