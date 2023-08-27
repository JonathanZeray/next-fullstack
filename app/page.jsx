"use client";

import Lenis from "@studio-freight/lenis";

import ScrollImages from "@components/ScrollImages";
import DancerBgVideo from "@components/DancerBgVideo";
import { WhenVisible } from "@components/WhenVisible";

import { useEffect } from "react";

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
    </>
  );
};

export default Home;
