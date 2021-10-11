import React from "react";
import $ from "jquery";

import LandingCards from "../../assets/data/landingCards";
import Card from "../../components/Card";
import Spacer from "../../components/Spacer";
import LightFirefly from "../../assets/images/logos/lightFirefly.avif";
import Snapshot from "../../assets/images/landingCards/snapshot.avif";
import NerdyKid from "../../assets/images/other/NerdThinkKid.avif";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import WildFlowers from "../../assets/images/landingPages/wildflowers.png"

import "./style.css";

function showQuoteForm() {
    $("#saltEmbed").removeClass("hide");
    showModal();
}

function showModal() {
    $(".modal").removeClass("hide");
    $(".container").addClass("noScroll");
}

const Home = () => {

    return(
        <div id="landingContainer">
            <Jumbotron 
                imgSrc={WildFlowers} 
                imgAlt="Colorful Sunrise and Bluebonnets in the Texas Hill Country" 
                logoSrc={LightFirefly} 
                logoAlt="Light Firefly Insurance Agency Logo"
                quoteBtnClass="grey"
                quoteClick={() => showQuoteForm()}
                custClass="jumboContent">  
                <p>Custom Insurance Coverage.</p> 
                <p>Instant Online Quotes.</p>            
                <p>Several Companies.</p> 
                <p>One Agent.</p>  
                <p>No Endless Calls.</p> 
            </Jumbotron>
            <Spacer>
                <div>
                    <p>"My special cause, the one that alerts my interest and quickens the pace of my life, is to preserve the wildflowers and native plants that define the regions of our land-to encourage and promote their use in appropriate areas, and thus help pass on to generation in waiting the quiet jobs and satisfactions I have known since my childhood." ~ Lady Bird Johnson</p>
                    <p>CoverageCook.com is a Firefly Insurance Agency located in the Texas Hill Country amongst some of the most beautiful wildflowers and countrysides in the world. We strive to give you the best possible insurance shopping experience while making the process easy and hassle free. We'll shop your auto and home insurance for you and customize your coverage to find you the best possible price.</p>
                </div>
            </Spacer>
            <div id="landingCardsContainer" data-scroll-speed="-2">
                <div id="landingCardsWrapper">
                    {LandingCards.map(function(card) {
                        return(
                            <Card cardClass="card" src={ card.src } alt={ card.alt } h2={ card.h2 } p1={ card.p } />            
                        )
                    })}    
                </div>
            <button onClick={showQuoteForm}>Try It For Yourself</button>
            </div>
            
            <div id="snapshotContainer">
                <img id="snapshotImg" src= {Snapshot} alt="list of companies with quotes from each" />
                <div id="snapshot">
                    <h3>​ARE YOU SURE YOU'RE NOT OVERPAYING?</h3>
                    <p>​WE CAN QUOTE YOU WITH A BUNCH OF COMPANIES ALL AT ONE TIME.</p>
                    <p>HERE IS A SCREENSHOT OF ONE OF OUR QUOTES. IMAGINE WHAT WE COULD DO FOR YOU!​</p>
                    <button onClick={showQuoteForm}>Try It For Yourself</button>
                </div>
                <div id="wonder">
                    <h2>Stop Wondering</h2>
                    <img id="nerd" src={NerdyKid} alt="nerdy kid wondering" />
                </div>                
            </div>
            <Spacer />   
        </div>
    )
}

export default Home;