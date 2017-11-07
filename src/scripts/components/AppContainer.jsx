import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import { green700 } from 'material-ui/styles/colors';

import SideNav from './SideNav';
import MarketSelector from './MarketSelector';
import { toggleSidenav } from '../actions';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green700,
  },
});

const Div = glamorous.div({
  marginLeft: '300px',
});

const App = props => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <SideNav
        opened={props.sidenavOpened}
        toggleSidenav={props.toggleSidenav}
      />
      <Div>
        <FlatButton label="Default" onClick={props.toggleSidenav} />
      </Div>
      <MarketSelector />
    </div>

  </MuiThemeProvider>
);

App.propTypes = {
  sidenavOpened: PropTypes.bool.isRequired,
  toggleSidenav: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  sidenavOpened: state.sidenavOpened,
  marketCode: state.currentMarket,
});

const mapDispatchToProps = {
  toggleSidenav,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
