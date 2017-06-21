import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

var assign        = require('object-assign')
var ProjectSettings = require('./ProjectSettings');

var projectsValues = {
  name     : '',
  package  : ''
}

class ProjectStepper extends React.Component {
  constructor(props) {
      super();

      this.state = {
        finished: false,
        stepIndex: 0,
      };

      this.handleNext = this.handleNext.bind(this);
      this.handlePrev = this.handlePrev.bind(this);
      this.saveValues = this.saveValues.bind(this);
  }

  handleNext() {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  }


  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  saveValues(values) {
    projectsValues = assign({}, projectsValues, values);
  };

  getStepContent(stepIndex) {
    let stepContent;
    switch (stepIndex) {
      case 0:
        stepContent = <ProjectSettings values={projectsValues} save={this.saveValues}/>;
        break;
      case 1:
       stepContent = 'Project Design';
       break;
      case 2:
        stepContent = 'Project Dependencies';
        break;
      default:
        return stepContent = 'None';
        break;
    }

    return <div className="content"> {stepContent} </div>
  }

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Project Setting</StepLabel>
          </Step>
          <Step>
            <StepLabel>Project Design</StepLabel>
          </Step>
          <Step>
            <StepLabel>Project Dependencies</StepLabel>
          </Step>
        </Stepper>
        <div className='step-container'>
          {finished ? (
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          ) : (
            <div>
              {this.getStepContent(stepIndex)}
              <div className='step-container button'>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  onTouchTap={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

module.exports = ProjectStepper;
