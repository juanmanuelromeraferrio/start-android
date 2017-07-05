import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class LoginTemplate extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		var theme = {
			palette: {
				primary1Color: this.props.primaryColors.color
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
						<Logo className="template-logo"
							viewBox="0 0 550 550"
							color={this.props.primaryColors.color}
						/>
						<TextField className="template-text" hintText="Email" />
						<TextField
							className="template-text"
							hintText="Password"
						/>
						<RaisedButton
							className="template-button"
							label="Login"
							primary={true}
						/>
						<p
							className="template-link"
							style={{ color: this.props.primaryColors.color }}
						>
							No account yet? Create one{" "}
						</p>
					</div>

				</div>
			</MuiThemeProvider>
		);
	}
}

LoginTemplate.propTypes = {
	primaryColors: PropTypes.object.isRequired,
	secondaryColors: PropTypes.object.isRequired,
	primaryTextColor: PropTypes.string.isRequired,
	secondaryTextColor: PropTypes.string.isRequired
};

export default LoginTemplate;
