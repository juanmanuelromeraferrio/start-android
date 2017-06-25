import React from "react";
import ReactDOM from "react-dom";
import ReactRouter from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

import { purple500 } from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import NavBar from "./NavBar";
import Card from "./Card";
import ProjectStepper from "./ProjectStepper";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: purple500
  }
});

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <NavBar />
            <div className="container">
              <ProjectStepper />
            </div>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;