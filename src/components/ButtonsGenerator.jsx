import React from 'react'

function ButtonsGenerator(props) {
    return (
        <li><button> {props.title}</button><div className="caption"> {props.description}</div></li>
    )
};

export default ButtonsGenerator
