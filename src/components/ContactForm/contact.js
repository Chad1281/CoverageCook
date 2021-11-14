import React, { useState } from "react";
import $ from 'jquery';

import Input, { Required, Optional } from "../Input/input";
import { addDoc, collection } from "firebase/firestore/lite"; 
import db from '../../firebase';


import "./contact.css";

export default function ContactRequest() {

    
    const [contactForm, setContactForm] = useState({})

    function handleInputChange(event) {
        const { id, value } = event.target;
        setContactForm({...contactForm, [id]: value})
    }

    

    const handleFormSubmit = async (event) => {

        event.preventDefault();

        if (contactForm.fname && contactForm.email && contactForm.phone) {
            console.log(contactForm.fname)

            try {
            const docRef = await addDoc(collection(db, "mail"), {
                to: 'ccook@fireflyagency.com',
                message: {
                  subject: 'Contact Request',
                  html: `Name: ${contactForm.fname}<br />
                  Email: ${contactForm.email}<br />
                  Phone: ${contactForm.phone}<br />
                  Comment: ${contactForm.comment}`
                }
            });

            console.log("Document written with ID: ", docRef.id);
            } catch (e) {
            console.error("Error adding document: ", e);
            }
            $("#contactForm").addClass("hide");
            $("#sent").removeClass("hide");
            setTimeout(function(){ window.location.reload(); $("#contactFrom").removeClass("hide"); $("#sent").addClass("hide") }, 5000);
        }
    }

    return(
        <div className='contact hide'>
            <div className='contactCard'>
                <div id='contactPhone'>
                    <a href='tel:512-312-7360' title='Office Number'>
                        <p>Call</p>
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
            <div id="contactForm">
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
                    <button className='white' id='submit' type='submit' disabled={!(contactForm.fname && contactForm.email && contactForm.phone)}>Submit</button>
                </form>
            </div>
            <p id="sent" className="hide">Your request was sent successfully!</p>
        </div>
    )
}