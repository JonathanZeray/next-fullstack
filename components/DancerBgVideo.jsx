"use client";

import React from "react";
import SplitType from "split-type";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const DancerBgVideo = () => {
  gsap.registerPlugin(ScrollTrigger);

  const activeSpanRef = useRef(null);

  useEffect(() => {
    const SplitTypes = document.querySelectorAll(".split");
    SplitTypes.forEach((char, i) => {
      const text = new SplitType(char, { types: "words" });

      gsap.from(text.words, {
        // opacity: 0.2,
        scrollTrigger: {
          trigger: char,
          start: "top 70%",
          end: "top 20%",
          scrub: true,
          markers: true,
          onEnter: () => {
            if(activeSpanRef.current) {
              gsap.to(activeSpanRef.current, {
                opacity: 0.2,
              });
            }
            gsap.to(text.words, {
              opacity: 1, // Set opacity to 1 when entering the range
            });
            activeSpanRef.current = text.words;
          },
          onLeave: () => {
            gsap.to(text.words, {
              opacity: 0.2, // Set opacity back to 0.2 when leaving the range
            });
          },
        },
        // duration: 0.2,  
        // opacity: 0.2,
        // stagger: 0.3,
      });
    });
  }, []);
  return (
    <>
      <div className="relative flex justify-center top-0 left-0 w-full h-[200vh] sm:h-[300vh] -z-1">
        <video
          className="sticky top-0 sm:w-full w-screen h-screen object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/assets/video/dancer.mp4" type="video/mp4" />
        </video>
        <div className="absolute sm:inset-y-1/4 inset-y-2/4 ml-4 mr-12 sm:mx-28">
          <h2 className="z-1 font-semibold sm:text-6xl text-3xl sm:text-center text-left text-white">
            <span className="split">
              Up to 2 times more active noise cancellation compared to the
              previous generation.
            </span>
            <br />
            <span className="split">
              Spatial sound is even more personalized. With touch controls, you
              adjust the volume with a swipe.
            </span>
            <br />
            <span className="split">
              And the battery life takes a significant step forward – one charge
              lasts for 6 hours of use.
            </span>
          </h2>
        </div>
      </div>
      <div className="h-screen bg-white"></div>
    </>
  );
};

export default DancerBgVideo;
