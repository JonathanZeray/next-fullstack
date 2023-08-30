"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

import ScrollImages from "@components/ScrollImages";
import DancerBgVideo from "@components/DancerBgVideo";
import { WhenVisible } from "@components/WhenVisible";
import SoundInfo from "@components/SoundInfo";
import AirpodInfo from "@components/AirpodInfo";


const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  })
  return (
    <>
      <ScrollImages />
      <WhenVisible>
        <DancerBgVideo />
      </WhenVisible>
      <SoundInfo />
    </>
  );
};

export default Home;
