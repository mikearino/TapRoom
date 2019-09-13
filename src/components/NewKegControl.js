import React from 'react'

class NewKegControl extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    formVisibleOnPage: false
  }
}

handleClick(){
  console.log("clicked me")
}
  render(){
    return(
      <div>
      <p> This is the NewKegControl component</p>
      <strong onClick={this.handleClick}>Click to change state</strong>
      </div>
    );
  }
}


export default NewKegControl;
