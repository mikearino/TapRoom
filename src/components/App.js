import React from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage'
import NewKegForm from './NewKegForm'
import Error404 from './Error404';
import KegList from './KegList'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={KegList}/>
      <Route path='/NewKegForm' component={NewKegForm}/>
      <Route component={Error404} />
    </Switch>
  );
}

export default App;
