"use client";
import { useState, useEffect, useRef } from "react";
import "./ScrollImages.css";
import Airpods from "./Airpods";
import { WhenVisible, VisibleExpand } from "./WhenVisible";

function ScrollImages() {
  const canvasRef = useRef();
  const contextRef = useRef();
  const scrollTopRef = useRef();
  const totalFrames = 92;

  useEffect(() => {
    contextRef.current = canvasRef?.current?.getContext("2d");

    const img = new Image();
    img.src = "/assets/scrollimages/0000.png"; // 0001

    img.onload = () => {
      canvasRef.current.width =
        window.innerWidth; /*  /2 om det är porträtt video */
      canvasRef.current.height = window.innerHeight / 2;
      contextRef.current.drawImage(
        img,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
    };

    const getImageName = (index) =>
      `/assets/scrollimages/${index.toString().padStart(4, "0")}.png`;

    const preloadImages = () => {
      const imageLoaderPromises = [];
      for (let i = 1; i < totalFrames; i++) {
        const img = new Image();
        const imgLoadPromise = new Promise((resolve, reject) => {
          img.onload = () => resolve(img);
          img.onerror = () => reject("Something went wrong");
        });
        imageLoaderPromises.push(imgLoadPromise);
        img.src = getImageName(i);
      }
      return Promise.all(imageLoaderPromises);
    };

    const updateImage = (index) => {
      img.src = getImageName(index);
      contextRef.current.drawImage(
        img,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
    };

    const handleScroll = (e) => {
      scrollTopRef.current = document.documentElement.scrollTop;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const fractionScrolled = scrollTopRef.current / maxScroll;

      const imageIndex = Math.min(
        totalFrames,
        Math.ceil(fractionScrolled * totalFrames)
      );
      requestAnimationFrame(() => updateImage(imageIndex));
    };

    window.addEventListener("scroll", handleScroll);
    preloadImages();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="scrollimages-container m-0 p-0">
        <section className="section-container">
          <div className="sticky top-0 flex justify-center h-screen">
            <canvas
              ref={canvasRef}
              id="scroll-canvas"
              className="sm:w-full sm:h-3/4 w-screen h-2/4"
            />
          </div>
          <div className="sticky top-2/4 mx-4 h-screen">
            <WhenVisible duration={1}>
              <p className="Font-inter text-green-500 font-semibold text-2xl text-center">
                The all new
              </p>
              <h1 className="font-inter font-extrabold text-6xl z-10 text-white text-center">
                AirPods Pro
              </h1>
              <br />
              <div className="flex justify-center">
                <p className="sm:w-2/4 font-inter text-white text-xl text-center">
                  Up to 2 times more active noise cancellation compared to the
                  previous generation. With touch controls, you adjust the
                  volume with a swipe. And the battery life takes a significant
                  step forward – one charge lasts for 6 hours of use.
                </p>
              </div>
            </WhenVisible>
          </div>
        </section>
          <div className="w-full sm:h-screen flex justify-center items-center">
          <VisibleExpand>
            <h1 className="font-inter text-white sm:text-8xl font-bold text-3xl mb-20">A redefined masterpiece</h1>
          </VisibleExpand>
          </div>
        {/* <section className="relative text-center h-screen flex justify-center items-center">
          <Airpods />
        </section> */}
      </div>
    </>
  );
}

export default ScrollImages;
