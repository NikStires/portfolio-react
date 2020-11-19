import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ArtPiece = ({ image }) => {
  AOS.init();
  return (
    <div data-aos='zoom-in' className='artPiece'>
      <a target='_blank' href={image}>
        <img src={image} alt='' />
      </a>
    </div>
  );
};

export default ArtPiece;
