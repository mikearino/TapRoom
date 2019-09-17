import React from 'react';
import PropTypes from 'prop-types'
import Four from './img/four.png';

function ConfirmationQuestions(props) {
  return(
    <div>
      <img id="loko" src={Four}/>
    <p>"Have you taken a break yet to pound a pitcher of Four Loko?"</p>
    <button onClick={props.onDrankFourLoko}>Shirt Yeah I did!</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onDrankFourLoko: PropTypes.func
}

export default ConfirmationQuestions;
