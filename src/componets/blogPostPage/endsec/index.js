import React from "react";
import "./endsec.scss";
import kitchen from "../../../assets/images/blogpostpgLastSec2.png";
import sea from "../../../assets/images/blogpostpgLastSec1a.png";

export default function EndSec() {
  return (
    <div>
      <div className="container">
        <div className="end-cards">
          <div className="name-place-cards">
            <h3>Gerelateerde artikelen</h3>
            <div className="main-card-flex">
              <div className="place-price">
                <div className="cards">
                  <img src={sea} alt="" />
                  <h3>Wat mij nog steeds verbaast over de Spanjaarden</h3>
                  <p>15 December 2020</p>
                </div>
                <div className="cards">
                  <img src={kitchen} alt="" />
                  <h3>Wat mij nog steeds verbaast over de Spanjaarden</h3>
                  <p>15 December 2020</p>
                </div>
              </div>
              <div className="sntr-card">
                <div className="book-cards">
                  <div className="info-booking">
                    <div className="ques">
                      <h3>Kopen in Spanje?</h3>
                      <h6>
                        Benieuwd naar wat je kunt kopen in de beste regio van
                        Spanje?
                      </h6>
                    </div>
                    <p>
                      Maak een zoekprofiel aan en ontvang kosteloos en
                      vrijblijvend een persoonlijke top 5.
                    </p>
                  </div>
                  <div className="button">
                    <button className="black">ZoekProfiel</button>
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
