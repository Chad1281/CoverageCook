import React from 'react';

export default function Jumbotron(props) {
    return(
        <div className="jumbotron">
            <img 
                className={ props.imgClass } 
                src={ props.imgSrc } 
                alt={ props.imgAlt } />
            <img
                className={ props.logoClass }
                src={ props.logoSrc }
                alt={ props.logoAlt } />
            <div className={props.custClass}>
                {props.children}
            </div>
        </div>
    )
}