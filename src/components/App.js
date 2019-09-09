import React from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage'
import EditKegPage from './EditKegPage';
import TapKegPage from './TapKegPage'
import Error404 from './Error404';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/editkeg' component={EditKegPage}/>
      <Route path='/tapkeg' component={TapKegPage}/>
      <Route component={Error404} />
    </Switch>
  );
}

export default App;
