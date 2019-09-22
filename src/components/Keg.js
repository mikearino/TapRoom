import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Keg(props){
  const buttonStatement = () => {
    console.log("it works")
  }

  return (
    <div>
      <h3>{props.name} - {props.brand} - Price: {props.price} - ABV: {props.abv}</h3>
      <h4>Keg tapped {props.formattedWaitTime} ago</h4>
      <p><em>{props.flavor}</em></p>
      <buttton onClick={buttonStatement}>Edit Keg</buttton>
      {/* <button onClick={props.onDrankFourLoko}>Yeah I did!</button> */}
      <hr/>
    </div>
  );
}

function displayTimeOpen(timeOpen) {
  return timeOpen.from(new Moment(), true);
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number,
  abv: PropTypes.number,
  flavor: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
};

export default Keg;
