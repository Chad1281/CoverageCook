import React from "react";
import CarrierImgLinks from "../../assets/data/carrierImgLinks";
import LandingCards from "../../assets/data/landingCards";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Snapshot from "../../assets/images/landingCards/snapshot.png";
import "./style.css";

const LandingPage = () => {

    

    return(
        <div id="landingContainer">
            <Header />
            <div id="carrierImgsContainer">
                <div id="carrierImgs">
                    {CarrierImgLinks.map(function(image) {
                        return(
                            <img src={image.src} alt={image.alt} /> 
                        )                            
                    })}
                </div>
            </div>
            <Navbar />
            <div className="spacer" />
            <div id="landingCardsWrapper">
                {LandingCards.map(function(card) {
                    return(
                        <div className="card">
                            <img src={card.src} alt={card.alt} />
                            <h2>{card.heading}</h2>
                            <p>{card.paragraph}</p>
                        </div>                        
                    )
                })}    
            </div>
            {/* <div className="spacer" /> */}
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
            <div className="spacer" />                        
            <Footer />
        </div>
    )
}

export default LandingPage;