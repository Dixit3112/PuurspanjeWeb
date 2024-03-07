import React from "react";
import "./costacolida.scss";
import { GiCheckMark } from "react-icons/gi";

export default function CostaColida() {
  return (
    <div>
      <div className="container">
        <div className="costaColida">
          <div className="wonen-costa-main">
            <h1>Wonen aan de Costa Cálida</h1>
            <div className="info-costa">
              <p>
                De Costa Calida en de Costa Blanca Zuid zijn kleine
                klimaatparadijzen. De bergen van het binnenland beschutten dit
                gebied tegen de wind en garanderen het hele jaar door aangename
                temperaturen.
              </p>
              <span>
                Denk aan een Mediterraan, subtropisch klimaat met milde
                zomertemperaturen (28-32°C) en zachte lentetemperaturen in de
                winter. Bovendien schijnt de zon er meer dan 300 dagen per jaar.
              </span>
            </div>
          </div>
          <div className="full-info">
            <div className="box-costa">
              <div className="info1">
                <GiCheckMark className="icon1" />
              </div>
              <div className="info2">
                <h4>Gemiddeld 14-31°C</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
            <div className="box-costa">
              <div className="info1">
                <GiCheckMark className="icon1" />
              </div>
              <div className="info2">
                <h4>Aan het strand</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
            <div className="box-costa">
              <div className="info1">
                <GiCheckMark className="icon1" />
              </div>
              <div className="info2">
                <h4>300 dagen zon</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
          <div className="full-info">
            <div className="box-costa">
              <div className="info1">
                <GiCheckMark className="icon1" />
              </div>
              <div className="info2">
                <h4>Warme, traditionele bevolking</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
            <div className="box-costa">
              <div className="info1">
                <GiCheckMark className="icon1" />
              </div>
              <div className="info2">
                <h4>Natuur en cultuur</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
            <div className="box-costa">
              <div className="info1">
                <GiCheckMark className="icon1" />
              </div>
              <div className="info2">
                <h4>Stabiele vastgoedmarkt</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
