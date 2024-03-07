import React from "react";
import "./rustzon.scss";
import farm from "../../../assets/images/ProvinceSec6a.png";
import farm2 from "../../../assets/images/ProvinceSec6b.png";
import farm3 from "../../../assets/images/woningen3.png";

export default function Rustzon() {
  return (
    <div>
      <div className="container">
        <div className="rustZon">
          <h2>Rust, zon, zee & strand</h2>
          <div className="info-rust">
            <p>
              De Costa Cálida bevindt zich aan de kust van de regio Murcia. Deze
              kustlijn van ongeveer 250 kilometer lang kent vele inhammen en
              smalle ongerepte stranden met adembenemende berggebieden. Het weer
              is er prachtig en doordat deze plek nog niet wordt overspoeld met
              toeristen, is het er heerlijk vertoeven.
            </p>
            <p>
              In het hoogseizoen hoeft u niet bang te zijn om uw plekje op het
              strand, op het terras of in een restaurant kwijt te raken aan
              toeristen. Murcia biedt kleine vissersdorpjes, nationale parken en
              de gelijknamige, culturele hoofdstad Murcia.
            </p>
          </div>
        </div>
        <div className="name-place-cards">
          <h2>Woningen aan de Costa Cálida</h2>
          <div className="place-price">
            <div className="cards">
              <img src={farm} alt="" />
              <h3>Luxe villa in Alicante</h3>
              <p>€ 550.000</p>
            </div>
            <div className="cards">
              <img src={farm2} alt="" />
              <h3>Luxe villa in Alicante</h3>
              <p>€ 550.000</p>
            </div>
            <div className="cards">
              <img src={farm3} alt="" />
              <h3>Luxe villa in Alicante</h3>
              <p>€ 550.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
