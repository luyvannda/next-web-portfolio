import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/data/projectsData";
import React from "react";

const ProjectsPage = () => {
  return (
    <div
      style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className="h-screen w-screen overflow-x-hidden overflow-y-scroll bg-cover bg-center"
    >
      <div className="flex flex-col  items-center justify-center pt-32 md:pt-24">
        <div className="grid max-h-[80%] max-w-[80%] grid-cols-1 gap-5 lg:max-w-[85%] lg:grid-cols-2">
          {/* Before we map over projects data we copy it with slice() and reverse() it so that the last data will display first */}

          {Projects.slice()
            .reverse()
            .map((project) => (
              <ProjectCard key={project.id} projectObj={project} />
            ))}
        </div>
      </div>

      {/* This code use to create a space between the navigation to the contents of project page */}

      <div className="block h-[80px] w-screen bg-transparent vs:h-[70px] xs:h-[75px] lg:h-[120px]"></div>
    </div>
  );
};

export default ProjectsPage;
