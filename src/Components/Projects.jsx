import React from "react";
import project from "../projectinfo";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div className="project-container">
      <div>Projects</div>
      <div>
        {project.map((info, index) => { return (<ProjectCard
            key={index}
            title={info.title}
            description={info.description}
            link={info.link}
          />)
          ;
        })}
      </div>
    </div>
  );
};
