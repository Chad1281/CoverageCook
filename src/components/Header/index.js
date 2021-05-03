import React from "react";
import "./style.css";
import Home from "../../assets/videos/home.mp4";
import Firefly from "../../assets/images/firefly.png";
import QuoteBtn from "../QuoteBtn";

export default function Header() {

    return(
        <div id="headerContainer">
            <div id="fireflyHeader">
                <div id="headerWrapper">
                    <img src={ Firefly } alt="Firefly Insurance Logo" />
                    <h2>A bright idea:</h2>
                    <p>We'll shop your home and auto insurance for you.</p>
                    <p>One agent. Lots of quotes. No hassle. Guaranteed.</p>
                </div>
                <QuoteBtn />
            </div>
            
            <video id="homeVideo" fluid autoPlay loop muted>
                <source src={ Home } type="video/mp4" />
                <source src={ Home } type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        </div>        
    )    
}