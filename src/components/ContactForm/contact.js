import React, { useState } from "react";

import Input, { Required, Optional } from "../Input/input";

import "./contact.css";

export default function ContactRequest() {
    
    const [contactForm, setContactForm] = useState({})

    function handleInputChange(event) {
        const { id, value } = event.target;
        setContactForm({...contactForm, [id]: value})
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (contactForm.fname && contactForm.email && contactForm.phone) {
            console.log(contactForm.comment)
        }
    }

    return(
        <div className='contact hide'>
            <div className='contactCard'>
                <div id='contactPhone'>
                    <a href='tel:512-312-7360' title='Office Number'>
                        <p>Call Chad Cook</p>
                        <p>512-312-7360</p>
                    </a>
                </div> 
                <div id='contactEmail'>
                    <a href='mailto:ccook@fireflyagency.com' title='Email'>
                        <p>Email</p>
                        <p>ccook@fireflyagency.com</p>
                    </a>
                </div> 
            </div>
            <h2>Send Message</h2>
            <form onSubmit={handleFormSubmit}> 
                <Input element="input" id="fname" type="text" placeholder="Full Name" onChange={handleInputChange} />
                <Required />
                <Input element="input" id="email" type="text" placeholder="Email Address" onChange={handleInputChange} />
                <Required />
                <Input element='input' id='phone' type='tel' placeholder='Phone Number' onChange={handleInputChange} />
                <Required />
                <Input element='textarea' id='comment' placeholder='Comments or Feedback' onChange={handleInputChange} />
                <Optional />
                <button className='white' id='submit' type='submit'>Submit</button>
            </form>
        </div>
    )
}