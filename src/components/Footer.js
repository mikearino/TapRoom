import React from 'react';
import { Card } from 'react-bootstrap'

function Footer() {
  return (
    <div className="App">
    <Card bg="dark" text="white" >
    <Card.Header>Beer Will Get You Drunk</Card.Header>
    <Card.Body>
    <Card.Title>Wasted</Card.Title>
    <Card.Text>
    You should drink a lot of it.
    </Card.Text>
    </Card.Body>
    </Card>
    </div>
  );
}

export default Footer
