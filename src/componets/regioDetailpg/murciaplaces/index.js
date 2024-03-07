import React from "react";
import "./murciaplaces.scss";
import place1 from "../../../assets/images/murciaplace1.png";
import place2 from "../../../assets/images/murciaplace2.png";
import place3 from "../../../assets/images/murciaplace3.png";
import place4 from "../../../assets/images/murciaplace4.png";
import place5 from "../../../assets/images/murciaplace5.png";
import place6 from "../../../assets/images/murciaplace6.png";

export default function MurciaPlaces() {
  return (
    <div>
      <div className="container">
        <div className="places-prices">
          <h2>Uitgelichte woningen in Murcia</h2>
          <div className="center-place-img">
            <div className="name-place-cards">
              <div className="place-price">
                <div className="cards">
                  <img src={place1} alt="" />
                  <h3>Luxe villa in Alicante</h3>
                  <p>€ 550.000</p>
                </div>
                <div className="cards">
                  <img src={place2} alt="" />
                  <h3>Luxe villa in Alicante</h3>
                  <p>€ 550.000</p>
                </div>
                <div className="cards">
                  <img src={place3} alt="" />
                  <h3>Luxe villa in Alicante</h3>
                  <p>€ 550.000</p>
                </div>
              </div>
            </div>
            <div className="name-place-cards">
              <div className="place-price">
                <div className="cards">
                  <img src={place4} alt="" />
                  <h3>Luxe villa in Alicante</h3>
                  <p>€ 550.000</p>
                </div>
                <div className="cards">
                  <img src={place5} alt="" />
                  <h3>Luxe villa in Alicante</h3>
                  <p>€ 550.000</p>
                </div>
                <div className="cards">
                  <img src={place6} alt="" />
                  <h3>Luxe villa in Alicante</h3>
                  <p>€ 550.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
