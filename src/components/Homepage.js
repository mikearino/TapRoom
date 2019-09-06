import React from 'react';
import '../App.css';
import Navigation from './Navigation';
import MainList from './MainList';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import EditKegForm from './EditKegForm';
import TapKeg from './TapKeg';
import PropTypes from "prop-types";


function App() {
  return (

    <div className="App">
    <Navigation />
    <Container>

    <Row>
    <Col>
    </Col>
    </Row>
    <MainList/>
    <Row>
    <Col>
    </Col>
    </Row>
    </Container>
    <Footer/>
    </div>

  );
}

export default App;
