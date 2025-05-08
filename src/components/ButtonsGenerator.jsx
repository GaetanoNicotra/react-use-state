import React from "react";

function ButtonsGenerator({ language, isOpen, onToggle }) {
    //  const [isOpen, setIsOpen] = useState(false);
    return (
        <li><button onClick={onToggle}> {language.title} </button>
            {isOpen ? <div className="caption"> <strong>{language.title} </strong> <br />{language.description} </div> : ""}</li>
    )
};

export default ButtonsGenerator
