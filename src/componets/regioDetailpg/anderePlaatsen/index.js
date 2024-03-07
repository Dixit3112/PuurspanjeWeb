import React from "react";
import "./anderePlaatsen.scss";
import image from "../../../assets/images/Rectangle 1.png";
import image1 from "../../../assets/images/Rectangle 2.png";

export default function AnderePlaatsen() {
  return (
    <div>
      <div className="container">
        <div className="anderePlaatsen">
          <div className="placeInfo">
            <h3>Andere plaatsen in de buurt</h3>
            <p>
              De Costa Calida is rijk aan talloze sfeervolle, authentieke dorpen
              en steden.
            </p>
            <div className="cards">
              <div className="infoPlace-flex">
                <div className="place">
                  <div className="flex-mid">
                    <img src={image} alt="" />
                    <div className="placeName">
                      <span>Murcia</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="place">
                  <div className="flex-mid">
                    <img src={image1} alt="" />
                    <div className="placeName">
                      <span>Mazarron</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="infoPlace-flex">
                <div className="place">
                  <div className="flex-mid">
                    <img src={image} alt="" />
                    <div className="placeName">
                      <span>Murcia</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="place">
                  <div className="flex-mid">
                    <img src={image1} alt="" />
                    <div className="placeName">
                      <span>Mazarron</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
