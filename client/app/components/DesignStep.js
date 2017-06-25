import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import StepButtons from "./StepButtons";

class DesignStep extends React.Component {
	constructor(props) {
		super();

		this.state = {
			values: props.values
		};

		this.next = this.next.bind(this);
		this.back = this.back.bind(this);
	}

	back() {
		this.props.back();
	}

	next() {
		this.props.next(this.state.values);
	}

	render() {
		return (
			<div>
				<StepButtons back={this.back} next={this.next} />
			</div>
		);
	}
}

DesignStep.propTypes = {
	values: PropTypes.object.isRequired,
	next: PropTypes.func.isRequired,
	back: PropTypes.func.isRequired
};

export default DesignStep;