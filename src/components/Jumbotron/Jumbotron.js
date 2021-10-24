import React from 'react';

import QuoteBtn from '../QuoteBtn/QuoteBtn';

import './Jumbotron.css';

export default function Jumbotron(props) {
    return(
        <div className="jumbotron">
            <div className="jumboSpace" />
            <img 
                className="jumboImg" 
                src={ props.imgSrc } 
                alt={ props.imgAlt } />
            <img
                className="logoImg"
                src={ props.logoSrc }
                alt={ props.logoAlt } />
            <QuoteBtn 
                custClass={props.quoteBtnClass}
                handleClick={props.quoteClick} >
                Get Quotes
            </QuoteBtn>     
            <div className={`jumboContent ${props.custClass}`}>
                {props.children}
            </div>
        </div>
    )
}