import React from "react";
import "./waaromdeze.scss";
import houses from "../../../assets/images/RagioSec4a.png";
import forest from "../../../assets/images/RagioSec4b.png";

export default function WaaromDeze() {
  return (
    <div>
      <div className="container">
        <div className="waaromdeze">
          <h2>Waarom deze regio?</h2>
          <div className="infoRegio">
            <div className="info-first">
              <p>
                Stelt u zich even voor: een prachtig landschap met meer dan 250
                km ongerepte zandstranden, rustgevende natuurgebieden en
                authentieke Spaanse steden. Heerlijk weer in de winter en milde
                temperaturen in de zomer.
              </p>
            </div>
            <div className="info-first">
              <p>
                Denk aan een Mediterraan, subtropisch klimaat met milde
                zomertemperaturen (28-32°C) en zachte lentetemperaturen in de
                winter. Bovendien schijnt de zon er meer dan 300 dagen per jaar.
              </p>
            </div>
            <div className="info-first">
              <p>
                De Costa Calida en de Costa Blanca Zuid zijn kleine
                klimaatparadijzen. De bergen van het binnenland beschutten dit
                gebied tegen de wind en garanderen het hele jaar door aangename
                temperaturen.
              </p>
            </div>
          </div>
          <div className="info-img">
            <div className="main-card-flex">
              <div className="place-price">
                <div className="cards">
                  <img src={houses} alt="" />
                </div>
                <div className="cards">
                  <img src={forest} alt="" />
                </div>
              </div>
              <div className="cntr-card">
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
