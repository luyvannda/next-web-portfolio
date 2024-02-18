"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectsProp {
  id: number;
  imgCover: string;
  title: string;
  skills: string;
  description: string;
  livePreview: string;
  sourceCode: string;
}

const ProjectCard = ({
  id,
  imgCover,
  title,
  skills,
  description,
  livePreview,
  sourceCode,
}: ProjectsProp) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div className="container">
      <div key={id} onClick={handleFlip} className="relative text-white ">
        <motion.div
          className="flip-card-inner h-full w-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="flip-card-front group cursor-pointer">
            <Image
              src={`/projectsImage/${imgCover}`}
              alt="Project's preview image"
              width={1080}
              height={800}
            ></Image>

            <div className="absolute left-[50%] top-[50%] z-50 -translate-x-[50%] rounded-lg bg-slate-200 px-2 lg:opacity-0 lg:group-hover:opacity-80">
              <p className="text-sm text-indigo-500 md:text-lg">
                Learn more &gt;
              </p>
            </div>
          </div>

          <div className="flip-card-back group absolute top-0 cursor-pointer">
            <Image
              src={`/projectsImage/${imgCover}`}
              alt="Project's preview image"
              width={1080}
              height={800}
              className="opacity-40"
            ></Image>
            <div className="absolute left-[50%] top-[50%] w-[80%] -translate-x-[50%] -translate-y-[50%] space-y-4">
              <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
                {title}
              </h2>
              <p className="text-lg md:text-xl">
                Skills:{" "}
                <span className="bg-gradient-to-r from-purple-300 to-red-300 bg-clip-text text-transparent">
                  {skills}
                </span>
              </p>
              <p className="text-justify text-sm md:text-lg">{description}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="text-white">
        <a className="" href={livePreview} target="_blank" rel="noreferrer">
          VIEW PROJECT
        </a>
        <a className="" href={sourceCode} target="_blank" rel="noreferrer">
          VIEW CODE
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
