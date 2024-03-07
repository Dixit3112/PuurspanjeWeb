import React from "react";
import "./bestspanje.scss";
import image from "../../../assets/images/ProvinceSec4a.png";
import image1 from "../../../assets/images/ProvinceSec4b.png";
import image2 from "../../../assets/images/ProvinceSec4c.png";

export default function BestSpanje() {
  return (
    <div className="bestSpanje">
      <div className="container">
        <div className="flex-contain">
          <div className="bestResponce">
            <h2>Beste regio Spanje</h2>
          </div>
          <div className="info-spanje">
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="flex-two">
          <div className="placeInfo">
            <h2>Huis kopen aan de Costa Cálida</h2>
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
          <div className="placeInfo">
            <h2>Huis kopen aan de Costa Blanca</h2>
            <div className="infoPlace-flex">
              <div className="place">
                <div className="flex-mid">
                  <img src={image} alt="" />
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
                  <img src={image1} alt="" />
                  <div className="placeName">
                    <span>San Pedro del Pinatar</span>
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
                    <span>Altaona Village</span>
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
        <hr />
      </div>
    </div>
  );
}
