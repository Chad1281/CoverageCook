import React from "react";
import $ from "jquery";
import Firefly from "../../assets/images/fireflyWY.png";
import Close from "../../assets/images/close.png";
import "./style.css";

export default function ModalCard({children}) {
    
    function hideModal() {
        $(".modal").addClass("hide");
        $("#saltEmbed").addClass("hide");
        $(".contact").addClass("hide");
        $(".container").removeClass("noScroll");
    }

    return(
        <div className="modal hide">
            <div className="modalBackground"></div>
            <div className="modalCard">
                <div className="fixedModalCardHead">
                    <header className="modalCardHead">
                        <div id="space" />
                        <img id="logo" src={ Firefly } alt="Firefly logo" />
                        <span role="button" id="cancel"><img id="closeImg" src={ Close } alt="close button" onClick={hideModal} /></span>
                    </header>
                </div>                
                <div className="modalCardBody">
                    <section className="modalSection">{ children }</section>  
                </div>
                              
            </div>            
        </div>
    )
}