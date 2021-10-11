import React, { Suspense } from "react";
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";
import $ from 'jquery';

import Home from "./pages/Home";
import Carriers from "./pages/Carriers";
import Kitchen from "./pages/Landing/Kitchen/Kitchen";
import Footer from "./components/Footer";
import ModalCard from "./components/ModalCard";
import NewHeader from "./components/NewHeader/NewHeader";

import './App.css';

const SaltEmbed = React.lazy(() => import('./components/SaltEmbed'));
const ContactForm = React.lazy(() => import('./components/ContactForm'));

function App() {

  function resetHeight(){
    // reset the body height to that of the inner browser
    document.body.style.height = window.innerHeight + "px";
  }
  // reset the height whenever the window's resized
  window.addEventListener("resize", resetHeight);
  // called to initially set the height.
  resetHeight();

  function showQuoteForm() {
    $("#saltEmbed").removeClass("hide");
    showModal();
  }

  function showContactForm() {
    $(".contact").removeClass("hide");
    showModal();
  }

  function showModal() {
    $(".modal").removeClass("hide");
    $(".container").addClass("noScroll");
  }

  return (
    <Router>
      <div>        
        <ModalCard>
          <Suspense fallback={<h2>Loading</h2>}>
            <SaltEmbed />
            <ContactForm />
          </Suspense>
        </ModalCard>
        <div className="container">
          <NewHeader
              quoteClick={() => showQuoteForm()}
              contactClick={() => showContactForm()}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/insurance" component={Home} />
            <Route exact path="/carriers" component={Carriers} />
            <Route exact path="/insurance/kitchen" component={Kitchen} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </div>        
      </div>
    </Router>  
  );
}

export default App;
