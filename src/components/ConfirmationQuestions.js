import React from 'react';
import PropTypes from 'prop-types'

function ConfirmationQuestions(props) {
  return(
    <div>
    <p>"Have you taken a break yet to pound a pitcher of Four Loko?"</p>
    <button onClick={props.onDrankFourLoko}>Shirt Yeah I did!</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onDrankFourLoko: PropTypes.func
}

export default ConfirmationQuestions;
