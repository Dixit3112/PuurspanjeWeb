import React from "react";
import "./lastsec.scss";
import last from "../../../assets/images/LastHome.png";

export default function LastSec() {
  return (
    <div className="lastsec">
      <div className="container">
        <div className="main-lastSec">
          <img src={last} alt="" />
          <div className="main-spanjeInfo">
            <div className="main-faqs">
              <h4>Nog geen zoekprofiel aangemaakt?</h4>
              <p>
                Krijg automatisch de beste woningen toegestuurd op basis van uw
                persoonlijke voorkeuren.
              </p>
            </div>
            <div className="button">
              <button className="blue">Aanmaken</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
