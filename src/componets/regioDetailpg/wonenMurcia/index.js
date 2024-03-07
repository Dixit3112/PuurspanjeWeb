import React from "react";
import "./wonenMurcia.scss";
import seahill from "../../../assets/images/ProvinceSec7a.png";

export default function WonenInMurcia() {
  return (
    <div>
      <div className="container">
        <div className="wonen-murcia-info">
          <h3>Wonen In Murcia</h3>
          <p>
            De stad is gesticht in het jaar 831 na Christus. Er werd direct een
            hoge verdedigingsmuur gebouwd van wel 15 meter hoog. Dat Murcia in
            de loop der tijd steeds belangrijker werd, is te zien aan de torens
            die de stad rijk is, er zijn er wel 95 gebouwd.
          </p>
          <p>
            Tot in de middeleeuwen waren de Moren de baas. Hierna veroverden de
            katholieken het gebied op de Moren. De moskeeën verdwenen en de
            kerken kwamen op. In het jaar 1266 kregen de gildes het hier voor
            het zeggen. Er ontstonden historische straten die we vandaag de dag
            nog kennen; <a href="dixit.com">Trapería, Platería.</a>
          </p>
          <img src={seahill} alt="" />
        </div>
      </div>
    </div>
  );
}
