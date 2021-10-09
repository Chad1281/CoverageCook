import React from "react";
import "./QuoteBtn.css";

function QuoteBtn(props) {

    return(
        <button 
            className={ `quoteBtn ${props.custClass}` } 
            onClick={ props.handleClick }>
            {props.children}
        </button>
    );
}

export default QuoteBtn;