"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectsProp {
  id: number;
  imgCover: string;
  title: string;
  skills: string;
  livePreview: string;
  sourceCode: string;
}

const ProjectCard = ({
  id,
  imgCover,
  title,
  skills,
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
      <div key={id} onClick={handleFlip} className="text-white">
        <motion.div
          className="flip-card-inner h-full w-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <Image
            src={`/projectsImage/${imgCover}`}
            alt="Project's preview image"
            width={1080}
            height={800}
          ></Image>
        </motion.div>

        <h2>{title}</h2>
        <p>{skills}</p>

        <div className="">
          <a
            className="live-view"
            href={livePreview}
            target="_blank"
            rel="noreferrer"
          >
            VIEW PROJECT
          </a>
          <a className="" href={sourceCode} target="_blank" rel="noreferrer">
            VIEW CODE
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
