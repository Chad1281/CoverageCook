import React from "react";
import CarrierImgLinks from "../../assets/data/carrierImgLinks";
import LandingCards from "../../assets/data/landingCards";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
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
            <div className="spacer" />
                        
            <Footer />
        </div>
    )
}

export default LandingPage;