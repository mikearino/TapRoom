import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div>
      <h3>{props.name} - {props.brand} - Price: {props.price} - ABV: {props.abv}</h3>
      <p><em>{props.flavor}</em></p>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number,
  abv: PropTypes.number,
  flavor: PropTypes.string
};

export default Keg;
