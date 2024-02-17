"use client";

import Image from "next/image";

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
  return (
    <div className="">
      <div className="">
        <h2>Projects</h2>
      </div>

      <div key={id} className="">
        <a href={livePreview} target="_blank" rel="noreferrer">
          <Image
            src={`/projectsImage/${imgCover}`}
            alt="Project's preview image"
            width={1080}
            height={800}
          ></Image>
        </a>
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
