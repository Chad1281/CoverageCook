import React from "react";
import "./style.css";


export default function Header(props) {

    return(
        <div className="header">
        
            <div className={props.custClass}>
                {props.children}
            </div>
            
            <video className={ props.vidClass } fluid autoPlay loop muted>
                <source src={ props.vidSrc } type="video/mp4" />
                <source src={ props.vidSrc } type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        
            <img className={ props.imgClass } src={ props.imgSrc } alt={ props.imgAlt } />

        </div>
    )
}
    
    
    
    
      

