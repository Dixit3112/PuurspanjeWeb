import React from "react";
import HeroProvienceOverVu from "./heroprovince";
import CostaColida from "./vonenCosta";
import CostaInfo2 from "./costacolidasec2";
import DorpenSlide from "./dorpenslide";
import Rustzon from "./rustzon";
import HetBest from "./hetbest";
import VindCosta from "./vindcosta";
import HetTeam from "./lasthetTeam";
import LastSec from "../home/lastsec";

export default function ProvinceOverVu() {
  return (
    <>
      <HeroProvienceOverVu />
      <CostaColida />
      <CostaInfo2 />
      <DorpenSlide />
      <Rustzon />
      <HetBest />
      <VindCosta />
      <HetTeam />
      <LastSec />
    </>
  );
}
