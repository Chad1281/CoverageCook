import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Aegis from "../../assets/images/carriers/aegis.png";
import ASI from "../../assets/images/carriers/asi.png";
import BerkshireHathaway from "../../assets/images/carriers/berkshireHathaway.png";
import BristolWest from "../../assets/images/carriers/bristolWest.png";
import Encompass from "../../assets/images/carriers/encompass.png";
import Foremost from "../../assets/images/carriers/foremost.png";
import Guard from "../../assets/images/carriers/guard.png";
import Hagerty from "../../assets/images/carriers/hagerty.png";
import Hartford from "../../assets/images/carriers/hartford.png";
import Kemper from "../../assets/images/carriers/kemper.png";
import LibertyMutual from "../../assets/images/carriers/libertyMutual.png";
import MetLife from "../../assets/images/carriers/metLife.png";
import NationWide from "../../assets/images/carriers/nationWide.png";
import PersonalUmbrella from "../../assets/images/carriers/personalUmbrella.gif";
import Progressive from "../../assets/images/carriers/progressive.png";
import SouthWestern from "../../assets/images/carriers/southWestern.png";
import StateAuto from "../../assets/images/carriers/stateAuto.png";
import TowerHill from "../../assets/images/carriers/towerHill.png";
import Travelers from "../../assets/images/carriers/travelers.png";
import Trexis from "../../assets/images/carriers/trexis.png";
import TWIA from "../../assets/images/carriers/twia.png";
import UniversalNorthAmerica from "../../assets/images/carriers/universalNorthAmerica.png";
import USLI from "../../assets/images/carriers/usli.png";

const LandingPage = () => {


    return(
        <div id="landingContainer">
            <Header />
            <Navbar />
            <div id="carrierImgsContainer">
                <div id="carrierImgs">
                    <img src={ Aegis } alt="Aegis logo" />
                    <img src={ ASI } alt="ASI logo" />
                    <img src={ BerkshireHathaway } alt="Berkshire Hathaway logo" />
                    <img src={ BristolWest } alt="Bristol West logo" />
                    <img src={ Encompass } alt="Encompass logo" />
                    <img src={ Foremost } alt="Foremost logo" />
                    <img src={ Guard } alt="Guard logo" />
                    <img src={ Hagerty } alt="Hagerty logo" />
                    <img src={ Hartford } alt="Hartford logo" />
                    <img src={ Kemper } alt="Kemper logo" />
                    <img src={ LibertyMutual } alt="Liberty Mutual logo" />
                    <img src={ MetLife } alt="MetLife logo" />
                    <img src={ NationWide } alt="Nation Wide logo" />
                    <img src={ PersonalUmbrella } alt="Personal Umbrella logo" />
                    <img src={ Progressive } alt="Progressive logo" />
                    <img src={ SouthWestern } alt="South and Western logo" />
                    <img src={ StateAuto } alt="StateAuto logo" />
                    <img src={ TowerHill } alt="Tower Hill logo" />
                    <img src={ Travelers } alt="Travelers logo" />
                    <img src={ Trexis } alt="Trexis logo" />
                    <img src={ TWIA } alt="Texas Windstorm Insurance Association logo" />
                    <img src={ UniversalNorthAmerica } alt="Universal North America logo" />
                    <img src={ USLI } alt="USLI logo" />
                </div>
            </div>
            
        </div>
    )
}

export default LandingPage;