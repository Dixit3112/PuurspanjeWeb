import React from "react";
import "./wonen.scss";
import bottle from "../../../assets/images/blogpostpgSec3a.png";
import food from "../../../assets/images/blogpostpgSec3b.png";

export default function WonenMurcia() {
  return (
    <div>
      <div className="container">
        <div className="wonen">
          <div className="murcia-info">
            <div className="information">
              <h3>Wonen in Murcia</h3>
              <p>
                De Salzillo-processie is wel de belangrijkste processie met de
                Semana Santa van Murcia. Bij de eerste zonnestraal op goede
                vrijdag om zeven uur wordtvolgens de standaard van het
                broederschap- het gezicht van de Dolorosa de Moeder der Smarten.
              </p>
              <p>
                Tot in de middeleeuwen waren de Moren de baas. Hierna veroverden
                de katholieken het gebied op de Moren. De moskeeën verdwenen en
                de kerken kwamen op. In het jaar 1266 kregen de gildes het hier
                voor het zeggen. Er ontstonden historische straten die we
                vandaag de dag nog kennen; Trapería, Platería.
              </p>
              <ol>Er ontstonden historische straten:</ol>
              <ul>
                <li>Tot in de middeleeuwen waren de Moren de baas</li>
                <li>Hierna veroverden de katholieken het gebied op de Moren</li>
                <li>De moskeeën verdwenen en de kerken kwamen op</li>
                <li>
                  In het jaar 1266 kregen de gildes het hier voor het zeggen
                </li>
              </ul>
            </div>
            <div className="murcia-img">
              <div className="imgMurcia">
                <img src={bottle} alt="" />
                <img src={food} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
