import React from 'react'

import PropTypes from 'prop-types';

const Choice = (props) => (
    <li key={props.id}>
        <span>{props.value} 
            <input type="number" value={props.nbVote} min="0"
                onChange={() => props.updateChoice(props.id)}/>
        </span>
    </li>
)

Choice.propTypes = {
    id:PropTypes.number.isRequired,
    value:PropTypes.string.isRequired,
    nbVote:PropTypes.number.isRequired
}

export default Choice;