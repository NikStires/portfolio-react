import React from 'react';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
//animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectLeft = ({
  name,
  image,
  text,
  technologies,
  hasGithub,
  github,
  hasLink,
  link,
}) => {
  AOS.init();
  return (
    <div data-aos='fade-right' className='project-container'>
      <img src={image} alt={name} />
      <div className='project-info'>
        <h1>{name}</h1>
        <p>
          {text}
          {hasGithub ? (
            <a href={github} target='_blank' rel='noreferrer'>
              <FontAwesomeIcon href={link} icon={faGithub} color='#19d3da' />
            </a>
          ) : (
            ''
          )}
          {hasLink ? (
            <a href={link} target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faExternalLinkAlt} color='#19d3da' />
            </a>
          ) : (
            ''
          )}
        </p>
        <hr />
        <div className='tech'>
          {technologies.map((technology, index) => (
            <h3 key={index}>{technology}</h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectLeft;
