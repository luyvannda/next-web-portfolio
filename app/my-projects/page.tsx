"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import { Projects } from "@/constants/projectsData";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className="flex h-screen w-screen items-center justify-center bg-cover bg-center"
    >
      <div className="grid max-h-[90%] max-w-[90%] grid-cols-2 gap-5">
        {Projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            imgCover={project.imgCover}
            title={project.title}
            skills={project.skills}
            livePreview={project.livePreview}
            sourceCode={project.sourceCode}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
