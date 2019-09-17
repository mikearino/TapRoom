import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Four from './img/four.png';

function Error404(props){
  return (
    <div>
      <img id="loko" src={Four}/>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
