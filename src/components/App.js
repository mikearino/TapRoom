import React from 'react';
import '../App.css';
import Navigation from './Navigation';
import MainList from './MainList';
import { Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom'
import EditKegForm from './EditKegForm'
import TapKeg from './Tapkeg'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Row>
      <Col md={{ span: 6, offset: 5 }}>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/editkeg' component={EditKegForm}/>
          <Route path='/tapkeg' component={TapKeg}/>
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
