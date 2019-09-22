import React from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import NewKegControl from './NewKegControl';
import Error404 from './Error404';
import KegList from './KegList';
import Header from './Header';
import Moment from 'moment';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        {name: "KegName", brand: "FourLoko", abv: 4, price: 10, flavor: "nasty", key: 1, timeOpen: new Moment()},
        {name: "KegName2", brand: "Bud Heavy", abv: 4, price: 10, flavor: "also nasty", key: 2, timeOpen: new Moment()},
      ]
    };
    this.handleAddKegToList = this.handleAddKegToList.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
    this.updateKegElapsedWaitTime(),
    5000
  );
}

componentWillUnmount(){
  clearInterval(this.waitTimeUpdateTimer);
}

updateKegElapsedWaitTime() {
  console.log("check");
  let newMasterKegList = this.state.masterKegList.slice();
  newMasterKegList.forEach((keg) =>
  keg.formattedWaitTime = (keg.timeOpen).fromNow(true)
);
this.setState({masterKegList: newMasterKegList})
}


handleAddKegToList(newKeg) {
  var newMasterKegList = this.state.masterKegList.slice();
  newKeg.formattedWaitTime = (newKeg.timeOpen).fromNow(true)
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
