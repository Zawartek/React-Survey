import React from 'react';

import Choice from './Choice';
import PropTypes from 'prop-types';

const displayChoice = (props) => props.choices.map(c => <Choice key={c.id} {...c} updateChoice={props.updateChoice}/>);

const Choices = (props) => <ul>{displayChoice({...props})}</ul>

Choices.propTypes = {
    choices: PropTypes.array.isRequired
}

export default Choices;