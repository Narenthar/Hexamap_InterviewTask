import React from "react";
import project from "../projectinfo";
import { ProjectCard } from "./ProjectCard";
import "../Styles/Projects.css";

export const Projects = () => {
  return (
    <div className="project-container" id="projects">
      <div className="project-head">Projects</div>
      <div className="credentials">
        <h5>Demo Credentials</h5>
        <p>
          Demo user : batman@batman.com <span>| Password: password</span>
        </p>
        <p>
          Admin : narenthar31@gmail.com <span>| Password: password</span>
        </p>
      </div>

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
