import React, { useState } from 'react'

function ButtonsGenerator(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li><button onClick={() => setIsOpen(!isOpen)}> {props.title}</button>
            {isOpen && <div className="caption"> {props.description}</div>}</li>
    )
};

export default ButtonsGenerator
