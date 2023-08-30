"use client";

import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";

import "./AirpodInfo.css";
import Image from "next/image";

const AirpodInfo = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imgRefs = [useRef(), useRef(), useRef(), useRef()];
  useEffect(() => {
    imgRefs.forEach((imgRef) => {
      const el = imgRef.current;
      gsap.from(el, {
        opacity: 0,
        x: 30,
        duration: 1.5,
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          // markers: true,
        },
      });
    });
  }, []); // This will run only once for all images

  return (
    <>
      <div className="relative h-screen w-full flex flex-col items-center">
        <div className="w-3/4 mt-12">
          <h3 className="w-full sm:w-2/4 gray_text font-bold text-xl">
            <span className="text-container text-white">
              Four pairs of silicone tips
            </span>{" "}
            are included – now also available in size extra small to fit even
            more ears. The tips create{" "}
            <span className="text-green-500">acoustic isolation </span>
            that keeps the sounds in and ensures a secure fit for the AirPods
            Pro.
          </h3>
        </div>
        <div className="w-full sm:w-3/4 h-3/4 flex justify-around">
          <div className="flex items-center h-full" ref={imgRefs[0]}>
            <Image
              src="/assets/images/airpod_tips_xs.webp"
              width={70}
              height={70}
              alt="Picture of airpod tip"
              className="sm:mb-16 airpod_silicone_xs"
            />
            <p className="font-semibold text-green-500 mx-2 sm:mx-4">XS</p>
          </div>
          <div className="flex items-center h-full" ref={imgRefs[1]}>
            <Image
              src="/assets/images/airpod_tips_s.webp"
              width={95}
              height={90}
              alt="Picture of airpod bud"
              className="sm:mb-16 airpod_silicone_s"
            />
            <p className="font-semibold text-green-500 mx-2 sm:mx-4">S</p>
          </div>
          <div className="flex items-center h-full" ref={imgRefs[2]}>
            <Image
              src="/assets/images/airpod_tips_m.webp"
              width={100}
              height={100}
              alt="Picture of airpod bud"
              className="sm:mb-16 airpod_silicone_m"
            />
            <p className="font-semibold text-green-500 mx-2 sm:mx-4">M</p>
          </div>
          <div className="flex items-center h-full" ref={imgRefs[3]}>
            <Image
              src="/assets/images/airpod_tips_l.webp"
              width={100}
              height={100}
              alt="Picture of airpod bud"
              className="sm:mb-16 airpod_silicone_l"
            />
            <p className="font-semibold text-green-500 mx-2 sm:mx-4">L</p>
          </div>
          <div className="flex items-center sm:items-end h-full">
            <Image
              src="/assets/images/airpod_tips.webp"
              width={200}
              height={300}
              alt="Picture of airpod bud"
              className="mt-24 mb-6 sm:mt-0 sm:mb-0 airpod_tip"
            />
          </div>
        </div>
      </div>
      <div className="h-screen text-white">
        <h2 className="">Magically simple installation.</h2>
        <h3 className="">Remarkably straightforward simplicity.</h3>
        <p className="">
          You set them up in an instant and control them with Siri commands.
          AirPods Pro are as magical as the rest of the AirPods family, and the
          new features make them as convenient to use as possible.
        </p>
      </div>
    </>
  );
};

export default AirpodInfo;
