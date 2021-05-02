import React from "react";
import { Link } from "react-router-dom";
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
                <h3>Chad Cook Firefly Agency</h3>
            </div>
        </div>
    )
}