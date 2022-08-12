import React from "react";
import project from "../projectinfo";
import { ProjectCard } from "./ProjectCard";
import "../Styles/Projects.css";

export const Projects = () => {
  return (
    <div className="project-container" id="projects">
      <div className="project-head">Projects</div>
      <div className="project-section">
        {project.map((info, index) => {
          return (
            <ProjectCard
              key={index}
              title={info.title}
              description={info.description}
              image={info.image}
              link={info.link}
              client={info.client}
              server={info.server}
            />
          );
        })}
      </div>
    </div>
  );
};
