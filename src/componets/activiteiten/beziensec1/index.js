import React from "react";
import "./bezeinsec1.scss";
import golf from "../../../assets/images/ActiviteinSec1a.png";
import garden from "../../../assets/images/ActiviteinSec1b.png";
import road from "../../../assets/images/ActiviteinSec1c.png";
import waterpark from "../../../assets/images/ActiviteinSec1d.png";
import fair from "../../../assets/images/ActiviteinSec1e.png";
import { HiArrowRightCircle } from "react-icons/hi2";

export default function Bezien() {
  return (
    <div>
      <div className="bezien-main">
        <div className="container">
          <div className="name-place-cards">
            <h3>Activiteiten & bezienswaardigheden</h3>
            <div className="place-topic">
              <div className="place-info">
                <div className="cards">
                  <img src={golf} alt="" />
                  <div className="tour-info">
                    <h3>Golfbanen</h3>
                    <p>
                      Binnen een straal van 50 kilometer ontstond in de
                      afgelopen jaren een golfparadijs met ruim twintig ...
                    </p>
                  </div>
                  <div className="icons">
                    <HiArrowRightCircle className="icon" />
                  </div>
                </div>
                <div className="cards">
                  <img src={garden} alt="" />
                  <div className="tour-info">
                    <h3>Natuurparken</h3>
                    <p>
                      Wat zijn de mooiste plaatsen en natuurgebieden in Murcia?
                      Puurspanje geeft u een overzicht van de belangrijkste...
                    </p>
                  </div>
                  <div className="icons">
                    <HiArrowRightCircle className="icon" />
                  </div>
                </div>
                <div className="cards">
                  <img src={road} alt="" />
                  <div className="tour-info">
                    <h3>Uitstapjes</h3>
                    <p>
                      Er zijn verschillen shopping centers in de regio. Deze
                      winkelcentra hebben een groot aanbod aan modeketens en een
                      ruim ...
                    </p>
                  </div>
                  <div className="icons">
                    <HiArrowRightCircle className="icon" />
                  </div>
                </div>
              </div>
              <div className="place-info">
                <div className="cards">
                  <img src={waterpark} alt="" />
                  <div className="tour-info">
                    <h3>Golfbanen</h3>
                    <p>
                      Binnen een straal van 50 kilometer ontstond in de
                      afgelopen jaren een golfparadijs met ruim twintig ...
                    </p>
                  </div>
                  <div className="icons">
                    <HiArrowRightCircle className="icon" />
                  </div>
                </div>
                <div className="cards">
                  <img src={fair} alt="" />
                  <div className="tour-info">
                    <h3>Natuurparken</h3>
                    <p>
                      Wat zijn de mooiste plaatsen en natuurgebieden in Murcia?
                      Puurspanje geeft u een overzicht van de belangrijkste...
                    </p>
                  </div>
                  <div className="icons">
                    <HiArrowRightCircle className="icon" />
                  </div>
                </div>
                <div className="cards">
                  <img src={road} alt="" />
                  <div className="tour-info">
                    <h3>Uitstapjes</h3>
                    <p>
                      Er zijn verschillen shopping centers in de regio. Deze
                      winkelcentra hebben een groot aanbod aan modeketens en een
                      ruim ...
                    </p>
                  </div>
                  <div className="icons">
                    <HiArrowRightCircle className="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
