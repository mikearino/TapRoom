
import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';



function MainList() {
  return (
    <div className="">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    <Card.Body>
    <Card.Title>Beer List</Card.Title>
    <Card.Text>
    Lager
    </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroupItem>Bapst</ListGroupItem>
    <ListGroupItem>6.99</ListGroupItem>
    <ListGroupItem>2.0%</ListGroupItem>
    </ListGroup>
    <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
    </Card>
    </div>
  );
}

export default MainList;
