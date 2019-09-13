import React from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import NewKegControl from './NewKegControl';
import Error404 from './Error404';
import KegList from './KegList';
import Header from './Header';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddKegToList = this.handleAddKegToList.bind(this);
  }

  handleAddKegToList(newKeg) {
    var newMasterKegList = this.state.masterKegList.slice();
    console.log(this.state.masterKegList)
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route path='/newkeg' render={()=><NewKegControl onNewKegCreation={this.handleAddKegToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
