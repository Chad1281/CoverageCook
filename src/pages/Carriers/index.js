import React from "react";
import Card from "../../components/Card";
import CarriersLogos from "../../assets/data/carrierLogos.js";
import "./style.css";
import Spacer from "../../components/Spacer";

export default function Carriers() {
    return(
        <div className="carriers">
            <Spacer custClass="whiteBackground" />
            <div className="carriersContainer">
                {CarriersLogos.map(function(card) {
                    let csN = "tel:"+card.csN;
                    let billN = "tel:"+card.billN;
                    let claimsN = "tel:"+card.claimsN;
                    return(
                        <Card 
                        cardClass="carriersCard" 
                        src={ card.src } 
                        alt={ card.alt }
                        h2={ card.h2 }
                        >
                            <p>Customer Service:<br /><a href={csN}>{card.csN}</a></p>
                            <p>Billing:<br /><a href={billN}>{card.billN}</a></p>
                            <p>Claims:<br /><a href={claimsN}>{card.claimsN}</a></p>    
                        </Card>                        
                    )
                })}
            </div>                
        </div>
    )
}