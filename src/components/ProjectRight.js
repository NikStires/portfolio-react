import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectRight = ({ name, image, text, technologies }) => {
  AOS.init();

  return (
    <div data-aos='fade-left' className='project-container'>
      <div className='project-info'>
        <h1>{name}</h1>
        <p>{text}</p>
        <hr />
        <div className='tech'>
          {technologies.map((technology) => (
            <h3>{technology}</h3>
          ))}
        </div>
      </div>
      <img src={image} />
    </div>
  );
};

export default ProjectRight;
