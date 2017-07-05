import React from "react";
import { Step, Stepper, StepLabel } from "material-ui/Stepper";

import StepButtons from "./StepButtons";
import SettingStep from "./SettingStep";
import DesignStep from "./DesignStep";

import assign from "object-assign";

import { indigo500 } from "material-ui/styles/colors";
import { pink500 } from "material-ui/styles/colors";
import { gray50 } from "material-ui/styles/colors";

import MaterialColor from "../utils/MaterialColor";

var colors = {
    primaryColor: new MaterialColor(indigo500),
    secondaryColor: new MaterialColor(pink500),
    primaryTextColor: indigo500,
    secondaryTextColor: indigo500
};

var projectsValues = {
    name: "",
    package: "",
    colors: colors
};

class ProjectStepper extends React.Component {
    constructor(props) {
        super();

        this.state = {
            finished: false,
            stepIndex: 0
        };

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    handleNext(values) {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2
        });

        if (values) {
            projectsValues = assign({}, projectsValues, values);
        }
    }

    handlePrev() {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    }

    getStepContent(stepIndex) {
        let stepContent;
        switch (stepIndex) {
            case 0:
                stepContent = (
                    <SettingStep
                        values={projectsValues}
                        next={this.handleNext}
                    />
                );
                break;
            case 1:
                stepContent = (
                    <DesignStep
                        values={projectsValues}
                        back={this.handlePrev}
                        next={this.handleNext}
                    />
                );
                break;
            case 2:
                stepContent = "Project Dependencies";
                break;
            default:
                return (stepContent = "None");
                break;
        }

        return <div className="content"> {stepContent} </div>;
    }

    render() {
        const { finished, stepIndex } = this.state;

        return (
            <div style={{ width: "100%", maxWidth: 1200, margin: "auto" }}>
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
                <div className="step-container">
                    {finished
                        ? <p>
                              <a
                                  href="#"
                                  onClick={event => {
                                      event.preventDefault();
                                      this.setState({
                                          stepIndex: 0,
                                          finished: false
                                      });
                                  }}
                              >
                                  Click here
                              </a>{" "}
                              to reset the example.
                          </p>
                        : <div>
                              {this.getStepContent(stepIndex)}
                          </div>}
                </div>
            </div>
        );
    }
}

export default ProjectStepper;
