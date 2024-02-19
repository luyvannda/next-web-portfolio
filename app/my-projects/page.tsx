"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import { Projects } from "@/constants/projectsData";
import React from "react";

const ProjectsPage = () => {
  return (
    <div
      style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className="h-screen w-screen overflow-x-hidden overflow-y-scroll bg-cover bg-center"
    >
      <div className="flex flex-col  items-center justify-center pt-32 md:pt-24">
        <div className="grid max-h-[80%] max-w-[80%] grid-cols-1 gap-5 lg:max-w-[85%] lg:grid-cols-2">
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
      <div className="block h-[80px] w-screen bg-transparent vs:h-[70px] xs:h-[75px] lg:h-[85px]"></div>
    </div>
  );
};

export default ProjectsPage;
