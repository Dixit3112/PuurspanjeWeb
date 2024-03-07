import React from "react";
import "./vanpuurspanje.scss";
import street from "../../../assets/images/LastSecHome.png";

export default function VanPuur() {
  return (
    <div className="container">
      <div className="vanPuur">
        <img src={street} alt="" />
        <div className="team-spanje">
          <div className="heading">
            <h2>Het team van Puurspanje</h2>
          </div>
          <div className="info-vanTeam">
            <p>
              Een huis kopen in Spanje was nog nooit zo eenvoudig en relaxed.
              Weet u al aan welke wensen uw droomhuis moet voldoen? Maak
              eenvoudig een zoekprofiel aan. Dan sturen we u een persoonlijke
              top 5.
            </p>
            <a href="dixit.com">Ons team</a>
          </div>
        </div>
      </div>
    </div>
  );
}
