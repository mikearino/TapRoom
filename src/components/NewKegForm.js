import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';



function NewKegForm() {

  let _name = null;
  let _brand = null;
  let _price = null;
  let _abv = null;
  let _flavor = null;

  var tapStyles = {
    color: 'white',
    background: 'black',
    margin: 'auto',
    width: '50%',
    border: '3px solid green',
    padding: '10px'
  }

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    console.log(_brand.value);
    console.log(_price.value);
    console.log(_abv.value);
    console.log(_flavor.value);
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _abv.value = '';
    _flavor.value = '';
  }

  return (
    <div>
    <form onSubmit={handleNewKegFormSubmission}>
      <input
      type='text'
      id='name'
      placeholder='Name'
      ref={(input) => {_name = input;}}/>
      <input
      type='text'
      id='brand'
      placeholder='Brand'
      ref={(input) => {_brand = input;}}/>
      <input
      type='text'
      id='price'
      placeholder='Price'
      ref={(input) => {_price = input;}}/>
      <input
      type='text'
      id='abv'
      placeholder='ABV'
      ref={(input) => {_abv = input;}}/>
      <textarea
      id='flavor'
      placeholder='Flavor profile'
      ref={(textarea) => {_name = textarea;}}/>
      <button type='submit'>Submit!</button>
    </form>
    </div>
  );
}

export default NewKegForm;
