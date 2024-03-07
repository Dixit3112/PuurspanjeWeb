import React from "react";
import "./latraperia.scss";
import sea from "../../../assets/images/BlodpgSec2a.png";
import forestwalk from "../../../assets/images/RagioSec4b.png";

export default function LaTraperia() {
  return (
    <div>
      <div className="container">
        <div className="laTraperia">
          <div className="info-latraperia">
            <div className="info">
              <h3>La Trapería</h3>
              <p>
                Je kunt wel zeggen dat dit de ramblas van Murcia is. In la
                Trapería gebeurt het allemaal; hier staan de cafés, de banken en
                ook de winkels en warenhuizen. Het is DE mooie historische
                straat in het centrum van Murcia, vlakbij de Kathedraal de Santa
                Maria. Eén van de bekendste gebouwen aan de Trapería is het Real
                Casino, daterend uit 1847.
              </p>
              <p>
                Aan deze kathedraal heeft men zeer lang gewerkt; de eerste steen
                werd gelegd in het jaar 1394 en is daarom ook qua architectuur
                interessant. Er zijn verschillende bouwstijlen in terug te
                vinden. De kathedraal ligt aan het plein Hernández Amores. De
                toren is wel 100 meter hoog en een typisch voorbeeld van
                Toscaanse architectuur! Het kathedraal is te bezichtigen en
                zeker de moeite waard.
              </p>
              <p>
                Een prima plek om een koffie te drinken op een leuk en typisch
                Spaans terras in Murcia is Plaza de Julián Romea. Er staat een
                theater vlakbij met de naam Romea. Het is een groot en wijd
                plein met een prachtig uitzicht over mensen.
              </p>
              <p>
                Wilt u winkelen? Ga dan naar de Gran Vía. Dit is de hoofdstraat
                met een royaal aanbod aan winkels, zowel van de bekende ketens,
                als kleine lokale winkeliers die hun producten aanbieden. Het
                palacio de San Esteban is nabij gelegen, de thuisbasis van het
                bestuur van de stad.
              </p>
            </div>
            <div className="imgs">
              <div className="slide-img">
                <div className="box1">
                  <img src={sea} alt="" />
                  <img src={forestwalk} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
