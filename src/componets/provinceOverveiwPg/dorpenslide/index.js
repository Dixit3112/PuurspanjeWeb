import React from "react";
import "./dorpenimg.scss";
import image from "../../../assets/images/ProvinceSec4a.png";
import image1 from "../../../assets/images/ProvinceSec4b.png";
import image2 from "../../../assets/images/ProvinceSec4c.png";

export default function DorpenSlide() {
  return (
    <div>
      <div className="container">
        <div className="dorpenSlide">
          <div className="placeInfo">
            <h3>Dorpen en steden aan de Costa Cálida</h3>
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
                <div className="place">
                  <div className="flex-mid">
                    <img src={image2} alt="" />
                    <div className="placeName">
                      <span>Cartagena</span>
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
                <div className="place">
                  <div className="flex-mid">
                    <img src={image2} alt="" />
                    <div className="placeName">
                      <span>Cartagena</span>
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
