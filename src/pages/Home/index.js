import React from "react";
import LandingCards from "../../assets/data/landingCards";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ModalCard from "../../components/ModalCard";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import QuoteBtn from "../../components/QuoteBtn";
import CarrierAnimation from "../../components/CarrierAnimation";
import Spacer from "../../components/Spacer";
import HomeVid from "../../assets/videos/home.mp4";
import Firefly from "../../assets/images/firefly.png";
import Snapshot from "../../assets/images/landingCards/snapshot.png";
import "./style.css";

const Home = () => {

    function showQuoteForm() {

        showModal();
    }

    function showModal() {
        
    }

    return(
        <div id="landingContainer">
            <ModalCard />
            <Header
                custClass="headerCard" 
                children={
                    <div>
                        <Card
                            src={ Firefly }
                            h2="A bright idea:"
                            p1="We'll shop your home and auto insurance for you."
                            p2="One agent. Lots of quotes. No hassle. Guaranteed." 
                        />
                        <QuoteBtn handleClick={showQuoteForm()} />
                    </div>}
                vidSrc={ HomeVid } 
            />
            <CarrierAnimation />       
            <Navbar />
            <Spacer />
            <div id="landingCardsContainer">
                <div id="landingCardsWrapper">
                    {LandingCards.map(function(card) {
                        return(
                            <Card src={ card.src } alt={ card.alt } h2={ card.h2 } p1={ card.p } />            
                        )
                    })}    
                </div>
            <button>Try It For Yourself</button>
            </div>
            
            <div id="snapshotContainer">
                <div id="snapshot">
                    <h2>Stop Wondering</h2>
                    <p>​ARE YOU SURE YOU'RE NOT OVERPAYING?</p>
                    <p>​WE CAN QUOTE YOU WITH A BUNCH OF COMPANIES ALL AT ONE TIME.</p>
                    <p>HERE IS A SCREENSHOT OF ONE OF OUR QUOTES. IMAGINE WHAT WE COULD DO FOR YOU!​</p>
                    <button>Try It For Yourself</button>
                </div>
                <img src= {Snapshot} alt="list of companies with quotes from each" />
            </div>
            <Spacer />                        
            <Footer />
        </div>
    )
}

export default Home;