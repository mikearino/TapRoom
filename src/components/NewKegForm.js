import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import Navigation from './Navigation'


function NewKegForm() {
  var tapStyles = {
    color: 'white',
    background: 'black',
    margin: 'auto',
    width: '50%',
    border: '3px solid green',
    padding: '10px'
  }
  return (
    <div>
    <form>
      <input
      type='text'
      id='name'
      placeholder='Name'/>
      <input
      type='text'
      id='Brand'
      placeholder='Brand'/>
      <input
      type='text'
      id='price'
      placeholder='Price'/>
      <input
      type='text'
      id='ABV'
      placeholder='ABV'/>
      <textarea
      id='flavor'
      placeholder='Flavor profile'/>
      <button type='submit'>Submit!</button>
    </form>
    </div>
  );
}

export default NewKegForm;
