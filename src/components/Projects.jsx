import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "../Data/ProjectData";

export default function Projects() {
  return (
    <div id="projects" className="text-white text-center mb-10 min-w-screen ">
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text inline">
        Projects
      </h1>

      <div className="flex flex-wrap gap-6 max-w-7xl mx-auto my-10 p-7">
        {ProjectData.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            name={project.name}
            tech={project.tech}
            git={project.git}
          />
        ))}
      </div>
    </div>
  );
}
