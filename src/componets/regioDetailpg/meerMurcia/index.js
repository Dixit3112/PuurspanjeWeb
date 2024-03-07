import React from "react";
import "./meermurcia.scss";
import seahill from "../../../assets/images/RagioSec5.png";
import forest from "../../../assets/images/RagioSec3b.png";
import beach from "../../../assets/images/RagioSec3a.png";
import beach1 from "../../../assets/images/ProvinceSec7b.png";

export default function MeerMurcia() {
  return (
    <div>
      <div className="container">
        <div className="meerMurcia-info">
          <div className="meer-info">
            <h3>Meer over Murcia</h3>
            <p>
              Enkele eeuwen geleden werd Murcia getroffen door een verwoestende
              aardbeving. Veel belangrijke gebouwen stortten toen in. Echter
              zijn er nog steeds prachtige gebouwen bewaard gebleven.
              Voorbeelden zijn:
            </p>
            <li>
              Gebouwd door een machtige familie in de 17e eeuw, het Palacio de
              Guevara
            </li>
            <li>
              Convento de Santo Domingo is een klooster gebouwd in de 17e eeuw
            </li>
            <li>
              Een mooi paleis uit de 17e eeuw, het Palacio de los Condes de San
              Julián
            </li>
            <li>
              Castillo de Lorca. Dit is een fort gebouwd door de Moren in de 10e
              eeuw
            </li>
            <li>
              Het stadhuis is ook bewaard gebleven, gedurende de 16e eeuw deed
              het dienst als gevangenis
            </li>
            <li>
              Plaza de España is niet de bekende uit Sevilla, doch minstens zo
              prachtig, het stamt uit de 16e eeuw
            </li>
            <li>
              Een archeologische museum uit de 16e eeuw, Palacio de los
              Salazar-Rosso
            </li>
          </div>
        </div>
        <div className="meerMurcia-imgs">
          <div className="imgs">
            <div className="slide-img">
              <div className="box1">
                <img src={seahill} alt="" />
                <img src={forest} alt="" />
              </div>
              <div className="box2">
                <img src={beach} alt="" />
                <img src={beach1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
