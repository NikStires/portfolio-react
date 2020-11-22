import React from 'react';
//animation
import AOS from 'aos';
import 'aos/dist/aos.css';
//lazyload
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const ArtPiece = ({ image }) => {
  AOS.init();
  return (
    <div data-aos='zoom-in' className='artPiece'>
      <a target='_blank' href={image}>
        <img data-src={image} className='lazyload' alt='' />
      </a>
    </div>
  );
};

export default ArtPiece;
