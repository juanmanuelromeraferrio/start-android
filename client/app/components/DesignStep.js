import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import StepButtons from "./StepButtons";
import Palette from "./Palette";
import PaletteButtons from "./PaletteButtons";
import LoginTemplate from "./LoginTemplate";
import MaterialColor from "../utils/MaterialColor";
import ColorButton from "../utils/ColorButton";


function isColorButton(buttonId) {
	if (buttonId.indexOf("Text") >= 0) {
		return false;
	}
	return true;
}

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
		if (isColorButton(this.state.buttonSelected)) {
			newValues.colors[this.state.buttonSelected] = new MaterialColor(
				color
			);
		} else {
			newValues.colors[this.state.buttonSelected] = color;
		}

		this.setState({
			values: newValues
		});
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
		const buttons = [
			new ColorButton(
				"primaryColor",
				"Primary Color",
				"color",
				this.state.values.colors.primaryColor.color
			),
			new ColorButton(
				"secondaryColor",
				"Secondary Color",
				"color",
				this.state.values.colors.secondaryColor.color
			),
			new ColorButton(
				"primaryTextColor",
				"Text Primary",
				"text",
				this.state.values.colors.primaryTextColor
			),
			new ColorButton(
				"secondaryTextColor",
				"Text Secondary",
				"text",
				this.state.values.colors.secondaryTextColor
			)
		];
		return (
			<div>
				<div className="design-container">
					<Palette onSelect={this.selectColor} />
					<PaletteButtons
						selectButton={this.state.buttonSelected}
						onSelect={this.selectButton}
						buttons={buttons}
					/>
					<LoginTemplate
						primaryColors={this.state.values.colors.primaryColor}
						secondaryColors={
							this.state.values.colors.secondaryColor
						}
						primaryTextColor={
							this.state.values.colors.primaryTextColor
						}
						secondaryTextColor={
							this.state.values.colors.secondaryTextColor
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
