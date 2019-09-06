import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Navigation from './Navigation'


function EditKegForm() {
  var kegStyles = {
    color: 'white',
    background: 'black',
    margin: 'auto',
    width: '50%',
    border: '3px solid green',
    padding: '10px'
  }
  return (
    <div>
    <Navigation/>
    <div style={kegStyles}>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Edit Keg!</Form.Label>
            <Form.Control type="text" placeholder="Beer Name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Brand</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control type="int" placeholder="$$$" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>ABV</Form.Label>
            <Form.Control type="int" placeholder="%" />
          </Form.Group>
          <Button variant="dark">Submit</Button>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
        </div>
    </div>
  );
}

export default EditKegForm;
