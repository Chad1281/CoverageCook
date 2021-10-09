import React from "react";
import $ from "jquery";
import LandingCards from "../../assets/data/landingCards";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card";
import QuoteBtn from "../../components/QuoteBtn/QuoteBtn";
import CarrierAnimation from "../../components/CarrierAnimation";
import Spacer from "../../components/Spacer";
import HomeVid from "../../assets/videos/home.mp4";
import Firefly from "../../assets/images/firefly.png";
import Snapshot from "../../assets/images/landingCards/snapshot.png";
import NerdyKid from "../../assets/images/other/NerdThinkKid.png";
import "./style.css";

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

const Home = () => {

    return(
        <div id="landingContainer">
            <Header custClass="headerCard" vidClass="headerVideo" vidSrc={ HomeVid } handleClick={showQuoteForm} imgClass="hide">
                <div>
                    <Card
                        cardClass="card"
                        src={ Firefly }
                        h2="A bright idea:"
                        p1="We'll shop your home and auto insurance for you."
                        p2="One agent. Lots of quotes. No hassle. Guaranteed."
                    />
                    <QuoteBtn custId="quoteBtn" handleClick={() => showQuoteForm()} />
                </div>
            </Header>   
            <CarrierAnimation />       
            <Navbar />
            <Spacer />
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