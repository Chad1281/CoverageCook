import React from "react";
import CarrierImgLinks from "../../assets/data/carrierImgLinks";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import "./style.css";

const LandingPage = () => {


    return(
        <div id="landingContainer">
            <Header />
            <Navbar />
            <div className="spacer" />
            <div id="carrierImgsContainer">
                <div id="carrierImgs">
                    {CarrierImgLinks.map(function(image) {
                        return(
                            <img src={image.src} alt={image.alt} /> 
                        )                            
                    })}
                </div>
            </div>
        </div>
    )
}

export default LandingPage;