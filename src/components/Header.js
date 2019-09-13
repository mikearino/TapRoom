import React from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="">
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">BeerMe</Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href="#/">Home</Nav.Link>

    <Nav.Link href="#/NewKegForm">Tap A Keg!</Nav.Link>
    <Nav.Link href="#/editkeg">Edit Keg</Nav.Link>
    </Nav>
    <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-info">Search</Button>
    </Form>
    </Navbar>
    </div>
  );
}

export default Header;
