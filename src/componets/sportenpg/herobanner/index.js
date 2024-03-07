import React from "react";
import "./herosporten.scss";
import slide from "../../../assets/images/waterslide.png";
import race from "../../../assets/images/bicyclerace.png";
import bike from "../../../assets/images/courier.png";
import scuba from "../../../assets/images/scubadiving.png";
import garden from "../../../assets/images/rest-garden.png";
import { AiOutlineRight } from "react-icons/ai";

export default function HeroSport() {
  return (
    <div>
      <div className="container">
        <div className="infoLine">
          <p>Activiteiten</p>
          <AiOutlineRight />
          <p>Sporten</p>
        </div>
        <div className="infoSport">
          <h1>Sporten</h1>
          <p>
            Niet alleen het klimaat maar ook bezienswaardigheden zoals
            natuurparken en activiteiten als golf, strand en shoppen zijn
            natuurlijk aanwezig.
          </p>
        </div>
        <div className="hero-sport">
          <div className="sport-info">
            <div className="place-price">
              <div className="cards">
                <img src={slide} alt="" />
                <h3>Sporten</h3>
                <p>
                  Er zijn verschillen shopping centers in de regio. Deze
                  winkelcentra hebben een groot aanbod aan modeketens en een
                  ruim ...
                </p>
              </div>
              <div className="cards">
                <img src={race} alt="" />
                <h3>Fietsverhuur</h3>
                <p>
                  Binnen een straal van 50 kilometer ontstond in de afgelopen
                  jaren een golfparadijs met ruim twintig ...
                </p>
              </div>
              <div className="cards">
                <img src={bike} alt="" />
                <h3>Scooterverhuur</h3>
                <p>
                  Wat zijn de mooiste plaatsen en natuurgebieden in Murcia?
                  Puurspanje geeft u een overzicht van de belangrijkste...
                </p>
              </div>
            </div>
            <div className="place-price">
              <div className="cards">
                <img src={scuba} alt="" />
                <h3>Duiken</h3>
                <p>
                  Binnen een straal van 50 kilometer ontstond in de afgelopen
                  jaren een golfparadijs met ruim twintig ...
                </p>
              </div>
              <div className="cards">
                <img src={garden} alt="" />
                <h3>Golfbanen</h3>
                <p>
                  Binnen een straal van 50 kilometer ontstond in de afgelopen
                  jaren een golfparadijs met ruim twintig ...
                </p>
              </div>
              <div className="cards">
                <img src={bike} alt="" />
                <h3>Scooterverhuur</h3>
                <p>
                  Wat zijn de mooiste plaatsen en natuurgebieden in Murcia?
                  Puurspanje geeft u een overzicht van de belangrijkste...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
