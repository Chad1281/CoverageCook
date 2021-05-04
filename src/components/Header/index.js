import React from "react";
import $ from "jquery";
import QuoteBtn from "../QuoteBtn";
import "./style.css";


export default function Header(props) {

    return(
        <div className="header">
        
            <div className={props.custClass}>
                {props.children}
            </div>
            
            <video className="headerVideo" fluid autoPlay loop muted>
                <source src={ props.vidSrc } type="video/mp4" />
                <source src={ props.vidSrc } type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        
            <img src={ props.imgSrc } alt={ props.imgAlt } />

        </div>
    )
}
    
    
    
    
      

