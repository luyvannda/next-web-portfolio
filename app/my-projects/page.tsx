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
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
