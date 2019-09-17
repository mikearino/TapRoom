import React from 'react';
import { Row, Col, Button, Form, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';
import Four from './img/four.png';

function NewKegForm(props) {

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
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, abv: _abv.value, flavor: _flavor.value, id: v4(), timeOpen: new Moment()});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _abv.value = '';
    _flavor.value = '';
  }

  return (
    <div>
      <img id="loko" src={Four}/>
      <Container>
      <Form onSubmit={handleNewKegFormSubmission}>
               <Row>
                 <Col>
                   <Form.Control type='text'
                     id='name'
                     placeholder="Name"
                     ref={(input) => {_name = input;}}/>

                 </Col>
                 <Col>
                   <Form.Control type='text'
                     id='brand'
                     placeholder='Brand'
                     ref={(input) => {_brand = input;}}/>

                 </Col>
                 <Col>
                   <Form.Control type='number'
                     id='price'
                     placeholder="Price"
                     ref={(input) => {_price = input;}}/>

                 </Col>
                 <Col>
                   <Form.Control type='number'
                   id='abv'
                   placeholder='ABV'
                   ref={(input) => {_abv = input;}}/>}/>

                 </Col>
               </Row>
               <br/>
               <Row>
                 <Col>
                   <Form.Control id='flavor'
                   placeholder='Flavor profile'
                   ref={(textarea) => {_flavor = textarea;}}/>

                 </Col>
                 <Button variant="primary" type="submit">
                   Add
                 </Button>
               </Row>
             </Form>
             </Container>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation:PropTypes.func
};

export default NewKegForm;
