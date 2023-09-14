"use client";

import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { useTransform } from "framer-motion";
import Image from "next/image";
import "./SlidingImages.css";

const slider1 = [
  {
    color: "#E7E8EA",
    src: "macbookAir.png",
    product: "Macbook",
    price: "$2000",
  },
  {
    color: "#D7D7DC",
    src: "i14.png",
    product: "Iphone 14",
    price: "$899",
  },
  {
    color: "#E7E7E7",
    src: "iphone13.webp",
    product: "Iphone 13",
    price: "$799",
  },
  {
    color: "#e3e3e3",
    src: "iphoneSE.webp",
    product: "Iphone SE",
    price: "$699",
  },
];

const slider2 = [
  {
    color: "#5f6470",
    src: "airtag.webp",
    product: "Airtag",
    price: "$99",
  },
  {
    color: "#E8E4E5",
    src: "apwatch.png",
    product: "Apple Watch",
    price: "$599",
  },
  {
    color: "#D7D4CF",
    src: "ipad.png",
    product: "iPad 10.9''",
    price: "$849",
  },
  {
    color: "#D7D7DC",
    src: "apVisPro.png",
    product: "Vision Pro",
    price: "$4999",
  },
];

const SlidingImages = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 75]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -75]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <>
      <div ref={container} className="slidingImages">
        <motion.div style={{ x: x1 }} className="slider">
          {slider1.map((project, index) => {
            return (
              <div
                key={`sl1_${index}`}
                className="project"
                style={{ backgroundColor: project.color }}
              >
                <div className="imageContainer">
                  <Image
                    fill={true}
                    // width={100}
                    // height={100}
                    alt={"image of apple product"}
                    src={`/assets/product-images/${project.src}`}
                  />
                </div>
                <div className="text-container">
                  <h3>{project.product}</h3>
                  <h3 className="text-center">
                    <strong>{project.price}</strong>
                  </h3>
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div style={{ x: x2 }} className="slider">
          {slider2.map((project, index) => {
            return (
              <div
                y={`sl2_${index}`}
                className="project"
                style={{ backgroundColor: project.color }}
              >
                <div key={index} className="imageContainer">
                  <Image
                    fill={true}
                    alt={"image of apple product"}
                    src={`/assets/product-images/${project.src}`}
                  />
                </div>
                <div className="text-container">
                  <h3>{project.product}</h3>
                  <h3 className="text-center">
                    <strong>{project.price}</strong>
                  </h3>
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div style={{ height }} className="circleContainer">
          <div className="circle"></div>
        </motion.div>
      </div>
    </>
  );
};

export default SlidingImages;
