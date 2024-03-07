import React from "react";
import "./hero.scss";
import golf from "../../../assets/images/golfball.png";

export default function GolfHero() {
  return (
    <div>
      <div className="container">
        <div className="golfHero">
          <div className="golf-info">
            <div className="las-golf">
              <h1>Las Colinas Golf</h1>
              <p>
                Heuvelen kenmerken deze 18 holes par 71 golfbaan, ontworpen door
                Cabell B. Robinson, ontwerper van prestigieuze golf- banen over
                de…
              </p>
            </div>
            <p>La Manga del Mar Menor, Costa Cálida, Spanje</p>
          </div>
          <img src={golf} alt="" />
        </div>
      </div>
    </div>
  );
}
