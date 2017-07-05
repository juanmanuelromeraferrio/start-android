import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class RegistrationTemplate extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		var theme = {
			palette: {
				primary1Color: this.props.primaryColors.color,
				accent1Color: this.props.secondaryColors.color
			}
		};
		const muiTheme = getMuiTheme(theme);
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div className="login-template-container">

					<div
						className="template-status"
						style={{ background: this.props.primaryColors.dark }}
					/>
					<div
						className="template-body"
						style={{ background: "white" }}
					>

						<div
							className="template-toolbar"
							style={{
								background: this.props.primaryColors.color
							}}
						/>
						<TextField className="template-text" hintText="Name" />
						<TextField className="template-text" hintText="Email" />
						<TextField className="template-text" hintText="Password" />
						<RaisedButton
							className="template-button"
							label="Create Account"
							secondary={true}
						/>
					</div>

				</div>
			</MuiThemeProvider>
		);
	}
}

RegistrationTemplate.propTypes = {
	primaryColors: PropTypes.object.isRequired,
	secondaryColors: PropTypes.object.isRequired,
	primaryTextColor: PropTypes.string.isRequired,
	secondaryTextColor: PropTypes.string.isRequired
};

export default RegistrationTemplate;
