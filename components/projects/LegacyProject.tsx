"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const LegacyProject = ({ image, title, text }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }
  return (
    <div
      onClick={handleFlip}
      className="h-[280px] w-[450px] cursor-pointer rounded-md"
    >
      <motion.div
        className="flip-card-inner h-full w-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="flip-card-front group relative h-full w-full rounded-lg bg-cover bg-center p-4 text-white"
        >
          <div className="absolute inset-0 h-full w-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
          <div className="absolute inset-0 z-[20] hidden h-full w-full items-center justify-center pb-10 text-[20px] group-hover:flex">
            Learn more &gt;
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="flip-card-back group relative h-full w-full rounded-lg bg-cover bg-center p-4 text-white"
        >
          <div className="absolute inset-0 z-[-1] h-full w-full rounded-md bg-black opacity-50" />
          <div className="z-[30] flex flex-col gap-20 py-3">
            <h1 className="text-whote text-2xl font-semibold">{title}</h1>
            <p className="text-[20px] text-gray-200">{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
