"use client"
import { useState, useEffect, useRef } from "react";
import "./ScrollImages.css";
import Airpods from "./Airpods";

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
         canvasRef.current.width = window.innerWidth ; /*  /2 om det är porträtt video */
          canvasRef.current.height = window.innerHeight / 2;
        contextRef.current.drawImage(
          img,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
      };
  
      const getImageName = (index) => `/assets/scrollimages/${index.toString().padStart(4, "0")}.png`
  
      const preloadImages = () => {
        const imageLoaderPromises = [];
        for(let i = 1; i < totalFrames; i++){
          const img = new Image();
          const imgLoadPromise = new Promise((resolve, reject) => {
            img.onload = () => resolve(img);
            img.onerror = () => reject("Something went wrong");
          });
          imageLoaderPromises.push(imgLoadPromise)
          img.src = getImageName(i);
        }
        return Promise.all(imageLoaderPromises)
      }
  
      const updateImage = (index) => {
        img.src = getImageName(index);
        contextRef.current.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height )
      }
  
      const handleScroll = (e) => {
        scrollTopRef.current = document.documentElement.scrollTop;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const fractionScrolled = scrollTopRef.current / maxScroll;
  
        const imageIndex = Math.min(totalFrames, Math.ceil(fractionScrolled * totalFrames));
        requestAnimationFrame(() => updateImage(imageIndex))
      };
  
      window.addEventListener("scroll", handleScroll);
      preloadImages();
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <>
        <div className="scrollimages-container">
          {/* <section className="section-container">
            <div className="hero">
              <h1 className="hero-text text-white">Buy it</h1>
            </div>
          </section> */}
  
          <section className="section-container">
            <div className="canvas-container flex justify-center h-screen">
              <canvas ref={canvasRef} id="scroll-canvas" className="sm:w-3/4 sm:h-3/4 w-screen h-2/4" />
            </div>
            <div className="sticky top-2/4 mx-4 h-screen">
              <h1 className="font-inter font-extrabold text-4xl z-10 text-white">#1 Lorem ipsum dolor sit amet.</h1>
              <br />
              <h1 className="canvas-text">#2 Lorem ipsum dolor sit amet.</h1>

            </div>
          </section>
  
          <section className="section-container">
            {/* <div className="hero">
              <h1 className="hero-text">Dont miss out</h1>
            </div> */}
            <Airpods />
          </section>
        </div>
      </>
    );
  }
  
  export default ScrollImages;
