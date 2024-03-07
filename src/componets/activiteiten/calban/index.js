import React from "react";
import "./calban.scss";
import sea from "../../../assets/images/ActiviteinSec3.png";
import { HiArrowRightCircle } from "react-icons/hi2";
import forest from "../../../assets/images/ActiviteinSec3-2.png";

export default function Calban() {
  return (
    <div className="calban">
      <div className="container">
        <div className="main-calban">
          <div className="img-info">
            <img src={sea} alt="" />
            <div className="info-calban">
              <h3>Calblanque</h3>
              <p>
                Stel je een afgelegen strand van gouden zand, omgeven door
                heuvels bedekt met prachtige flora en fauna. Als dit is uw idee
                van het paradijs, dan Calblanque National Park is voor jou.
              </p>
              <HiArrowRightCircle className="icon" />
            </div>
          </div>
          <div className="img-forest">
            <img src={forest} alt="" />
            <div className="info-forest">
              <h3>Sierra Espuña</h3>
              <p>
                Stel je een afgelegen strand van gouden zand, omgeven door
                heuvels bedekt met prachtige flora en fauna. Als dit is uw idee
                van het paradijs, dan Calblanque National Park is voor jou.
              </p>
              <a href="dixit.com">Less meer</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
