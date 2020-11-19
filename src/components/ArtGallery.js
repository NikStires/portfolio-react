import React from 'react';
import ArtPiece from './ArtPiece';
//Images
import Bridge from '../img/art/bridge.jpg';
import Drawing1 from '../img/art/drawing1.jpg';
import Drawing2 from '../img/art/drawing2.jpg';
import Drawing3 from '../img/art/drawing3.jpg';
import Drawing4 from '../img/art/drawing4.jpg';
import Drawing5 from '../img/art/drawing5.jpg';
import Drawing6 from '../img/art/drawing6.jpg';
import Drawing7 from '../img/art/drawing7.jpg';
import Drawing8 from '../img/art/drawing8.jpg';
import Drawing9 from '../img/art/drawing9.jpg';
import Drawing10 from '../img/art/drawing10.jpg';
import Drawing11 from '../img/art/drawing11.jpg';
import Drawing12 from '../img/art/drawing12.jpg';
import Monkey from '../img/art/monkey.jpg';
import Rainbow from '../img/art/rainbow.jpg';

const ArtGallery = () => {
  return (
    <div id='art' className='art-container'>
      <div className='col'>
        <ArtPiece image={Drawing1} />
        <ArtPiece image={Drawing2} />
        <ArtPiece image={Drawing3} />
        <ArtPiece image={Drawing11} />
      </div>
      <div className='col'>
        <ArtPiece image={Drawing4} />
        <ArtPiece image={Rainbow} />
        <ArtPiece image={Drawing5} />
        <ArtPiece image={Drawing12} />
      </div>
      <div className='col'>
        <ArtPiece image={Drawing6} />
        <ArtPiece image={Drawing7} />
        <ArtPiece image={Monkey} />
        <ArtPiece image={Bridge} />
      </div>
      <div className='col'>
        <ArtPiece image={Drawing8} />
        <ArtPiece image={Drawing9} />
        <ArtPiece image={Drawing10} />
      </div>
    </div>
  );
};

export default ArtGallery;
