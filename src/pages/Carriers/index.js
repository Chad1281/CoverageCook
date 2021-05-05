import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import ModalCard from "../../components/ModalCard";
import SaltEmbed from "../../components/SaltEmbed";
import ContactForm from "../../components/ContactForm";
import Card from "../../components/Card";
import CarriersLogos from "../../assets/data/carrierLogos.js";
import Insurance from "../../assets/images/other/insurance.png";
import "./style.css";

export default function Carriers() {
    return(
        <div className="carriers">
            <ModalCard><SaltEmbed /><ContactForm /></ModalCard>
            <Header vidClass="hide" imgClass="headerImage" imgSrc={Insurance} />
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