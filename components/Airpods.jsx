import React from "react";
import { PresentationControls, Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./canvas/3Dmodel";
import BackgroundVideo from "./BackgroundVideo";

const Airpods = () => {
  return (
    <>
    <BackgroundVideo />
      <Canvas>
        <PresentationControls>
          <Float speed={2}>
            <Model className="z-10" />
          </Float>
        </PresentationControls>
      </Canvas>
    </>
  );
};

export default Airpods;
