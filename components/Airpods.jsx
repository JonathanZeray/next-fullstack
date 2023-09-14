import React from "react";
import { PresentationControls, Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./canvas/3Dmodel";
import CircleBgVideo from "./CircleBgVideo";

const Airpods = () => {
  return (
    <>
    {/* <CircleBgVideo /> */}
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
