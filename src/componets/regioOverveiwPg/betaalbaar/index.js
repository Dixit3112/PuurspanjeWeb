import React from "react";
import "./betal.scss";
import beach from "../../../assets/images/RagioSec5.png";

export default function Vetaalbjar() {
  return (
    <div>
      <div className="container">
        <div className="vetalbjar">
          <div className="info-vetaal">
            <h3>Rustig & betaalbaar</h3>
            <div className="info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
                neque quis mauris commodo volutpat et lobortis augue. Nulla
                facilisi. Sed eu elit a ligula euismod facilisis sit amet
                blandit dui. Curabitur lacus nunc, gravida sed neque nec,
                interdum dapibus nibh.
              </p>
              <p>
                Donec blandit, neque ut iaculis accumsan, turpis dui eleifend
                turpis, ut porta eros lectus quis ex. Pellentesque posuere dui
                aliquet ipsum ultrices congue. Ut viverra bibendum mi, non
                pulvinar velit consectetur vitae.
              </p>
            </div>
          </div>
          <div className="img-vetaal">
            <img src={beach} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
