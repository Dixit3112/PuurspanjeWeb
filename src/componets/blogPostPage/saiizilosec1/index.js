import React from "react";
import "./saiizilo.scss";
import penthouse from "../../../assets/images/blogpostpgSec1a.png";
import openbed from "../../../assets/images/blogpostpgSec1b.png";
import chill from "../../../assets/images/blogpostpgSec1c.png";

export default function Saiizilo() {
  return (
    <div>
      <div className="container">
        <div className="info-img">
          <div className="info-saizilo">
            <p>
              De Salzillo-processie is wel de belangrijkste processie met de
              Semana Santa van Murcia. Bij de eerste zonnestraal op goede
              vrijdag om zeven uur wordtvolgens de standaard van het
              broederschap- het gezicht van de Dolorosa de Moeder der Smarten.{" "}
            </p>
            <p>
              Tot in de middeleeuwen waren de Moren de baas. Hierna veroverden
              de katholieken het gebied op de Moren. De moskeeën verdwenen en de
              kerken kwamen op. In het jaar 1266 kregen de gildes het hier voor
              het zeggen. Er ontstonden historische straten die we vandaag de
              dag nog kennen; Trapería, Platería.
            </p>
          </div>
          <div className="center-img">
            <div className="img-saizilo">
              <div className="first">
                <img src={penthouse} alt="" />
              </div>
              <div className="imgs">
                <img src={openbed} alt="" />
                <img src={chill} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
