
import React from 'react';
import Photo from './Photo';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList() {
  var mainStyles = {
    // color: '#black',
    // background: 'grey',
    margin: 'auto',
    width: '50%',
    // border: '3px solid green',
    padding: '10px'
  }
  return (
    <div>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          abv={keg.price}
          price={keg.abv}
          flavor={keg.flavor} />
      )}
    </div>
  );
}

export default KegList;
