import React from "react";
import "./meerArt.scss";
import beach from "../../../assets/images/BlodpgSec2a.png";
import { BsDot } from "react-icons/bs";
import art from "../../../assets/images/BlodpgSec2b.png";
import swimming from "../../../assets/images/BlodpgSec2c.png";
import tower from "../../../assets/images/BlodpgSec2d.png";

export default function MeerArt() {
  return (
    <div>
      <div className="container">
        <div className="meerArt">
          <h2>Meer artikelen</h2>
          <div className="art-booking">
            <div className="arts-place">
              <div className="info-art">
                <img src={beach} alt="" />
                <div className="info-placeArt">
                  <h3>Wat mij nog steeds verbaast over de Spanjaarden</h3>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                  <div className="timing-steed">
                    <p>15 December 2020</p>
                    <BsDot className="iconDot" />
                    <span> 5 min leestijd</span>
                  </div>
                </div>
              </div>
              <div className="info-art">
                <img src={art} alt="" />
                <div className="info-placeArt">
                  <h3>Wat mij nog steeds verbaast over de Spanjaarden</h3>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                  <div className="timing-steed">
                    <p>15 December 2020</p>
                    <BsDot className="iconDot" />
                    <span> 5 min leestijd</span>
                  </div>
                </div>
              </div>
              <div className="info-art">
                <img src={swimming} alt="" />
                <div className="info-placeArt">
                  <h3>Wat mij nog steeds verbaast over de Spanjaarden</h3>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                  <div className="timing-steed">
                    <p>15 December 2020</p>
                    <BsDot className="iconDot" />
                    <span> 5 min leestijd</span>
                  </div>
                </div>
              </div>
              <div className="info-art">
                <img src={tower} alt="" />
                <div className="info-placeArt">
                  <h3>Wat mij nog steeds verbaast over de Spanjaarden</h3>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                  <div className="timing-steed">
                    <p>15 December 2020</p>
                    <BsDot className="iconDot" />
                    <span> 5 min leestijd</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="book-card">
              <div className="info-card">
                <h3>Zoekprofiel</h3>
                <h4>
                  Benieuwd naar wat u kunt kopen in de beste en mooiste regio
                  van Spanje?
                </h4>
                <p>Vul uw zoekprofiel in!</p>
                <div className="button">
                  <button className="black">Zoekprofiel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
