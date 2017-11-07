/* eslint react/jsx-no-bind: 0 */
/* The previous rule avoids errors on a NECESSARY binding in the render function */
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Popover from 'material-ui/Popover';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import ActionDone from 'material-ui/svg-icons/action/done';

import AppDispatcher from '../dispatcher';
import { AppStateStore } from '../AppStateStore';

class MarketSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleMarketSelection = this.handleMarketSelection.bind(this);

    this.actionStyle = {
      float: 'right',
    };
    this.actionIconStyle = {
      color: '#fff',
    };
  }

  componentDidMount() {
    AppStateStore.bind('set-market', () => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    AppStateStore.unbind('set-market', () => {
      this.forceUpdate();
    });
  }

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleMarketSelection(index) {
    AppDispatcher.setMarket(index);
    this.handleRequestClose();
  }

  render() {
    console.log(this.props.chosenMarketIndex);

    const appState = {
      chosenMarketIndex: AppStateStore.chosenMarketIndex,
      markets:
    }

    const chosenMarketIndex = AppStateStore.chosenMarketIndex;

    const marketMenuEntries = [];
    for (let i = 0; i < this.props.markets.length; i += 1) {
      marketMenuEntries.push(<MenuItem
        key={this.props.markets[i].code}
        primaryText={this.props.markets[i].name}
        onTouchTap={this.handleMarketSelection.bind(this, i)}
        rightIcon={i === chosenMarketIndex ? <ActionDone /> : null}
      />);
    }

    return (<div style={this.actionStyle}>
      <FlatButton
        label={`Market - ${this.props.markets[chosenMarketIndex] ? this.props.markets[chosenMarketIndex].code : 'N/A'}`}
        className="appbar-action"
        onTouchTap={this.handleTouchTap}
        labelPosition="before"
        icon={<KeyboardArrowDown />}
        style={this.actionIconStyle}
      />
      <Popover
        open={this.state.open}
        anchorEl={this.state.anchorEl}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        onRequestClose={this.handleRequestClose}
      >
        <Menu>
          {marketMenuEntries}
        </Menu>
      </Popover>
    </div>);
  }
}

MarketSelector.propTypes = {
  // changeMarket: React.PropTypes.func.isRequired,
  markets: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  chosenMarketIndex: React.PropTypes.number.isRequired,
};

export default MarketSelector;
