import React from 'react';
import '../App.css';
import Navigation from './Navigation';
import KegList from './KegList';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import EditKegForm from './EditKegForm';
import NewKegForm from './NewKegForm';
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
    <KegList/>
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
