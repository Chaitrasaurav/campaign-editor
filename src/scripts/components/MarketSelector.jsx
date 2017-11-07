import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { activeMarket } from '../actions';

class SelectMarket extends Component {
  constructor(props) {
    super(props);

    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  componentWillMount() {
    this.setState({
      opened: false,
    });
  }

  createMarketList() {
    return this.props.availableMarkets.map(market => (
      <MenuItem key={market} primaryText={market} onClick={() => this.changeMarketFunction(market)} />
    ));
  }

  changeMarketFunction(market) {
    this.props.activeMarket(market);
    this.handleRequestClose();
  }

  handleRequestClose() {
    this.setState({
      opened: false,
    });
  }

  handleTouchTap(event) {
    event.preventDefault();

    this.setState({
      anchorEl: event.currentTarget,
      opened: !this.state.opened,
    });
  }

  render() {
    return (
      <div className="header">
        <RaisedButton
          label="Assets"
        />
        <RaisedButton
          label="Content"
        />
        <RaisedButton
          label="Save"
        />
        <RaisedButton
          label="Publish"
        />
        <div className="market-selector">
          <RaisedButton
            onClick={this.handleTouchTap}
            label={this.props.currentMarket}
          />
          <Popover
            open={this.state.opened}
            anchorEl={this.state.anchorEl}
            animation={PopoverAnimationVertical}
            onRequestClose={this.handleRequestClose}
          >
            <Menu className="market-selector-dropdown">
              {this.createMarketList()}
            </Menu>
          </Popover>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentMarket: state.currentMarket,
  availableMarkets: state.availableMarkets,
});

SelectMarket.propTypes = {
  currentMarket: PropTypes.string.isRequired,
  availableMarkets: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeMarket: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  activeMarket,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectMarket);
