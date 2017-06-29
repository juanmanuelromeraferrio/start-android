import React from "react";
import PropTypes from "prop-types";
import Arrow from "material-ui/svg-icons/hardware/keyboard-backspace";

const iconStyles = {
	marginRight: 24
};

/*
<Arrow style={iconStyles} />
*/

class PaletteButtons extends React.Component {
	constructor(props) {
		super();

		this.selectButton = this.selectButton.bind(this);
	}

	selectButton(event) {
		const target = event.target;
		const button = target.id;
		this.props.onSelect(button);
	}

	render() {
		return (
			<div className="palette-button-container">
				<div
					id="primaryColor"
					className={
						this.props.selectButton === "primaryColor"
							? "pl-button-active color"
							: "pl-button color"
					}
					style={{ background: this.props.primaryColor }}
					onClick={this.selectButton}
				>
					Color Primary
				</div>
				<div
					id="secondaryColor"
					className={
						this.props.selectButton === "secondaryColor"
							? "pl-button-active color"
							: "pl-button color"
					}
					style={{ background: this.props.secondaryColor }}
					onClick={this.selectButton}
				>
					Color Secondary
				</div>
				<div
					id="primaryTextColor"
					className={
						this.props.selectButton === "primaryTextColor"
							? "pl-button-active text"
							: "pl-button text"
					}
					style={{ background: this.props.primaryTextColor }}
					onClick={this.selectButton}
				>
					Text Primary
				</div>
				<div
					id="secondaryTextColor"
					className={
						this.props.selectButton === "secondaryTextColor"
							? "pl-button-active text"
							: "pl-button text"
					}
					style={{ background: this.props.secondaryTextColor }}
					onClick={this.selectButton}
				>
					Text Secondary
				</div>
			</div>
		);
	}
}

PaletteButtons.propTypes = {
	selectButton: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired,
	primaryColor: PropTypes.string.isRequired,
	secondaryColor: PropTypes.string.isRequired,
	primaryTextColor: PropTypes.string.isRequired,
	secondaryTextColor: PropTypes.string.isRequired
};

export default PaletteButtons;
