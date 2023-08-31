"use client";

import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";
import Image from "next/image";

import "./AirpodInfo.css";
import { WhenVisible } from "./WhenVisible";

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
      <section className="relative h-screen w-full flex flex-col items-center">
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
      </section>
      <section className="h-screen flex sm:items-center text-white">
        <div className="text-white ml-6 sm:mx-32 font-inter">
          <h2 className="font-semibold text-2xl sm:text-4xl mb-4">
            Magically simple installation.
          </h2>
          <h3 className="w-full font-bold text-6xl sm:text-8xl mb-8">
            Remarkably simple.
          </h3>
          <p className="font-semibold text-2xl sm:w-3/4">
            You set them up in an instant and control them with Siri commands.
            AirPods Pro are as magical as the rest of the AirPods family, and
            the new features make them as convenient to use as possible.
          </p>
        </div>
      </section>
      <WhenVisible duration={1.5}>
        <section className="h-[200vh] w-full sm:w-3/4 sm:m-auto flex flex-wrap sm:justify-around">
          <div className="hidden sm:flex sticky top-0 items-center sm:items-end h-screen w-fit">
            <Image
              src="/assets/images/magical_case.webp"
              width={150}
              height={160}
              alt="Picture of airpod case"
              className="sm:block sm:mb-8 sm:ml-8"
            />
          </div>
          <div className="sticky top-0 h-2/4 sm:h-screen w-full sm:w-1/4">
            <video
              className="sm:w-full w-screen h-2/4 sm:h-full object-fit bg-black z-1"
              autoPlay
              muted
              loop
            >
              <source src="/assets/video/phone-and-case.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col justify-around h-screen sm:h-full w-3/4 sm:w-2/4 mx-auto gray_text font-semibold text-xl sm:text-2xl">
            <WhenVisible duration={0.75}>
              <p className="">
                <span className="text-white">Magically simple setup</span>{" "}
                <br /> Hold your AirPods Pro close to your iPhone and press
                Connect – that's how easily you pair them with all the devices
                associated with your iCloud account. If you have an engraved
                case, the same engraving will appear digitally on the device's
                screen, making the whole experience even more{" "}
                <span className="text-green-500">personal</span>.
              </p>
            </WhenVisible>
            <WhenVisible duration={0.75}>
              <p className="">
                <span className="text-white">Listen together</span> <br />{" "}
                Easily share a song or a TV series between two chosen sets of
                AirPods. Just keep the AirPods close to the iPhone, iPad, or
                Apple TV you're listening on and connect{" "}
                <span className="text-green-500">instantly</span>.
              </p>
            </WhenVisible>
          </div>
        </section>
      </WhenVisible>
      <section className="">
        <div className="h-[200vh] flex flex-col justify-around gray_text font-inter font-semibold">
          <WhenVisible duration={1}>
            <div className="w-3/4 flex flex-col mx-auto">
              <Image
                src="/assets/images/icon_siri.webp"
                width={50}
                height={60}
                alt="Siri Icon"
                className="mb-6"
              />
              <p className="">
                <strong className="text-white">"Hey Siri" is always on</strong>
                <br />
                Listen to music, make a call, get directions, or check your
                schedule using your voice. Just say "Hey Siri" to activate your
                favorite assistant and keep track of all your everyday tasks.
              </p>
            </div>
          </WhenVisible>
          <WhenVisible duration={1}>
            <div className="w-3/4 flex flex-col mx-auto">
              <Image
                src="/assets/images/icon_switching.webp"
                width={50}
                height={60}
                alt="Icon of switching units"
                className="mb-6"
              />
              <p className="">
                <strong className="text-white">
                  Switch smoothly between devices
                </strong>
                <br /> Automatic switching means the audio seamlessly follows
                you between iPhone, Apple Watch, iPad, Mac, and Apple TV. You
                can take a call on your iPhone while playing music on your Mac –
                without needing to switch between devices.
              </p>
            </div>
          </WhenVisible>
          <WhenVisible duration={1}>
            <div className="w-3/4 flex flex-col mx-auto">
              <Image
                src="/assets/images/icon_accessibility.webp"
                width={50}
                height={60}
                alt="Accessibility icon"
                className="mb-6"
              />
              <p className="">
                <strong className="text-white">
                  AirPods and accessibility
                </strong>
                <br /> AirPods Pro offer more than just great sound. They also
                include features for users with hearing impairments. Functions
                like Conversation Boost focus on voices directly in front of
                you. Customized headphone audio amplifies the frequencies you
                need to hear clearly. And if you need to focus on a guest
                lecturer in a crowded auditorium, there's the Live Listen
                feature, which captures distant sounds in conjunction with your
                iPhone.
              </p>
            </div>
          </WhenVisible>
          <WhenVisible duration={1}>
            <div className="w-3/4 flex flex-col mx-auto">
              <Image
                src="/assets/images/icon_notifications.webp"
                width={50}
                height={60}
                alt="Icon for notifications"
                className="mb-6"
              />
              <p className="">
                <strong className="text-white">
                  Read notifications aloud
                </strong>
                <br /> Siri can read out important messages and notifications as
                they arrive – and you can respond to messages using just your
                voice.
              </p>
            </div>
          </WhenVisible>
        </div>
      </section>
    </>
  );
};

export default AirpodInfo;
