import React from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage'
import NewKegControl from './NewKegControl'
import Error404 from './Error404';
import KegList from './KegList'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={KegList}/>
      <Route path='/newkeg' component={NewKegControl}/>
      <Route component={Error404} />
    </Switch>
  );
}

export default App;
