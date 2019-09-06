import React from 'react';
import Bubs from './img/bubs.jpeg'
import {Image} from 'react-bootstrap'


function Photo() {
  return (
    <div className="Photo">
      <Image src={Bubs} />
    </div>
  );
}

export default Photo;
