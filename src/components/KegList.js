
import React from 'react';
import Photo from './Photo';
import Keg from './Keg';
import PropTypes from 'prop-types';

var masterKegList = [
  {
    name: 'Peach passion',
    brand: 'Four Loko',
    price: 3.00,
    abv: 10,
    flavor: 'Really good.'
  },
  {
    name: 'Raspberry plum',
    brand: 'Four Loko',
    price: 2.00,
    abv: 18,
    flavor: 'Really great.'
  },
  {
    name: 'Watermelon grapefruit',
    brand: 'Four Loko',
    price: 4.00,
    abv: 11,
    flavor: 'Really amazing.'
  }
];

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
    {masterKegList.map((keg, index)=>
    <Keg name={keg.name}
    brand={brand.name}
    abv={abv.name}
    price={price.name}
    flavor={flavor.name} />
    )}

    </div>
  );
}

export default KegList;
