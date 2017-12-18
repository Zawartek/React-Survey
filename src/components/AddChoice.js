import React from 'react'

import PropTypes from 'prop-types';

const AddChoice = (props) => (
    <div>
        <span>Nouveau choix</span>
        <input type="text" value={props.value} />
        <input type="button" value="Ajouter" onClick={(e) => addChoice(e.target.value)} /> />
    </div>
)

AddChoice.propTypes = {
    value: PropTypes.string.isRequired,
}

export default AddChoice;