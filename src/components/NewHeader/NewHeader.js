import React from 'react';

import CoverageCook from '../../assets/images/logos/cookLogo.png';
import Facebook from '../../assets/images/logos/facebook.png';
import LinkedIn from '../../assets/images/logos/linkedin.png';

import './NewHeader.css';

export default function NewHeader(props) {

    return(
        <header>
            <ul id="links">
                <a href="https://www.facebook.com/CookFireflyAgent" target="_blank" rel="noreferrer"><img src={Facebook} alt="Facebook Logo" /></a>
                <a href="https://www.linkedin.com/in/chad-cook-80413095/" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="LinkedIn Logo" /></a>
            </ul>
            <a href="/insurance" ><img id="cookLogo" src={CoverageCook} alt="CoverageCook.com logo with chef hat" /></a>
            <nav id="navBar">
                <a href="/insurance">Home</a>
                <span role="button" onClick={props.quoteClick}>Get Quotes</span>
                <span role="button" onClick={props.contactClick}>Contact Agent</span>
                <a href="/carriers">Carriers</a>
            </nav>
        </header>
    )
}
