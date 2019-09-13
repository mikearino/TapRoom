import React from 'react';
import '../App.css';
import Header from './Header';
import KegList from './KegList';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';

import NewKegForm from './NewKegForm';
import PropTypes from "prop-types";


function App() {
  return (

    <div className="App">
    <Header/>
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
