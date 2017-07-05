import React from "react";
import PropTypes from "prop-types";
import Arrow from "material-ui/svg-icons/hardware/keyboard-backspace";

class PaletteButtons extends React.Component {
	constructor(props) {
		super();

		this.selectButton = this.selectButton.bind(this);
		this.renderButton = this.renderButton.bind(this);
	}

	renderButton(button) {
		return (
			<div
				id={button.id}
				key={button.id}
				className={
					this.props.selectButton === button.id
						? "pl-button-active " + button.type
						: "pl-button " + button.type
				}
				style={{ background: button.color }}
				onClick={this.selectButton}
			>
				{button.name}
			</div>
		);
	}

	selectButton(event) {
		event.preventDefault();
		const button = event.target.id;
		this.props.onSelect(button);
	}

	render() {
		return (
			<div className="palette-button-container">
				{this.props.buttons.map(button => this.renderButton(button))}
			</div>
		);
	}
}

PaletteButtons.propTypes = {
	selectButton: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired,
	buttons: PropTypes.array.isRequired,
};

export default PaletteButtons;
