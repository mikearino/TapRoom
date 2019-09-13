import React from 'react'

class NewKegControl extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    formVisibleOnPage: false
  };
  this.handleClick = this.handleClick.bind(this);
}

handleClick(){
  this.setState({formVisibleOnPage: true});
  console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
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
