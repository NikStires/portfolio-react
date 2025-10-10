import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Socials = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='socials'>
      <div className='social-links'>
        <ul className='social-list'>
          <li>
            <a
              data-aos='fade-right'
              data-aos-duration='1000'
              href='https://github.com/NikStires'
              title='Github'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              data-aos='fade-right'
              data-aos-duration='1500'
              href='mailto:nik.stires@gmail.com'
              title='Email'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
          <li>
            <a
              data-aos='fade-right'
              data-aos-duration='2000'
              href='https://www.linkedin.com/in/nikolas-stires-7ab254167/'
              title='LinkedIn+'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Socials;
