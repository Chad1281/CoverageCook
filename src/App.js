import React from "react";
import { Router, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
// import Header from "./components/Header";
// import Navbar from "./components/Navbar";

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
    <>
      {/* <Switch> */}
        <Home />
      {/* </Switch> */}
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
    </>
  );
}

export default App;
