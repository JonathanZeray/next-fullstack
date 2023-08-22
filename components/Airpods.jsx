import React from "react";
import { PresentationControls, Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./canvas/3Dmodel";

const Airpods = () => {
  return (
    <>
    <div className="flex flex-col">

    <h1 className="head_text text-white text-center">The New airpods</h1>
      <Canvas>
        <PresentationControls>
          <Float speed={2}>
            <Model />
          </Float>
        </PresentationControls>
      </Canvas>
    </div>
    </>
  );
};

export default Airpods;
