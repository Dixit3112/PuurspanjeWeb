import React from "react";
import HeroRegioOverpg from "./heropage";
import BestRegio from "./bestregiosec1";
import BestRegioCards from "./bestregiosec2";
import DroomSpanje from "./droomspanje";
import DroomEen from "./regiodroomsec4";
import WaaromDeze from "./waaromDeze";
import Vetaalbjar from "./betaalbaar";
import VeelMeer from "./meerInfo";

export default function RegioOverVeiw() {
  return (
    <>
      <HeroRegioOverpg />
      <BestRegio />
      <BestRegioCards />
      <DroomSpanje />
      <DroomEen />
      <WaaromDeze />
      <Vetaalbjar />
      <VeelMeer />
    </>
  );
}
