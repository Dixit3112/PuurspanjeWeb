import React from "react";
import "./herobanner.scss";
import { BsCheckCircle } from "react-icons/bs";
import garden from "../../../assets/images/homeHero.png";

export default function HeroProvienceOverVu() {
  return (
    <div>
      <div className="container">
        <div className="heroProvience">
          <div className="head-left">
            <h3>Huis kopen Costa Cálida</h3>
          </div>
          <div className="info-right">
            <p>
              De Costa Cálida betekent letterlijk ‘warme kust’ en is een van de
              tien Spaanse Costa's. Deze Costa ligt onder Costa Blanca en boven
              Costa de Almería. Puurspanje biedt diverse huizen aan in deze
              regio van Spanje. Wanneer u bij Puurspanje een huis koopt,
              profiteert u van:
            </p>
            <div className="checkList">
              <div className="box">
                <BsCheckCircle className="icon" />
                <p>
                  De allerbeste service, zowel voor als tijdens en na de aankoop
                  van uw droomhuis
                </p>
              </div>
              <div className="box">
                <BsCheckCircle className="icon" />
                <p>
                  Een persoonlijke top 5 in uw mailbox, gebaseerd op uw
                  zoekprofiel
                </p>
              </div>
              <div className="box">
                <BsCheckCircle className="icon" />
                <p>Meer dan 15 jaar ervaring in vastgoed aan de Costa Cálida</p>
              </div>
              <div className="box">
                <BsCheckCircle className="icon" />
                <p>Een Nederlandstalige makelaar in Spanje</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-img">
        <img src={garden} alt="" />
      </div>
    </div>
  );
}
