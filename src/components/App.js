import React from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage'
import EditKegPage from './EditKegPage';
import TapKegPage from './TapKegPage'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/editkeg' component={EditKegPage}/>
      <Route path='/tapkeg' component={TapKegPage}/>
    </Switch>
  );
}

export default App;
