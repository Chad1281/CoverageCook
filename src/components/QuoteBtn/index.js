import React from "react";
import "./style.css";

function QuoteBtn({handleClick}) {

    return(
        <button id="quoteBtn" onClick={ handleClick }>Get Quotes</button>
    );
}

export default QuoteBtn;