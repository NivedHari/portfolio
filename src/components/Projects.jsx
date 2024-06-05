import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "../Data/ProjectData";

export default function Projects() {
  return (
    <div id="projects" className="text-white text-center mb-10 min-w-screen">
      <h1 className="text-3xl md:text-5xl font-bold my-10">Projects</h1>
      <div className="flex flex-wrap gap-10 max-w-7xl mx-auto">
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
