import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import CarriersLogos from "../../assets/data/carrierLogos.js";
import Insurance from "../../assets/images/other/insurance.png";
import "./style.css";

export default function Carriers() {
    return(
        <div className="carriers">
            <Header custClass="carrierHead" vidClass="hide" imgClass="headerImage" imgSrc={Insurance}>
                <h2>Insurance Carriers</h2>
            </Header>
            <Navbar />
            <div className="carriersContainer">
                {CarriersLogos.map(function(card) {
                    return(
                        <Card 
                        cardClass="carriersCard" 
                        src={ card.src } 
                        alt={ card.alt }
                        h2={ card.h2 }
                        >
                            <p>Customer Service:<br /><a href="tel:" {...card.csN}>{card.csN}</a></p>
                            <p>Billing:<br /><a href="tel:" {...card.billN}>{card.billN}</a></p>
                            <p>Claims:<br /><a href="tel:" {...card.claimsN} alt="Claims Number">{card.claimsN}</a></p>    
                        </Card>                        
                    )
                })}
            </div>
                
        </div>
    )
}