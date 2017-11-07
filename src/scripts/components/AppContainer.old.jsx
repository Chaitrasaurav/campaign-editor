/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { green700 } from 'material-ui/styles/colors';
import SideNav from './components/SideNav';
import Editor from './components/Editor';
import conf from '../conf';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green700,
  },
});

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sidenavOpen: false };
    this.toggleSidenav = this.toggleSidenav.bind(this);
  }

  toggleSidenav() {
    this.setState({ sidenavOpen: !this.state.sidenavOpen });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <SideNav
            conf={conf}
            sidenavOpen={this.state.sidenavOpen}
            toggleSidenav={this.toggleSidenav}
          />
          <Editor
            className="container"
            toggleSidenav={this.toggleSidenav}
            sidenavOpen={this.state.sidenavOpen}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export defaults AppContainer;
