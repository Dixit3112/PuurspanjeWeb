import React from "react";
import "./herobanner.scss";

export default function Herobanner() {
  return (
    <div className="hero">
      <div className="container">
        <div className="info-spanje">
          <h3>Huis kopen in Spanje?</h3>
          <h3>Vind uw droomhuis.</h3>
        </div>
        <p className="info-aboutSpanje">
          Puurspanje is een award-winning makelaar in de Costa Cálida en Costa
          Blanca Zuid.
        </p>
        <div className="search_box">
          <div className="main-flex-itme">
            <div className="contain">
              <span>Regio</span>
              <div className="flex-contain">
                <p>Alle regio’s</p>
                <i class="bi bi-chevron-down icon-down"></i>
              </div>
            </div>
            <hr />
            <div className="contain-1">
              <div>
                <span>Van</span>
                <div className="flex-contain">
                  <p>€ 0</p>
                  <i class="bi bi-chevron-down icon-down"></i>
                </div>
              </div>
              <hr />
              <div>
                <span>Van</span>
                <div className="flex-contain">
                  <p>€ 400.000</p>
                  <i class="bi bi-chevron-down icon-down"></i>
                </div>
              </div>
            </div>
            <div className="button-flex">
              <div className="button-a">
                <div className="button">
                  <button>
                    <i class="bi bi-filter icon-filter"></i>
                    <p>Filter</p>
                  </button>
                </div>
              </div>
              <div className="button-b">
                <div className="button">
                  <button className="blue">
                    <i class="bi bi-search icon-search"></i>
                    <p>Zoeken</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
