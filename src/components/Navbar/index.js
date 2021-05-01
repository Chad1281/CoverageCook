import React from "react";
import "./style.css";
import QuoteBtn from "../QuoteBtn";

export default function Navbar() {
    return(
        <div id="navContainer">
            <nav>
                <a href="/home">Home</a>
                <a href="/home">Get Quotes</a>
                <a href="/contact">Contact Agent</a>
                <a href="/claims">Claims</a>
            </nav>
        </div>
    )
}