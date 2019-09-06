import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import Navigation from './Navigation'


function TapKeg() {
  var tapStyles = {
    color: '#black',
    background: 'grey',
    margin: 'auto',
    width: '50%',
    border: '3px solid green',
    padding: '10px'
  }
  return (
    <div>
      <Navigation/>
      <div style={tapStyles}>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Tap Keg!</Form.Label>
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
              <Button variant="secondary">Submit</Button>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label></Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TapKeg;
