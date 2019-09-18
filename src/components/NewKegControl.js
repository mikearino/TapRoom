import React from "react";
import NewKegForm from "./NewKegForm";
import ConfirmationQuestions from "./ConfirmationQuestions";
import PropTypes from "prop-types";

class NewKegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleDrankFourLoko = this.handleDrankFourLoko.bind(this);
  }

  handleDrankFourLoko() {
    this.setState({ formVisibleOnPage: true });
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = (
        <NewKegForm onNewKegCreation={this.props.onNewKegCreation} />
      );
    } else {
      currentlyVisibleContent = (
        <ConfirmationQuestions onDrankFourLoko={this.handleDrankFourLoko} />
      );
    }
    return <div>{currentlyVisibleContent}</div>;
  }
}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegControl;
