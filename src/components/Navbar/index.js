import React from "react";
import $ from "jquery";
import "./style.css";

export default function Navbar() {

    function showQuoteForm(e) {
        e.preventDefault();
        console.log("show Quote")
        $("#saltEmbed").removeClass("hide");
        showModal();
    }

    function showContactForm(e) {
        e.preventDefault();
        console.log("show Contact")
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
                <span role="button" href="" onClick={showQuoteForm}>Get Quotes</span>
                <span role="button" href="" onClick={showContactForm}>Contact Agent</span>
                <a href="/carriers">Carriers</a>
            </nav>
        </div>
    )
}