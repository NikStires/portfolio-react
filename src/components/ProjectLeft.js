import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectLeft = ({
  name,
  image,
  text,
  technologies,
  year,
  hasGithub,
  github,
  hasLink,
  link,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos='fade-right' className='project-container'>
      <img src={image} alt={name} />
      <div className='project-info'>
        <div className='project-header'>
          <h1>{name}</h1>
          {year && <span className='project-year'>{year}</span>}
        </div>
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
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                color='#19d3da'
              />
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
