import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrow, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import resume from './resume.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Nav = () => {
  AOS.init();
  //State
  const [dropDownStatus, setDropDownStatus] = useState(false);

  return (
    <nav data-aos='fade-down' data-aos-easing='linear' data-aos-duration='1000'>
      <div className='logo'>
        <FontAwesomeIcon className='crow-icon' icon={faCrow} size='2x' />
        <h1>NS</h1>
      </div>
      <div className={`buttons ${dropDownStatus ? 'drop-down-active' : ''}`}>
        <button>
          <a href='#projects'>Work</a>
        </button>
        <button>
          <a href='#art'>Art/Photography</a>
        </button>
      </div>
      <a className='resume' target='blank' href={resume}>
        Resume
      </a>
      <div className='drop-down'>
        <FontAwesomeIcon
          onClick={() => {
            setDropDownStatus(!dropDownStatus);
          }}
          className='down-arrow'
          icon={faAngleDown}
          size='2x'
        />
      </div>
    </nav>
  );
};

export default Nav;
