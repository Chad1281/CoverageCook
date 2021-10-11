import React from "react";
// import { Link } from "react-router-dom";
import FireflyBW from "../../assets/images/fireflyBW.png";
import "./style.css";

export default function Footer() {
    return(
        <div>
            <div id="footerContainer">
                <img src={ FireflyBW } alt="Firefly Logo" />
                <h3>Cook Firefly Insurance Agency</h3>
                <p><a href="tel:512-644-3039" title="Phone Number">Contact Chad Cook 512-312-7360</a></p>
                <p><a href="tel:833-436-0202" title="Toll Free Number">Toll Free 1(833) 436-0202</a></p>
                <address><a href="mailto:ccook@fireflyagency.com" title="Email">ccook@fireflyagency.com</a></address>
            </div>
        </div>
    )
}