var React = require('react');

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Logo from './Logo';

const logoStyle = {
  width: 30,
  height: 30,
};


class NavBar extends React.Component {
	render() {
		return (
					<AppBar
					    iconElementLeft={
						    <IconButton iconStyle={logoStyle} href="/"> 
						    	<Logo viewBox='0 0 550 550'/>
						    </IconButton>
						}
					/>
		)
	}
}

module.exports = NavBar;
