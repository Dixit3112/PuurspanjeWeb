import React from "react";
import "./heroblog.scss";
import farm from "../../../assets/images/Blodpg1a.png";
import { BsDot } from "react-icons/bs";
import rocket from "../../../assets/images/Blodpg1b1.png";
import cake from "../../../assets/images/Blodpg1b2.png";
import seabridge from "../../../assets/images/Blodpg1c.png";
import art from "../../../assets/images/Blodpg1c2.png";

export default function BlogHero() {
  return (
    <div>
      <div className="container">
        <div className="center-img-info">
          <div className="hero-blogs">
            <div className="img-steeds">
              <img src={farm} alt="" />
              <div className="info-img">
                <h3>Wat mij nog steeds verbaast over de Spanjaarden</h3>
                <p className="timing-steed">
                  15 December 2020
                  <BsDot className="iconDot" />
                  <span> 5 min leestijd</span>
                </p>
              </div>
            </div>
            <div className="imgs-nog-steeds">
              <div className="box1">
                <img src={rocket} alt="" />
                <div className="info-img">
                  <h3>Wat mij nog steeds verbaast over de Spanjaarden</h3>
                  <div className="timing-steed">
                    <p>15 December 2020</p>
                    <BsDot className="iconDot" />
                    <span> 5 min leestijd</span>
                  </div>
                </div>
              </div>
              <div className="box2">
                <img src={cake} alt="" />
                <div className="info-img">
                  <h3>Wat mij nog steeds verbaast over de Spanjaarden</h3>
                  <div className="timing-steed">
                    <p>15 December 2020</p>
                    <BsDot className="iconDot" />
                    <span> 5 min leestijd</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="imgs-mij-steeds">
              <div className="box1">
                <img src={seabridge} alt="" />
                <div className="info-img">
                  <h3>Wat mij nog steeds verbaast over de Spanjaarden</h3>
                  <p className="timing-steed">
                    15 December 2020
                    <BsDot className="iconDot" />
                    <span> 5 min leestijd</span>
                  </p>
                </div>
              </div>
              <div className="box2">
                <img src={art} alt="" />
                <div className="info-img">
                  <h3>Wat mij nog steeds verbaast over de Spanjaarden</h3>
                  <p className="timing-steed">
                    15 December 2020
                    <BsDot className="iconDot" />
                    <span> 5 min leestijd</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
