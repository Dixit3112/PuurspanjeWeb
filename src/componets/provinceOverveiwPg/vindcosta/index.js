import React from "react";
import "./vindcosta.scss";
import pic from "../../../assets/images/Ellipse 8.png";
import { AiTwotoneStar } from "react-icons/ai";

export default function VindCosta() {
  return (
    <div>
      <div className="container">
        <div className="vind-costa">
          <div className="costaQue-ans">
            <h2>Hoe vind ik een huis aan de Costa Cálida?</h2>
            <div className="que-costa">
              <p>
                Weet u al zeker dat uw droomhuis aan de Costa Cálida staat? Maak
                dan eenvoudig een zoekprofiel aan en geef uw wensen aan ons
                door. Ons team maakt een persoonlijke selectie van de huizen in
                de regio die voldoen aan deze eisen. U ontvangt de top 5 binnen
                24 uur in uw mailbox. Zit er een match tussen?
              </p>
              <div className="ans-costa">
                <p>
                  Dan kunt u een bezichtigingsreis boeken waarbij u samen met
                  ons meerdere woningen gaat bekijken. Maak eenvoudig een
                  zoekprofiel aan via onderstaande button en wie weet heeft u
                  binnenkort uw droomwoning in de Spaanse zon gevonden.
                </p>
                <a href="dixit.com">Zoekprofiel aanmaken</a>
              </div>
            </div>
          </div>
          <div className="value-cards">
            <div className="veiwCard">
              <div className="cards">
                <div className="first-box">
                  <img src={pic} alt="" />
                  <div className="name-value">
                    <h4>Rita & Curd</h4>
                    <div className="value-icons">
                      <AiTwotoneStar className="icon" />
                      <AiTwotoneStar className="icon" />
                      <AiTwotoneStar className="icon" />
                      <AiTwotoneStar className="icon" />
                      <AiTwotoneStar className="icon" />
                    </div>
                  </div>
                </div>
                <div className="info-card">
                  <p>
                    Puurspanje Ons avontuur begon in 2006 ! Samen met vrienden
                    op zoek naar een tweede huis in Spanje. Het liefst naast
                    elkaar! Wij kwamen in contact met Puurspanje en nog een
                    andere makelaar…
                  </p>
                  <a href="dixit.com">Lees meer</a>
                </div>
              </div>
              <div className="cards">
                <div className="first-box">
                  <img src={pic} alt="" />
                  <div className="name-value">
                    <h4>Marcel, Angelique, Pernila en Melanie van Rijn</h4>
                    <div className="value-icons">
                      <AiTwotoneStar className="icon" />
                      <AiTwotoneStar className="icon" />
                      <AiTwotoneStar className="icon" />
                      <AiTwotoneStar className="icon" />
                      <AiTwotoneStar className="icon" />
                    </div>
                  </div>
                </div>
                <div className="info-card">
                  <p>
                    Puurspanje Ons avontuur begon in 2006 ! Samen met vrienden
                    op zoek naar een tweede huis in Spanje. Het liefst naast
                    elkaar! Wij kwamen in contact met Puurspanje en nog een
                    andere makelaar…
                  </p>
                  <a href="dixit.com">Lees meer</a>
                </div>
              </div>
              <div className="cards">
                <div className="first-box">
                  <img src={pic} alt="" />
                  <div className="name-value">
                    <h4>Sonja & David Jongbloed</h4>
                    <div className="value-icons">
                      <AiTwotoneStar className="icon" />
                      <AiTwotoneStar className="icon" />
                      <AiTwotoneStar className="icon" />
                      <AiTwotoneStar className="icon" />
                      <AiTwotoneStar className="icon" />
                    </div>
                  </div>
                </div>
                <div className="info-card">
                  <p>
                    Puurspanje Ons avontuur begon in 2006 ! Samen met vrienden
                    op zoek naar een tweede huis in Spanje. Het liefst naast
                    elkaar! Wij kwamen in contact met Puurspanje en nog een
                    andere makelaar…
                  </p>
                  <a href="dixit.com">Lees meer</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
