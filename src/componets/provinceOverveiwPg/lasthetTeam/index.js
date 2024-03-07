import React from "react";
import "./hetTeam.scss";
import meeting from "../../../assets/images/ProvinceLastSec1.png";
import sugest from "../../../assets/images/ProvinceLastSec2.png";

export default function HetTeam() {
  return (
    <div>
      <div className="container">
        <div className="hetTeam-info">
          <div className="infoTeam">
            <h2>Het team van Puurspanje</h2>
            <p>
              Puurspanje is een familiebedrijf dat er alles aan doet om ervoor
              te zorgen dat u uw droomhuis in Spanje vindt. We zijn meer dan een
              makelaar, want onze service stopt niet bij de aankoop van uw
              nieuwe huis. We regelen alles: van het koopcontract tot de
              verzekeringen. Maar ook als u bijvoorbeeld hulp nodig heeft bij
              het aanvragen van een Spaanse bankrekening of een goede tandarts
              of dokter zoekt in de regio. U kunt altijd bij ons terecht!
            </p>
            <a href="dixit.com">Ons Team</a>
          </div>
          <div className="img-team">
            <div className="team-img">
              <div className="work-img">
                <div className="img1">
                  <img src={meeting} alt="" />
                </div>
                <div className="img2">
                  <img src={sugest} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
