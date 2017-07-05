import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import StepButtons from "./StepButtons";
import Palette from "./Palette";
import PaletteButtons from "./PaletteButtons";
import LoginTemplate from "./LoginTemplate";
import RegistrationTemplate from "./RegistrationTemplate";
import MaterialColor from "../utils/MaterialColor";
import ColorButton from "../utils/ColorButton";
import ArrowLeft from "material-ui/svg-icons/hardware/keyboard-arrow-left";
import ArrowRight from "material-ui/svg-icons/hardware/keyboard-arrow-right";
import IconButton from "material-ui/IconButton";

function isColorButton(buttonId) {
	if (buttonId.indexOf("Text") >= 0) {
		return false;
	}
	return true;
}

var tempalateNames = {
	0: "Login",
	1: "Registration",
	2: "Home"
};

class DesignStep extends React.Component {
	constructor(props) {
		super();

		this.state = {
			values: props.values,
			buttonSelected: "primaryColor",
			templateIndex: 0
		};

		this.selectColor = this.selectColor.bind(this);
		this.selectButton = this.selectButton.bind(this);
		this.moveTemplate = this.moveTemplate.bind(this);
		this.next = this.next.bind(this);
		this.back = this.back.bind(this);
	}

	moveTemplate(event, move) {
		event.preventDefault();
		const { templateIndex } = this.state;
		let newTemplateIndex = templateIndex + move;
		let size = Object.keys(tempalateNames).length;

		if (newTemplateIndex >= size) {
			newTemplateIndex = 0;
		} else if (newTemplateIndex < 0) {
			newTemplateIndex = size - 1;
		}
		console.log(newTemplateIndex);
		this.setState({
			templateIndex: newTemplateIndex
		});
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

	getTemplate(templateIndex) {
		let templateContent;
		switch (templateIndex) {
			case 0:
				templateContent = (
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
				);
				break;
			case 1:
				templateContent = (
					<RegistrationTemplate
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
				);
				break;
			default:
				templateContent = "None";
				break;
		}

		return (
			<div>
				<div className="template-nav">
					<IconButton
						onClick={event => {
							this.moveTemplate(event, -1);
						}}
					>
						<ArrowLeft />
					</IconButton>
					<span>
						{tempalateNames[this.state.templateIndex]}
					</span>
					<IconButton
						onClick={event => {
							this.moveTemplate(event, 1);
						}}
					>
						<ArrowRight />
					</IconButton>
				</div>
				<div>
					{templateContent}
				</div>
			</div>
		);
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
					{this.getTemplate(this.state.templateIndex)}
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
