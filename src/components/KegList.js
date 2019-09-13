
import React from 'react';
import { Container, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Photo from './Photo'
import Keg from './Keg'

var masterTicketList = [
  {
    name: 'Peach passion',
    brand: 'Four Loko',
    abv: '10',
    price: '3.00'
    flavor: 'Really good.'
  },
  {
    name: 'Raspberry plum',
    brand: 'Four Loko',
    abv: '18',
    price: '2.00'
    flavor: 'Really great.'
  },
  {
    name: 'Watermelon grapefruit',
    brand: 'Four Loko',
    abv: '11',
    price: '4.00'
    flavor: 'Really amazing.'
  }
];

function KegList() {
  var mainStyles = {
    // color: '#black',
    // background: 'grey',
    margin: 'auto',
    width: '50%',
    // border: '3px solid green',
    padding: '10px'
  }
  return (
    {masterKegList.map((keg, index)=>)
    <Keg name={ke}}
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

export default KegList;
