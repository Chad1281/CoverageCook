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

    function showModal() {
        $(".modal").removeClass("hide");
        $("body").css("overflow", "hidden");
    }

    return(
        <div id="navContainer">
            <nav>
                <a href="/home">Home</a>
                <a href="" onClick={showQuoteForm}>Get Quotes</a>
                <a href="/contact">Contact Agent</a>
                <a href="/claims">Claims</a>
            </nav>
        </div>
    )
}