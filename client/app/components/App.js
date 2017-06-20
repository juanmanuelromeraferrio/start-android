var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

import {purple500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var NavBar = require('./NavBar');
var Card = require('./Card');
var ProjectStepper = require('./ProjectStepper');


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: purple500,
  },
});


class App extends React.Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={muiTheme}>
        	<div>
                <NavBar />
        		<Card>
                  <ProjectStepper />
        		</Card>
        	</div>
        </MuiThemeProvider>
      </Router>
    )
  }
}

module.exports = App;

//<Nav color='#9575cd' logo={require('../styles/images/android-logo.png')} />