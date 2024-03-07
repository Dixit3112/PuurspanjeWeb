import React from "react";
import "./verkenbest.scss";
import farm from "../../../assets/images/ProvinceSec6a.png";
import farm2 from "../../../assets/images/ProvinceSec6b.png";
import farm3 from "../../../assets/images/woningen3.png";

export default function VerekenBest() {
  return (
    <>
      <div className="verkenBest">
        <div className="container">
          <div className="info-verken">
            <div className="head">
              <h3>Verken het beste aanbod van woningen in Zuid-Spanje</h3>
            </div>
            <div className="info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="name-place-cards">
            <h3>Uitgelichte woningen in Spanje</h3>
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
    </>
  );
}
