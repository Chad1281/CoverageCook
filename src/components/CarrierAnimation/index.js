import React from "react";
import CarrierLogos from "../../assets/data/carrierLogos";
import "./style.css";

export default function CarrierAnimation() {
    return(
        <div id="carrierLogos">
            <div id="carrierLogosContainer">
                {CarrierLogos.map(function(image) {
                    return(
                        <img src={image.src} alt={image.alt} /> 
                    )                            
                })}
            </div>
        </div>
    )
}