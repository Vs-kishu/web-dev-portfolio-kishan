import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import { projectsData } from "../../data/projectsData";

import "./Projects.css";
import SingleProject from "./SingleProject/SingleProject";

function Projects() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {projectsData.length > 0 && (
        <div
          className="projects"
          id="projects"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="projects--header">
            <h1 style={{ color: theme.primary }}>Projects</h1>
          </div>
          <div>
            <video
              src="https://res.cloudinary.com/dngrtoqfe/video/upload/v1696386183/website/cefbuynfyytewprxxgap.mp4"
              controls={true}
              loop={true}
              autoPlay={true}
              width={700}
              height={500}
            />
          </div>

          <div className="projects--body">
            <div className="projects--bodyContainer">
              <div className="projects--scroll">
                {projectsData.map((project) => (
                  <SingleProject
                    theme={theme}
                    key={project.id}
                    id={project.id}
                    name={project.projectName}
                    desc={project.projectDesc}
                    tags={project.tags}
                    code={project.code}
                    demo={project.demo}
                    image={project.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
