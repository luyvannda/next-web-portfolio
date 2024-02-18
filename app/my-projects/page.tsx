"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import { Projects } from "@/constants/projectsData";
import React from "react";
import Description from "@/components/homepage/Description";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className="flex h-screen w-screen items-center justify-center overflow-y-scroll bg-cover bg-center"
    >
      <div className="md:grid-col-1 grid max-h-[80%] max-w-[80%] gap-5 md:grid-cols-2">
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
