import React from "react";
import "./header.scss";
import logo from "../../assets/logo/Group.svg";

export default function Header() {

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="main-flex">
            <div className="flex">
              <div className="icon">
                <i class="bi bi-star-fill icon-star"></i>
                <i class="bi bi-star-fill icon-star"></i>
                <i class="bi bi-star-fill icon-star"></i>
                <i class="bi bi-star-fill icon-star"></i>
                <i class="bi bi-star-fill icon-star"></i>
              </div>
              <p className="text-black">4.8/5</p>
              <span className="text-black">65 reviews on Facebook</span>
            </div>
            <div className="flex-items">
              <div className="icon">
                <i class="bi bi-telephone-inbound icon-tel"></i>
                <p>+34 6 1824 5967</p>
              </div>
              <a href="/blogingPg">Belverzoek</a>
              <a href="/contact">Contact</a>
              <a href="/login">Inloggen</a>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className="container">
          <div className="flex-header">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="flex-main">
              <div className="header-items">
                <a href="/activitypg">Aanbod</a>
                <a href="/regDetails">Regio</a>
                <a href="/provinceOverveiw">Aanpak</a>
                <a href="/blogingPg">Meer</a>
              </div>
              <div className="items">
                <h2>
                  <a href="/activitypg">Zoekprofiel</a>
                </h2>
              </div>
              <div className="menu-icon">
                <i class="bi bi-list icon-menu"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
