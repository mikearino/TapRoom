
import React from 'react';
import { Container, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Photo from './Photo'


function MainList() {
  var mainStyles = {
    // color: '#black',
    // background: 'grey',
    margin: 'auto',
    width: '50%',
    // border: '3px solid green',
    padding: '10px'
  }
  return (
    <div style={mainStyles}>
    <Container>
    <Card style={{ width: '38rem' }}>
    <Photo/>
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
  </Container>
    </div>
  );
}

export default MainList;
