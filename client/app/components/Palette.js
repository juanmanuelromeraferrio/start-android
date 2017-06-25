import React from "react";
import PropTypes from "prop-types";

import { red50 } from "material-ui/styles/colors";
import { red200 } from "material-ui/styles/colors";
import { red400 } from "material-ui/styles/colors";
import { red500 } from "material-ui/styles/colors";
import { red700 } from "material-ui/styles/colors";
import { pink50 } from "material-ui/styles/colors";
import { pink200 } from "material-ui/styles/colors";
import { pink400 } from "material-ui/styles/colors";
import { pink500 } from "material-ui/styles/colors";
import { pink700 } from "material-ui/styles/colors";
import { purple50 } from "material-ui/styles/colors";
import { purple200 } from "material-ui/styles/colors";
import { purple400 } from "material-ui/styles/colors";
import { purple500 } from "material-ui/styles/colors";
import { purple700 } from "material-ui/styles/colors";
import { deepPurple50 } from "material-ui/styles/colors";
import { deepPurple200 } from "material-ui/styles/colors";
import { deepPurple400 } from "material-ui/styles/colors";
import { deepPurple500 } from "material-ui/styles/colors";
import { deepPurple700 } from "material-ui/styles/colors";
import { indigo50 } from "material-ui/styles/colors";
import { indigo200 } from "material-ui/styles/colors";
import { indigo400 } from "material-ui/styles/colors";
import { indigo500 } from "material-ui/styles/colors";
import { indigo700 } from "material-ui/styles/colors";
import { blue50 } from "material-ui/styles/colors";
import { blue200 } from "material-ui/styles/colors";
import { blue400 } from "material-ui/styles/colors";
import { blue500 } from "material-ui/styles/colors";
import { blue700 } from "material-ui/styles/colors";
import { lightBlue50 } from "material-ui/styles/colors";
import { lightBlue200 } from "material-ui/styles/colors";
import { lightBlue400 } from "material-ui/styles/colors";
import { lightBlue500 } from "material-ui/styles/colors";
import { lightBlue700 } from "material-ui/styles/colors";
import { cyan50 } from "material-ui/styles/colors";
import { cyan200 } from "material-ui/styles/colors";
import { cyan400 } from "material-ui/styles/colors";
import { cyan500 } from "material-ui/styles/colors";
import { cyan700 } from "material-ui/styles/colors";
import { teal50 } from "material-ui/styles/colors";
import { teal200 } from "material-ui/styles/colors";
import { teal400 } from "material-ui/styles/colors";
import { teal500 } from "material-ui/styles/colors";
import { teal700 } from "material-ui/styles/colors";
import { green50 } from "material-ui/styles/colors";
import { green200 } from "material-ui/styles/colors";
import { green400 } from "material-ui/styles/colors";
import { green500 } from "material-ui/styles/colors";
import { green700 } from "material-ui/styles/colors";
import { lightGreen50 } from "material-ui/styles/colors";
import { lightGreen200 } from "material-ui/styles/colors";
import { lightGreen400 } from "material-ui/styles/colors";
import { lightGreen500 } from "material-ui/styles/colors";
import { lightGreen700 } from "material-ui/styles/colors";
import { lime50 } from "material-ui/styles/colors";
import { lime200 } from "material-ui/styles/colors";
import { lime400 } from "material-ui/styles/colors";
import { lime500 } from "material-ui/styles/colors";
import { lime700 } from "material-ui/styles/colors";
import { yellow50 } from "material-ui/styles/colors";
import { yellow200 } from "material-ui/styles/colors";
import { yellow400 } from "material-ui/styles/colors";
import { yellow500 } from "material-ui/styles/colors";
import { yellow700 } from "material-ui/styles/colors";
import { amber50 } from "material-ui/styles/colors";
import { amber200 } from "material-ui/styles/colors";
import { amber400 } from "material-ui/styles/colors";
import { amber500 } from "material-ui/styles/colors";
import { amber700 } from "material-ui/styles/colors";
import { orange50 } from "material-ui/styles/colors";
import { orange200 } from "material-ui/styles/colors";
import { orange400 } from "material-ui/styles/colors";
import { orange500 } from "material-ui/styles/colors";
import { orange700 } from "material-ui/styles/colors";
import { deepOrange50 } from "material-ui/styles/colors";
import { deepOrange200 } from "material-ui/styles/colors";
import { deepOrange400 } from "material-ui/styles/colors";
import { deepOrange500 } from "material-ui/styles/colors";
import { deepOrange700 } from "material-ui/styles/colors";
import { brown50 } from "material-ui/styles/colors";
import { brown200 } from "material-ui/styles/colors";
import { brown400 } from "material-ui/styles/colors";
import { brown500 } from "material-ui/styles/colors";
import { brown700 } from "material-ui/styles/colors";
import { grey50 } from "material-ui/styles/colors";
import { grey200 } from "material-ui/styles/colors";
import { grey400 } from "material-ui/styles/colors";
import { grey500 } from "material-ui/styles/colors";
import { grey700 } from "material-ui/styles/colors";
import { blueGrey50 } from "material-ui/styles/colors";
import { blueGrey200 } from "material-ui/styles/colors";
import { blueGrey400 } from "material-ui/styles/colors";
import { blueGrey500 } from "material-ui/styles/colors";
import { blueGrey700 } from "material-ui/styles/colors";

