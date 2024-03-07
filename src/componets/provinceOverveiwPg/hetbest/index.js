import React from "react";
import "./hetbest.scss";
import hill from "../../../assets/images/RagioSec5.png";
import seashore from "../../../assets/images/ProvinceSec7b.png";
import forest from "../../../assets/images/ProvinceSec7c.png";

export default function HetBest() {
  return (
    <div>
      <div className="container">
        <div className="hetBest">
          <div className="info-het">
            <h2>Het beste klimaat van Spanje</h2>
            <p>
              De Costa Cálida is een klein klimaatparadijs. Doordat de bergen
              het gebied beschermen tegen de wind, blijven de temperaturen er
              het hele jaar door aangenaam. De zon schijnt er wel meer dan 300
              dagen per jaar en het klimaat kent milde zomertemperaturen en een
              zachte winter.
            </p>
          </div>
          <div className="center-img">
            <div className="imgHet">
              <div className="first">
                <img src={hill} alt="" />
              </div>
              <div className="imgs">
                <img src={seashore} alt="" />
                <img src={forest} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
