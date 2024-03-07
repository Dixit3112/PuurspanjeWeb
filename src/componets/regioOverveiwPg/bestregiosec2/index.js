import React from "react";
import "./bestimgcards.scss";
import tapu from "../../../assets/images/RagioSec1.png";
import seaview from "../../../assets/images/RagioSec1a.png";
import seasore from "../../../assets/images/RagioSec1b.png";

export default function BestRegioCards() {
  return (
    <div>
      <div className="container">
        <div className="regio-place-cards">
          <h3 className="Heading">Uitgelichte plaatsen</h3>
          <div className="place-price">
            <div className="cards">
              <img src={tapu} alt="" />
              <h3>Murcia</h3>
              <p>
                Murcia staat bekend om de diverse bouwstijlen van veel
                historische waarde. U vindt er sprookjesachtige gebouwen, knusse
                steegjes en diverse kerken…
              </p>
            </div>
            <div className="cards">
              <img src={seaview} alt="" />
              <h3>Alicante</h3>
              <p>
                Murcia staat bekend om de diverse bouwstijlen van veel
                historische waarde. U vindt er sprookjesachtige gebouwen, knusse
                steegjes en diverse kerken…
              </p>
            </div>
            <div className="cards">
              <img src={seasore} alt="" />
              <h3>Cartagena</h3>
              <p>
                Murcia staat bekend om de diverse bouwstijlen van veel
                historische waarde. U vindt er sprookjesachtige gebouwen, knusse
                steegjes en diverse kerken…
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
