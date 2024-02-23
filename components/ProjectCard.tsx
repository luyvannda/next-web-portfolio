"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectsProp {
  projectObj: {
    id: number;
    imgCover: string;
    title: string;
    skills: string;
    description: string;
    livePreview: string;
    sourceCode: string;
  };
}

const ProjectCard = ({
  projectObj: {
    id,
    imgCover,
    title,
    skills,
    description,
    livePreview,
    sourceCode,
  },
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
              className="rounded-lg"
            ></Image>

            <div className="absolute left-[50%] top-[50%] z-50 -translate-x-[50%] rounded-lg bg-slate-200 px-2 lg:opacity-0 lg:group-hover:opacity-80">
              <p className="text-sm text-indigo-500 md:text-xl">
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
              className="rounded-lg opacity-40"
            ></Image>
            <div className="absolute left-[50%] top-[50%] w-[90%] -translate-x-[50%] -translate-y-[50%] space-y-1 md:w-[80%] md:space-y-4">
              <h2 className="text-center text-xl font-bold md:text-3xl xl:text-4xl">
                {title}
              </h2>
              <p className="bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-center text-sm font-semibold text-transparent xs:text-lg md:text-2xl xl:text-3xl ">
                {skills}
              </p>
              <p className="text-justify text-sm xs:text-base md:text-2xl lg:text-xl xl:text-2xl">
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center gap-3 pt-4 text-white md:justify-evenly md:gap-0">
        <Link
          className="project-btn"
          href={livePreview}
          target="_blank"
          rel="noreferrer"
        >
          VIEW PROJECT
        </Link>
        <Link
          className="project-btn"
          href={sourceCode}
          target="_blank"
          rel="noreferrer"
        >
          VIEW CODE
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
