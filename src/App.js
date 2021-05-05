import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Carriers from "./pages/Carriers";
import Footer from "./components/Footer";
import ModalCard from "./components/ModalCard";
import SaltEmbed from "./components/SaltEmbed";
import ContactForm from "./components/ContactForm";

function App() {

  function resetHeight(){
    // reset the body height to that of the inner browser
    document.body.style.height = window.innerHeight + "px";
  }
  // reset the height whenever the window's resized
  window.addEventListener("resize", resetHeight);
  // called to initially set the height.
  resetHeight();

  return (
    <Router>
      <div>        
        <ModalCard><SaltEmbed /><ContactForm /></ModalCard>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/carriers" component={Carriers} />
          </Switch>
          <Footer />
        </div>        
      </div>
    </Router>  
  );
}

export default App;
