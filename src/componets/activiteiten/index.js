import React from "react";
import HeroActivitein from "./herobanner";
import Bezien from "./beziensec1";
import VeelMeer from "./veelmeer";
import Calban from "./calban";
import LastSec from "../home/lastsec";
// import { Outlet } from "react-router-dom";

export default function MainActivity() {
  return (
    <>
      <HeroActivitein />
      <Bezien />
      <VeelMeer />
      <Calban />
      <LastSec />
    </>
  );
}
