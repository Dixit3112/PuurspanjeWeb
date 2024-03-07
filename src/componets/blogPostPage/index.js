import React from "react";
import HeroBlogPost from "./herobanner";
import Saiizilo from "./saiizilosec1";
import WonenMurcia from "./Wonen";
import MurciaLast from "./murcialast";
import EndSec from "./endsec";
import LastSec from "../home/lastsec";
// import { Outlet } from "react-router-dom";

export default function BlogPostPg() {
  return (
    <>
      <HeroBlogPost />
      <Saiizilo />
      <WonenMurcia />
      <MurciaLast />
      <EndSec />
      <LastSec />
    </>
  );
}
