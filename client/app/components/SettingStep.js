import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import StepButtons from './StepButtons'
import {red500} from 'material-ui/styles/colors';

var fieldModify = {
	name: false,
	package: false
};

const styles = {
  errorStyle: {
    color: red500,
  }
};

class SettingStep extends React.Component {
	constructor(props) {
    	super();

    	this.state = {
    		values: props.values
    	};

    	this.next = this.next.bind(this);
    	this.inputChange = this.inputChange.bind(this);
  	}

	inputChange(event, newValue) {
	    const target = event.target;
	    const name = target.name;
	    var newValues = this.state.values;
	    newValues[name] = newValue;
	    fieldModify[name] = true;

	    this.setState({ 
	    	values: newValues
	    })
	}

	next() {
		if(this.state.values.name && this.state.values.package) {
	    	this.props.next(this.state.values);
		}
	}

	render() {
		return (
				<div>
					<div className='row'>
						<TextField hintText="Project Name"  name='name' value={this.state.values.name} onChange={this.inputChange}
						errorText={!this.state.values.name && fieldModify.name ? 'This field is required' : ''}
						errorStyle={styles.errorStyle}
						/>
						<TextField hintText="Package Name"  name='package' value={this.state.values.package} onChange={this.inputChange}
						errorText={!this.state.values.package && fieldModify.package ? 'This field is required' : ''}
						errorStyle={styles.errorStyle}
						/>
					</div>
					<StepButtons next={this.next} />
				</div>
		)
	}
}

SettingStep.propTypes = {
  values: PropTypes.object.isRequired,
  next: PropTypes.func.isRequired,
};

export default SettingStep;