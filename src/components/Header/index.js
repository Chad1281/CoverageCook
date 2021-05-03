import React from "react";
import "./style.css";

const Header = ({custClass, custId, vidSrc, imgSrc, imgAlt, children}) => (
    <div className="header">
        
            <div className={custClass} id={custId}>
                {children}
            </div>
            
            <video className="headerVideo" fluid autoPlay loop muted>
                <source src={ vidSrc } type="video/mp4" />
                <source src={ vidSrc } type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        
            <img src={ imgSrc } alt={ imgAlt } />

        </div>
)      

export default Header;