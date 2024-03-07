import React from "react";
import RegioDetailHero from "./herobannerRegDet";
import MurciaPlaces from "./murciaplaces";
import WonenInMurcia from "./wonenMurcia";
import LastSec from "../home/lastsec";
import EtenDrinken from "./etenDrinken";
import MeerMurcia from "./meerMurcia";
import LaTraperia from "./laTraperia";
import AnderePlaatsen from "./anderePlaatsen";

export default function RegioDetails() {
  return (
    <>
      <RegioDetailHero />
      <MurciaPlaces />
      <WonenInMurcia />
      <EtenDrinken />
      <MeerMurcia />
      <LaTraperia />
      <AnderePlaatsen />
      <LastSec />
    </>
  );
}
