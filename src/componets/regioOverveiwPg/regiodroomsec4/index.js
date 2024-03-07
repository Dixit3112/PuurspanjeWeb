import React from "react";
import "./eendroom.scss";
import beach from "../../../assets/images/RagioSec3a.png";
import chid from "../../../assets/images/RagioSec3b.png";
import sunset from "../../../assets/images/RagioSec3full.png";

export default function DroomEen() {
  return (
    <div>
      <div className="container">
        <div className="droom-spanje">
          <div className="droom-een">
            <div className="info-box">
              <h3>De start van een droom</h3>
              <p>
                Bent u het grijze, natte weer in België en Nederland ook zo beu?
                Droomt u van zon, zee en strand, maar ook van de rust, ver weg
                van het massatoerisme? Dan is wonen in Spanje u op het lijf
                geschreven.
              </p>
            </div>
          </div>
          <div className="droom-images">
            <div className="img-droom">
              <div className="imgs">
                <img src={beach} alt="" />
              </div>
              <div className="imgs">
                <img src={chid} alt="" />
              </div>
              <div className="first">
                <img src={sunset} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
