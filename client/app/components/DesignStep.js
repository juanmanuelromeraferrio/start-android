import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import StepButtons from "./StepButtons";
import Palette from "./Palette";
import PaletteButtons from "./PaletteButtons";

class DesignStep extends React.Component {
	constructor(props) {
		super();

		this.state = {
			values: props.values,
			buttonSelected: "primaryColor"
		};

		this.selectColor = this.selectColor.bind(this);
		this.selectButton = this.selectButton.bind(this);
		this.next = this.next.bind(this);
		this.back = this.back.bind(this);
	}

	selectColor(color) {
	    var newValues = this.state.values;
	    newValues[this.state.buttonSelected] = color;

	    this.setState({ 
	    	values: newValues
	    })
	}

	selectButton(button) {
		this.setState(function() {
			return {
				buttonSelected: button
			};
		});
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
				<div className="design-container">
					<Palette onSelect={this.selectColor} />
					<PaletteButtons
						selectButton={this.state.buttonSelected}
						onSelect={this.selectButton}
						primaryColor={this.state.values.primaryColor}
						secondaryColor={this.state.values.secondaryColor}
						primaryTextColor={this.state.values.primaryTextColor}
						secondaryTextColor={
							this.state.values.secondaryTextColor
						}
					/>
				</div>
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
