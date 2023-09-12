"use client";
import { useEffect } from "react";

import ScrollImages from "@components/ScrollImages";
import DancerBgVideo from "@components/DancerBgVideo";
import { WhenVisible } from "@components/WhenVisible";
import SoundInfo from "@components/SoundInfo";


const Home = () => {
  useEffect(() => {

    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()

  }, [])

  return (
    <>
      <ScrollImages />
      <WhenVisible duration={1}>
        <DancerBgVideo />
      </WhenVisible>
      <SoundInfo />
    </>
  );
};

export default Home;
