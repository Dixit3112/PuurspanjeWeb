import React from "react";
import "./hero.scss";
import { MdNavigateNext } from "react-icons/md";
import farm from "../../../assets/images/blogpostpgHero.png";

export default function HeroBlogPost() {
  return (
    <div>
      <div className="container">
        <div className="blog-jaarden">
          <p>
            Blog <MdNavigateNext className="next-icon" />
            Wat mij nog steeds verbaast over de Spanjaarden
          </p>
        </div>
        <div className="hero-blog">
          <h3>Wat mij nog steeds verbaast over de Spanjaarden</h3>
          <span>
            15 December 2020 <span className="dott">.</span>
            <span> 5 min leestijd</span>
          </span>
          <p>
            Iedereen heeft wel een mening over Spanje en de inwoners van het
            land. Zo denkt men vaak in het buitenland dat Spanjaarden lui zijn
            en alleen maar van het leven willen genieten met hun fiesta, siësta
            en sangria.
          </p>
        </div>
        <div className="farm-img">
          <img src={farm} alt="" />
        </div>
      </div>
    </div>
  );
}
