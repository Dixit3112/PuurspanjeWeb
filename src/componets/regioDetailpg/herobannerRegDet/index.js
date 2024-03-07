import React from "react";
import "./heroRegioDetail.scss";
import farmhill from "../../../assets/images/homeHero.png";
import { AiOutlineRight } from "react-icons/ai";

export default function RegioDetailHero() {
  return (
    <div>
      <div className="container">
        <div className="regioDetail-hero">
          <div className="main-details">
            <div className="infoLine">
              <p>Regio</p>
              <AiOutlineRight />
              <p>Costa Colida</p>
              <AiOutlineRight />
              <p>Murcia</p>
            </div>
            <div className="murcia-details">
              <h1>Murcia</h1>
              <p>
                De Salzillo-processie is wel de belangrijkste processie met de
                Semana Santa van Murcia. Bij de eerste zonnestraal op goede
                vrijdag om zeven uur wordt -volgens de standaard van het
                broederschap- het gezicht van de Dolorosa de Moeder der Smarten.{" "}
              </p>
            </div>
            <div className="murcia-img">
              <img src={farmhill} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
