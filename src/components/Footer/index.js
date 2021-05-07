import React from "react";
// import { Link } from "react-router-dom";
import FireflyBW from "../../assets/images/fireflyBW.png";
import "./style.css";

export default function Footer() {
    return(
        <div>
            {/* <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/carriers">Carriers</Link>
                </li>
                <li>
                    <Link to="/claims">Claims</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul> */}
            <div id="footerContainer">
                <img src={ FireflyBW } alt="Firefly Logo" />
                <h3>Cook Firefly Insurance Agency</h3>
                <p><a href="tel:512-644-3039" alt="Phone Number">Contact Chad Cook 512-312-7360</a></p>
                <p><a href="tel:833-436-0202" alt="Toll Free Number">Toll Free 1(833) 436-0202</a></p>
                <address><a href="mailto:ccook@fireflyagency.com" title="Email" alt="email">ccook@fireflyagency.com</a></address>
            </div>
        </div>
    )
}