import React from "react";
import "./footer.scss";
import logo from "../../assets/logo/Group.png";
import img3 from "../../assets/images/footer.png";
import logo1 from "../../assets/icons/elsevier.png";
import logo5 from "../../assets/icons/second.png";
import logo2 from "../../assets/icons/fd-1.png";
import logo3 from "../../assets/icons/rtl4-1.png";
import logo4 from "../../assets/icons/rtlz.png";
import { BsFacebook, BsArrowRightShort } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";
import { BiLogoInstagram } from "react-icons/bi";
import { MdSportsBasketball } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="container">
        <div className="flex-between">
          <div className="profile">
            <img src={logo} alt="" />
          </div>
          <div className="icons">
            <Link to={"/mainSport"}>
              <MdSportsBasketball className="icon" />
            </Link>
            <BsFacebook className="icon" />
            <ImTwitter className="icon" />
            <BiLogoInstagram className="icon" />
          </div>
        </div>
        <div className="flex-profile">
          <div className="profile1">
            <div className="profile-image">
              <img src={img3} alt="" className="w-96 rounded-full" />
            </div>
            <div className="profile-content">
              <p className="mail-id">info@puurspanje.nl</p>
              <span>+34 618245967</span>
            </div>
          </div>
          <div className="main-content">
            <p className="laato">Ontvang de laatste informatie</p>
            <span>
              97% van onze abonnees beoordeelt onze nieuwsbrief als nuttig en
              positief.
            </span>
            <div className="input-icon">
              <input type="email" placeholder="Email Address" />
              <BsArrowRightShort className="icon" />
            </div>
          </div>
        </div>
        <div className="footer-grid">
          <div className="footer-text">
            <div className="flex">
              <p>Menu</p>
              <i class="bi bi-list icon"></i>
            </div>
            <a href="dixit.com">Meer in de regio</a>
            <a href="dixit.com">Verhuurgarantie</a>
            <a href="dixit.com">Aanbod Huizen Spanje</a>
            <a href="dixit.com">Zoekprofiel</a>
            <a href="dixit.com">Over</a>
          </div>
          <div className="footer-text">
            <p>Ontdek</p>
            <a href="dixit.com">Events</a>
            <a href="dixit.com">Referenties</a>
            <a href="dixit.com">Blog</a>
            <a href="dixit.com">Contact</a>
            <a href="dixit.com">Cabo Roig</a>
            <a href="dixit.com">Puurspanje Wielerteam</a>
          </div>
          <div className="footer-text">
            <p>Costa Calida</p>
            <a href="dixit.com">San Javier</a>
            <a href="dixit.com">el Carmoli</a>
            <a href="dixit.com">Dolores de Pacheco</a>
            <a href="dixit.com">Cabo de Palos</a>
            <a href="dixit.com">la Manga del Mar Menor</a>
            <a href="dixit.com">la Peraleja Golf</a>
            <a href="dixit.com">la Serena Golf</a>
            <a href="dixit.com">lo Pagan</a>
            <a href="dixit.com">lo Romero Golf</a>
            <a href="dixit.com">los Belones</a>
            <a href="dixit.com">los Urrutias</a>
            <a href="dixit.com">Mar Menor Golf</a>
            <a href="dixit.com">Playa Honda</a>
            <a href="dixit.com">Roda Golf</a>
          </div>
          <div className="footer-text">
            <p></p>
            <a href="dixit.com">San Pedro del Pinatar</a>
            <a href="dixit.com">Santiago de la Ribera</a>
            <a href="dixit.com">Sucina</a>
            <a href="dixit.com">Cartagena</a>
            <a href="dixit.com">San Juan de los Terreros</a>
            <a href="dixit.com">Aguilas</a>
            <a href="dixit.com">Altaona Village</a>
            <a href="dixit.com">Mircia</a>
            <a href="dixit.com">Mazarron</a>
            <a href="dixit.com">los Alcazares</a>
            <a href="dixit.com">Hacienda del Alamo</a>
          </div>
          <div className="footer-text">
            <p>Costa Calida</p>
            <a href="dixit.com">San Javier</a>
            <a href="dixit.com">el Carmoli</a>
            <a href="dixit.com">Dolores de Pacheco</a>
            <a href="dixit.com">Cabo de Palos</a>
            <a href="dixit.com">la Manga del Mar Menor</a>
            <a href="dixit.com">la Peraleja Golf</a>
            <a href="dixit.com">la Serena Golf</a>
            <a href="dixit.com">lo Pagan</a>
            <a href="dixit.com">lo Romero Golf</a>
            <a href="dixit.com">los Belones</a>
            <a href="dixit.com">los Urrutias</a>
            <a href="dixit.com">Mar Menor Golf</a>
            <a href="dixit.com">Playa Honda</a>
            <a href="dixit.com">Roda Golf</a>
          </div>
          <div className="footer-text">
            <p></p>
            <a href="dixit.com">San Pedro del Pinatar</a>
            <a href="dixit.com">Santiago de la Ribera</a>
            <a href="dixit.com">Sucina</a>
            <a href="dixit.com">Cartagena</a>
            <a href="dixit.com">San Juan de los Terreros</a>
            <a href="dixit.com">Aguilas</a>
            <a href="dixit.com">Altaona Village</a>
            <a href="dixit.com">Mircia</a>
            <a href="dixit.com">Mazarron</a>
            <a href="dixit.com">los Alcazares</a>
            <a href="dixit.com">Hacienda del Alamo</a>
          </div>
        </div>
        <div className="images">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
        </div>
        <p className="medel">Juridische mededeling</p>
      </div>
    </div>
  );
}
