import React, { useEffect, useState } from "react";
import { slideUp } from "../utils/anim";
import { motion } from "framer-motion";

const PreLoader = () => {
  const [index, setIndex] = useState(0);

  const words = ["• 苹果", "• Maçã", "• Apfel", "• Pomme", "• りんご", "• Mela", "• Apple"];

  useEffect(() => {
    if(index == words.length - 1) return;

    setTimeout(() => {
        setIndex(index + 1);
    }, index == 0 ? 1100 : 250);
  }, [index])

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="absolute z-50 h-screen pb-12 w-full bg-black flex justify-center items-center"
    >
      <p className="font-inter font-semibold text-white text-6xl">{words[index]}</p>
    </motion.div>
  );
};

export default PreLoader;