const colors = {
	Red: [red50, red200, red400, red500, red700],
	Pink: [pink50, pink200, pink400, pink500, pink700],
	Purple: [purple50, purple200, purple400, purple500, purple700],
	"Deep Purple": [
		deepPurple50,
		deepPurple200,
		deepPurple400,
		deepPurple500,
		deepPurple700
	],
	Indigo: [indigo50, indigo200, indigo400, indigo500, indigo700],
	Blue: [blue50, blue200, blue400, blue500, blue700],
	"Light Blue": [
		lightBlue50,
		lightBlue200,
		lightBlue400,
		lightBlue500,
		lightBlue700
	],
	Cyan: [cyan50, cyan200, cyan400, cyan500, cyan700],
	Teal: [teal50, teal200, teal400, teal500, teal700],
	Green: [green50, green200, green400, green500, green700],
	"Light Green": [
		lightGreen50,
		lightGreen200,
		lightGreen400,
		lightGreen500,
		lightGreen700
	],
	Lime: [lime50, lime200, lime400, lime500, lime700],
	Yellow: [yellow50, yellow200, yellow400, yellow500, yellow700],
	Amber: [amber50, amber200, amber400, amber500, amber700],
	Orange: [orange50, orange200, orange400, orange500, orange700],
	"Deep Orange": [
		deepOrange50,
		deepOrange200,
		deepOrange400,
		deepOrange500,
		deepOrange700
	],
	Brown: [brown50, brown200, brown400, brown500, brown700],
	Grey: [grey50, grey200, grey400, grey500, grey700],
	"Blue Grey": [
		blueGrey50,
		blueGrey200,
		blueGrey400,
		blueGrey500,
		blueGrey700
	]
};

function Labels(props) {
	return (
		<ul className="color-labels">
			{props.colors.map(function(color) {
				return (
					<li className="color-label" key={color}>
						{color}
						<div className="color-label-divider" />
					</li>
				);
			})}
		</ul>
	);
}

Labels.propTypes = {
  colors: PropTypes.array.isRequired,
};

function Colors(props) {
	return (
		<div className="palettes">
			{Object.keys(props.colors).map(function(color) {
				return (
					<ul className="palette-container" key={color}>
						{props.colors[color].map(function(hex) {
							return (
								<li
									className="color"
									style={{ background: hex }}
									key={hex}
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
};

class Palette extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		return (
			<div className="labels-and-palettes">
				<Labels colors={Object.keys(colors)} />
				<Colors colors={colors} />
			</div>
		);
	}
}

export default Palette;