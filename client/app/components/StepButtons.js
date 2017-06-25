import React from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";

class StepButtons extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="step-container button">
        <FlatButton
          label="Back"
          disabled={!this.props.back}
          onTouchTap={this.props.back}
          style={{ marginRight: 12 }}
        />
        <RaisedButton
          label="Next"
          primary={true}
          onTouchTap={this.props.next}
        />
      </div>
    );
  }
}

StepButtons.propTypes = {
  next: PropTypes.func,
  back: PropTypes.func
};

export default StepButtons;