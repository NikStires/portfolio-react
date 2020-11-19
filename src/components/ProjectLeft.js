import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectLeft = ({ name, image, text, technologies }) => {
  AOS.init();

  return (
    <div data-aos='fade-right' className='project-container'>
      <img src={image} />
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
    </div>
  );
};

export default ProjectLeft;
