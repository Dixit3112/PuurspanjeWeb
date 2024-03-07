import React from "react";
import "./anjaKris.scss";
import img1 from "../../../assets/images/AnjaKris1.png";
import img2 from "../../../assets/images/AnjaKris2.png";
import img3 from "../../../assets/images/AnjaKris3.png";

export default function Anjani() {
  return (
    <div>
      <div className="container">
        <div className="anjaniSec">
          <div className="anjaKris-info">
            <div className="img-flex-sm">
              <img src={img1} alt="" className="anja" />
              <img src={img2} alt="" className="anja" />
              <img src={img3} alt="" className="anja" />
            </div>
          </div>
          <div className="center-info">
            <div className="anja-info">
              <h2>Anja & Kris</h2>
              <p>
                Dankzij Puurspanje zijn we er in de coronapandemie in geslaagd
                om een eigen droomhuis te kopen in Spanje. Ook na de koop hebben
                we nog veel aan Puurspanje. Ze zijn voor ons een fijn
                Nederlandstalig aanspreekpunt voor alle vragen over de omgeving,
                Spanje of de koop van het huis.
              </p>
              <div className="info">
                <span>Kochten een villa in Alicante in 2019</span>
              </div>
              <a href="dixit.com" target="_blank">
                Lees over deze koop
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
