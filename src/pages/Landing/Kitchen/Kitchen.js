import React from 'react';
import $ from 'jquery';

import Jumbotron from '../../../components/Jumbotron/Jumbotron';
import KitchenImg from '../../../assets/images/landingPages/kitchen.png';
import DarkFirefly from '../../../assets/images/logos/darkFirefly.avif';
import Spacer from '../../../components/Spacer';

import './Kitchen.css';

const Kitchen = () => {
    
    function showQuoteForm() {
        $("#saltEmbed").removeClass("hide");
        showModal();
    }

    function showModal() {
        $(".modal").removeClass("hide");
        $(".container").addClass("noScroll");
    }


    return(
        <div>
            <Jumbotron 
                imgSrc={KitchenImg} 
                imgAlt="Kitchen with island" 
                logoSrc={DarkFirefly} 
                logoAlt="Dark Firefly Insurance Agency Logo"
                quoteBtnClass="grey"
                quoteClick={() => showQuoteForm()}
                custClass="kitchenJumboContent">  
                <p>Custom Insurance Coverage.</p> 
                <p>Instant Online Quotes.</p>            
                <p>Several Companies.</p> 
                <p>One Agent.</p>  
                <p>No Endless Calls.</p> 
            </Jumbotron>
            <Spacer custClass='blackBackground' />
        </div>
    )
}

export default Kitchen;