import React, { useState } from 'react';

import ProjectLeft from './ProjectLeft';
import ProjectRight from './ProjectRight';
//import data
import projectData from '../data/ProjectData';

const Projects = () => {
  //State
  const [projects] = useState(projectData());

  return (
    <div id='projects' className='projects'>
      {projects.map((project, index) => {
        index = index + 1;
        if (index % 2 !== 0) {
          return (
            <ProjectLeft
              name={project.name}
              image={project.image}
              text={project.text}
              technologies={project.technologies}
              hasGithub={project.hasGithub}
              github={project.github}
              hasLink={project.hasLink}
              link={project.link}
              id={project.id}
              key={project.id}
            />
          );
        } else {
          return (
            <ProjectRight
              name={project.name}
              image={project.image}
              text={project.text}
              technologies={project.technologies}
              hasGithub={project.hasGithub}
              github={project.github}
              hasLink={project.hasLink}
              link={project.link}
              id={project.id}
              key={project.id}
            />
          );
        }
      })}
    </div>
  );
};

export default Projects;
