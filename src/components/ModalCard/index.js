import React from "react";
import Firefly from "../../assets/images/fireflyBW.png";
import Close from "../../assets/images/close.png";
import "./style.css";

export default function QuoteCard({children}) {
    return(
        <div className="modal">
            <div className="modalBackground"></div>
            <div className="modalCard">
                <div className="fixedModalCardHead">
                    <header className="modalCardHead">
                        <div id="space" />
                        <img src={ Firefly } alt="Firefly logo" />
                        <span role="button" id="quoteCancel"><img id="closeImg" src={ Close } alt="close button" /></span>
                    </header>
                </div>                
                <div className="modalCardBody">
                    <section>{ children }</section>  
                </div>
                              
            </div>            
        </div>
    )
}