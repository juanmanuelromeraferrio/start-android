import React from "react";
import PropTypes from "prop-types";

import { red400 } from "material-ui/styles/colors";
import { red500 } from "material-ui/styles/colors";
import { red700 } from "material-ui/styles/colors";
import { pink400 } from "material-ui/styles/colors";
import { pink500 } from "material-ui/styles/colors";
import { pink700 } from "material-ui/styles/colors";
import { purple400 } from "material-ui/styles/colors";
import { purple500 } from "material-ui/styles/colors";
import { purple700 } from "material-ui/styles/colors";
import { deepPurple400 } from "material-ui/styles/colors";
import { deepPurple500 } from "material-ui/styles/colors";
import { deepPurple700 } from "material-ui/styles/colors";
import { indigo400 } from "material-ui/styles/colors";
import { indigo500 } from "material-ui/styles/colors";
import { indigo700 } from "material-ui/styles/colors";
import { blue400 } from "material-ui/styles/colors";
import { blue500 } from "material-ui/styles/colors";
import { blue700 } from "material-ui/styles/colors";
import { lightBlue400 } from "material-ui/styles/colors";
import { lightBlue500 } from "material-ui/styles/colors";
import { lightBlue700 } from "material-ui/styles/colors";
import { cyan400 } from "material-ui/styles/colors";
import { cyan500 } from "material-ui/styles/colors";
import { cyan700 } from "material-ui/styles/colors";
import { teal400 } from "material-ui/styles/colors";
import { teal500 } from "material-ui/styles/colors";
import { teal700 } from "material-ui/styles/colors";
import { green400 } from "material-ui/styles/colors";
import { green500 } from "material-ui/styles/colors";
import { green700 } from "material-ui/styles/colors";
import { lightGreen400 } from "material-ui/styles/colors";
import { lightGreen500 } from "material-ui/styles/colors";
import { lightGreen700 } from "material-ui/styles/colors";
import { lime400 } from "material-ui/styles/colors";
import { lime500 } from "material-ui/styles/colors";
import { lime700 } from "material-ui/styles/colors";
import { yellow400 } from "material-ui/styles/colors";
import { yellow500 } from "material-ui/styles/colors";
import { yellow700 } from "material-ui/styles/colors";
import { amber400 } from "material-ui/styles/colors";
import { amber500 } from "material-ui/styles/colors";
import { amber700 } from "material-ui/styles/colors";
import { orange400 } from "material-ui/styles/colors";
import { orange500 } from "material-ui/styles/colors";
import { orange700 } from "material-ui/styles/colors";
import { deepOrange400 } from "material-ui/styles/colors";
import { deepOrange500 } from "material-ui/styles/colors";
import { deepOrange700 } from "material-ui/styles/colors";
import { brown400 } from "material-ui/styles/colors";
import { brown500 } from "material-ui/styles/colors";
import { brown700 } from "material-ui/styles/colors";
import { grey50 } from "material-ui/styles/colors";
import { grey300 } from "material-ui/styles/colors";
import { grey400 } from "material-ui/styles/colors";
import { grey500 } from "material-ui/styles/colors";
import { grey700 } from "material-ui/styles/colors";
import { grey900 } from "material-ui/styles/colors";
import { blueGrey400 } from "material-ui/styles/colors";
import { blueGrey500 } from "material-ui/styles/colors";
import { blueGrey700 } from "material-ui/styles/colors";

const colorsLeft = {
	Red: [red400, red500, red700],
	Purple: [purple400, purple500, purple700],
	Indigo: [indigo400, indigo500, indigo700],
	"Light Blue": [
		lightBlue400,
		lightBlue500,
		lightBlue700
	],
	Teal: [teal400, teal500, teal700],
	"Light Green": [
		lightGreen400,
		lightGreen500,
		lightGreen700
	],
	Yellow: [yellow400, yellow500, yellow700],
	Orange: [orange400, orange500, orange700],
	Brown: [brown400, brown500, brown700],
	"Blue Grey": [
		blueGrey400,
		blueGrey500,
		blueGrey700
	]
};

const colorsRight = {
	Pink: [pink400, pink500, pink700],
	"Deep Purple": [
		deepPurple400,
		deepPurple500,
		deepPurple700
	],
	Blue: [blue400, blue500, blue700],
	Cyan: [cyan400, cyan500, cyan700],
	Green: [green400, green500, green700],
	Lime: [lime400, lime500, lime700],
	Amber: [amber400, amber500, amber700],
	"Deep Orange": [
		deepOrange400,
		deepOrange500,
		deepOrange700
	],
	Grey: [grey400, grey500, grey700],
	White: [grey50, grey300, grey900]
};

function Colors(props) {
	return (
		<div>
			{Object.keys(props.colors).map(function(color) {
				return (
					<ul className="palette" key={color}>
						{props.colors[color].map(function(hex) {
							return (
								<li
									className="color"
									style={{ background: hex }}
									key={hex}
									onClick={props.onSelect.bind(null, hex)}
								/>
							);
						})}
					</ul>
				);
			})}
		</div>
	);
}

Colors.propTypes = {
	colors: PropTypes.object.isRequired,
	onSelect: PropTypes.func.isRequired
};

class Palette extends React.Component {
	constructor(props) {
		super();

		this.selectColor = this.selectColor.bind(this);
	}

	selectColor(color) {
		this.props.onSelect(color);
	}

	render() {
		return (
			<div className="palette-container">
				<Colors colors={colorsLeft} onSelect={this.selectColor} />
				<Colors colors={colorsRight} onSelect={this.selectColor} />
			</div>

		);
	}
}

Palette.propTypes = {
	onSelect: PropTypes.func.isRequired
};


export default Palette;