import React from 'react';
import '../App.css';
import Navigation from './Navigation';
import MainList from './MainList';
import { Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Row>
      <Col md={{ span: 6, offset: 4 }}>
      <MainList/>
      </Col>
      </Row>
    </div>
  );
}

export default App;
