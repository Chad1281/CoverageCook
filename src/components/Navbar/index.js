import React from "react";
import $ from "jquery";
import "./style.css";

export default function Navbar() {

    function showQuoteForm() {
        $("#saltEmbed").removeClass("hide");
        showModal();
    }

    function showContactForm() {
        $(".contact").removeClass("hide");
        showModal();
    }

    function showModal() {
        $(".modal").removeClass("hide");
        $(".container").addClass("noScroll");
    }

    return(
        <div id="navContainer">
            <nav>
                <a href="/home">Home</a>
                <span role="button" onClick={showQuoteForm}>Get Quotes</span>
                <span role="button" onClick={showContactForm}>Contact Agent</span>
                <a href="/carriers">Carriers</a>
            </nav>
        </div>
    )
}