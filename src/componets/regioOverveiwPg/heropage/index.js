import React from "react";
import "./heropg.scss";
import path from "../../../assets/images/RagioHero.png";
import seaDam from "../../../assets/images/RagioHero2.png";

export default function HeroRegioOverpg() {
  return (
    <div>
      <div className="container">
        <div className="hero-regio">
          <div className="info-regio-overVu">
            <h3>Spanje’s beste regio</h3>
            <p>
              Waarom wonen en investeren in de Costa Cálida en Costa Blanca Zuid
              zo aangenaam en lucratief kan zijn.
            </p>
          </div>
          <div className="img-regioVu">
            <div className="seaPath">
              <img src={path} alt="" />
              <h5>Costa Blanca Zuid</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className="seaPath">
              <img src={seaDam} alt="" />
              <h5>Costa Colida</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
