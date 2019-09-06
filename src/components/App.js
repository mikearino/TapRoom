import React from 'react';
import '../App.css';
import Navigation from './Navigation';
import MainList from './MainList';
import { Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import { Switch, Route } from 'react-router'


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Row>
      <Col md={{ span: 6, offset: 5 }}>
        <Switch>

         </Switch>

      <MainList/>
      </Col>
      </Row>
      <Row>
      <Col>
      <Footer/>
      </Col>
      </Row>
    </div>
  );
}

export default App;
