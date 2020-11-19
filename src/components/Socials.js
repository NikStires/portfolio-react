import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Socials = () => {
  AOS.init();

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
              <i className='fab fa-github'></i>
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
              <i className='far fa-envelope'></i>
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
              <i className='fab fa-linkedin-in'></i>
            </a>
          </li>
          <li>
            <a
              data-aos='fade-right'
              data-aos-duration='2100'
              href='https://www.instagram.com/nikstires/'
              title='Instagram'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Socials;
