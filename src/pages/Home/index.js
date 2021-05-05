import React from "react";
import $ from "jquery";
import LandingCards from "../../assets/data/landingCards";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ModalCard from "../../components/ModalCard";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import QuoteBtn from "../../components/QuoteBtn";
import CarrierAnimation from "../../components/CarrierAnimation";
import Spacer from "../../components/Spacer";
import SaltEmbed from "../../components/SaltEmbed";
import ContactForm from "../../components/ContactForm";
import HomeVid from "../../assets/videos/home.mp4";
import Firefly from "../../assets/images/firefly.png";
import Snapshot from "../../assets/images/landingCards/snapshot.png";
import NerdyKid from "../../assets/images/other/NerdThinkKid.png";
import "./style.css";

function showQuoteForm() {
    console.log("show Quote")
    $("#saltEmbed").removeClass("hide");
    showModal();
}

function showContactForm() {

    showModal();
}

function showModal() {
    $(".modal").removeClass("hide");
    $("body").css("overflow", "hidden");
}

const Home = () => {


    return(
        <div id="landingContainer">
            <ModalCard><SaltEmbed /><ContactForm /></ModalCard>
            <Header custClass="headerCard" vidClass="headerVideo" vidSrc={ HomeVid } handleClick={showQuoteForm} imgClass="hide">
                <div>
                    <Card
                        cardClass="card"
                        src={ Firefly }
                        h2="A bright idea:"
                        p1="We'll shop your home and auto insurance for you."
                        p2="One agent. Lots of quotes. No hassle. Guaranteed."
                    />
                    <QuoteBtn handleClick={() => showQuoteForm()} />
                </div>
            </Header>   
            <CarrierAnimation />       
            <Navbar />
            <Spacer />
            <div id="landingCardsContainer">
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
                    <h2>Stop Wondering</h2>
                    <p>​ARE YOU SURE YOU'RE NOT OVERPAYING?</p>
                    <p>​WE CAN QUOTE YOU WITH A BUNCH OF COMPANIES ALL AT ONE TIME.</p>
                    <p>HERE IS A SCREENSHOT OF ONE OF OUR QUOTES. IMAGINE WHAT WE COULD DO FOR YOU!​</p>
                    <button onClick={showQuoteForm}>Try It For Yourself</button>
                </div>
                <img id="nerd" src={NerdyKid} alt="nerdy kid wandering" />
            </div>
            <Spacer />   
        </div>
    )
}

export default Home;