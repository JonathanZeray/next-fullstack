"use client";

import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { useTransform } from "framer-motion";
import Image from "next/image";
import "./SlidingImages.css";

const slider1 = [
  {
    color: "#e3e3e3",
    src: "iphone14pro.webp",
    product: "Iphone 14Pro",
    price: "$999",
  },
  {
    color: "#e3e3e3",
    src: "iphone14.webp",
    product: "Iphone 14",
    price: "$899",
  },
  {
    color: "#e3e3e3",
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
    color: "#e3e3e3",
    src: "airtag.webp",
    product: "Airtag",
    price: "$99",
  },
  {
    color: "#e3e3e3",
    src: "appleWatch5.jpg",
    product: "Apple Watch",
    price: "$599",
  },
  {
    color: "#e3e3e3",
    src: "ipad.webp",
    product: "iPad 10.9'' 10th Gen",
    price: "$849",
  },
  {
    color: "#e3e3e3",
    src: "visionPro.webp",
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
                    alt={"image of apple product"}
                    src={`/assets/product-images/${project.src}`}
                  />
                </div>
                <div className="text-container">
                  <h3>{project.product}</h3>
                  <h3>
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
                  <h3>
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
