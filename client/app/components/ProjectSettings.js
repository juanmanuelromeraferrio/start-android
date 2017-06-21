var React = require('react');

import TextField from 'material-ui/TextField';


class ProjectSettings extends React.Component {
	constructor(props) {
    	super();

    	this.state = {
    		values: props.values
    	};

    	this.inputChange = this.inputChange.bind(this);
  	}

	inputChange(event, newValue) {
	    const target = event.target;
	    const name = target.name;
	    var newValues = this.state.values;
	    newValues[name] = newValue;

	    this.setState({ 
	    	values: newValues
	    })

	    this.props.save(this.state.values);
	}

	render() {
		return (
			<div className='row'>
				<TextField hintText="Project Name"  name='name' value={this.state.values.name} onChange={this.inputChange}/>
				<TextField hintText="Package Name"  name='package' value={this.state.values.package} onChange={this.inputChange}/>
			</div>
		)
	}
}

module.exports = ProjectSettings;