import React, { useEffect, useState } from 'react';
import headshot from '../img/head.webp';
import Skills from './Skills';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos='fade-left'
      data-aos-easing='linear'
      data-aos-duration='1500'
      className='about-container'
    >
      <div className='introduction'>
        <h3>Hi, my name is</h3>
        <h1>Nik Stires</h1>
      </div>
      <div className='about-area'>
        <div className='text-and-button'>
          <div className={`about-text ${isExpanded ? 'expanded' : ''}`}>
            <p>
              I'm a full-stack software engineer with a Bachelor's degree in
              Computer Science from
              <a
                target='_blank'
                href='https://www.seattleu.edu/'
                rel='noreferrer'
              >
                {' '}
                Seattle University
              </a>
              . Currently, I serve as CTO of
              <a target='_blank' href='https://lablightar.io' rel='noreferrer'>
                {' '}
                LabLight
              </a>
              , a startup company bringing Augmented Reality and AI assisted
              guidance to biotech labs. I specialize in XR development and
              machine learning, exploring how these technologies intersect to
              create immersive, intelligent experiences.
            </p>
            <p>
              My journey into programming began at 14 with a web design class,
              sparking a passion that led me to build websites for local
              businesses using React and modern JavaScript frameworks throughout
              high school. This early experience taught me the value of creating
              practical solutions for real-world problems.
            </p>
            <p>
              At university, my perspective expanded beyond web development into
              systems architecture, algorithms, data structures, and low-level
              programming with C and C++. During internships, I worked with C#,
              Python, and Swift to develop user interfaces for Augmented Reality
              apps and to train machine learning models, discovering my passion
              for the intersection of Augmented Reality and AI.
            </p>
            <p>
              As a lifelong learner, I'm committed to staying current with
              emerging technologies and industry best practices, constantly
              seeking new challenges that push the boundaries of what's
              possible.
            </p>
          </div>
          <button
            className='read-more-btn'
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
          <div className='contact-btn'>
            <a
              href='mailto:nik.stires@gmail.com'
              title='Email'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button>Get In Touch</button>
            </a>
          </div>
        </div>
        <img src={headshot} alt='Nik Stires' />
      </div>
      <Skills />
      <hr />
    </div>
  );
};

export default About;
