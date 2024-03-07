import React from "react";
import Herobanner from "./herobanner";
import HomeSec1 from "./homesec1";
import BestSpanje from "./daarom";
import VerekenBest from "./verkenbest";
import Waarom from "./waaromSec";
import CostaColidaSec from "./costacolida";
import Anjani from "./anjaKris";
import VanPuur from "./vanpuurspanje";
import LastSec from "./lastsec";
// import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Herobanner />
      <HomeSec1 />
      <BestSpanje />
      <VerekenBest />
      <Waarom />
      <CostaColidaSec />
      <Anjani />
      <VanPuur />
      <LastSec />
      {/* <Outlet /> */}
    </>
  );
}
