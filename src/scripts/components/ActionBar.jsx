import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MarketSelector from './MarketSelector';

const ActionBarActions = props => (
  <div>
    <FlatButton label="Save" className="appbar-action" />
    <FlatButton label="Publish" className="appbar-action" />
    {props.currentView === 'Content' ?
      <FlatButton
        label="Switch to assets"
        className="appbar-action"
        onTouchTap={props.switchToAssets}
      /> :
      <FlatButton
        label="Switch to content"
        className="appbar-action"
        onTouchTap={props.switchToContent}
      />
    }
    <MarketSelector
      markets={props.markets}
      chosenMarketIndex={props.chosenMarketIndex}
      changeMarket={props.changeMarket}
    />
  </div>
);

const ActionBar = props => (
  <AppBar
    title="Campaign 1"
    onLeftIconButtonTouchTap={props.toggleSidenav}
    iconElementRight={
      <ActionBarActions
        switchToAssets={props.switchToAssets}
        switchToContent={props.switchToContent}
        currentView={props.currentView}
        markets={props.markets}
        chosenMarketIndex={props.chosenMarketIndex}
        changeMarket={props.changeMarket}
      />
    }
  />
);

const defaultPropTypes = {
  currentView: React.PropTypes.string.isRequired,
  switchToAssets: React.PropTypes.func.isRequired,
  switchToContent: React.PropTypes.func.isRequired,
  changeMarket: React.PropTypes.func.isRequired,
  markets: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  chosenMarketIndex: React.PropTypes.number.isRequired,
};

ActionBarActions.propTypes = defaultPropTypes;
ActionBar.propTypes = Object.assign({
  toggleSidenav: React.PropTypes.func.isRequired,
}, defaultPropTypes);

export default ActionBar;
