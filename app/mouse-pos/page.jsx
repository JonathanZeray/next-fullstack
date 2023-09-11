"use client";

import "./mask.css";
import UseMousePos from "@utils/useMousePos";
import { motion } from "framer-motion";
import { useState } from "react";

const mouse_pos = () => {
  const { x, y } = UseMousePos();
  const [isHovered, setIsHovered] = useState(false);

  const size = isHovered ? 400 : 70;

  return (
    <>
      <section className="maint">
        <motion.div
          className="masks"
          animate={{
            WebkitMaskPosition: `${x - size/2}px ${y - size/1.5}px`,  //x-15 y-70
            WebkitMaskSize: `${size}px`
          }}
          transition={{ type: "tween", ease: "backOut" }}
        >
          <p
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className="text-paragraph"
          >
            A visual designer - with skills that haven't been replaced by A.I -
            making good shit only if the paycheck is equally good.
          </p>
        </motion.div>
        <div className="other-section">
          <p className="text-paragraph">
            I'm a <span className="span-paragraph">selectively skilled</span>{" "}
            product designer with strong focus on producing high quality &
            impactful digital experience
          </p>
        </div>
      </section>
    </>
  );
};

export default mouse_pos;
