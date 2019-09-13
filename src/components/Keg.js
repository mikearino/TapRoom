import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div>
      <h3>{props.name} - {props.brand} - {props.price} - {props.abv}</h3>
      <p><em>{props.flavor}</em></p>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string,
  abv: PropTypes.integer,
  flavor: PropTypes.string
};

export default Keg;
