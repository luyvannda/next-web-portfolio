"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import { Projects } from "@/constants/projectsData";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className="flex h-full w-screen flex-col items-center justify-center overflow-y-scroll bg-cover bg-center"
    >
      <div className="grid max-h-[80%] max-w-[80%] grid-cols-1 gap-5 pt-10 md:grid-cols-2">
        {Projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            imgCover={project.imgCover}
            title={project.title}
            skills={project.skills}
            description={project.description}
            livePreview={project.livePreview}
            sourceCode={project.sourceCode}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
