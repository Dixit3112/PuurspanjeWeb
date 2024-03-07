import React from "react";
import "./contact.scss";
import { FiMail } from "react-icons/fi";
import { MdOutlinePhone } from "react-icons/md";
import { BiMap } from "react-icons/bi";

export default function Contact() {
  return (
    <div>
      <div className="container">
        <div className="contact-main">
          <div className="map-box">
            <h2>Contact</h2>
            <p className="contact">
              Heeft u vragen of wilt u ons spreken, neem dan contact met ons op.
              Wij staan voor u klaar!
            </p>
            <div className="contact-info">
              <a href="dixit.com">
                <FiMail className="icon" /> info@puurspanje.nl
              </a>
              <a href="dixit.com">
                <MdOutlinePhone className="icon" />
                +34 618245967
              </a>
              <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17213.992936496972!2d-0.8492928194487547!3d37.80189298938653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd631679188db771%3A0x36c9fb590d4968d2!2spuurspanje!5e0!3m2!1sen!2sin!4v1699692192385!5m2!1sen!2sin">
                <BiMap className="icon" />
                Avenida De La Unión, 7630730 San Javier, Murcia Spanje
                ES-B30806699
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17213.992936496972!2d-0.8492928194487547!3d37.80189298938653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd631679188db771%3A0x36c9fb590d4968d2!2spuurspanje!5e0!3m2!1sen!2sin!4v1699692192385!5m2!1sen!2sin"
              width="500"
              height="400"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="book-card">
            <div className="info-card">
              <h3>Vrijblijvend contact</h3>
              <h4>Heeft u vragen of wenst u meer informatie?</h4>
              <h4>Bel ons op +34 618245967.</h4>
              <p>
                Of laat via onderstaand contactformulier uw gegevens achter en
                ik kom z.s.m. bij u terug.
              </p>
              <div className="button">
                <button className="black">Contactformulier</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
