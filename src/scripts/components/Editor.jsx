import React from 'react';
import ActionBar from './ActionBar';

import ContentEditor from './ContentEditor';
import AssetEditor from './AssetEditor';
import conf from '../../conf';

import { getMarkets } from '../AppStateStore';

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: 'Content',
      chosenMarketIndex: 0,
      market: { code: 'en', name: 'Master English' },
      markets: [],
      contentFields: {},
    };

    this.switchToAssets = this.switchToAssets.bind(this);
    this.switchToContent = this.switchToContent.bind(this);
    this.handleMarketSelection = this.handleMarketSelection.bind(this);
  }

  componentDidMount() {
    getMarkets(conf.campaignId)
      .then((res) => {
        this.setState({
          markets: res.marketCodes.map(val => ({ code: val, name: val })),
          contentFields: res.data.en, // TODO here
        });
      });
  }

  switchToAssets() {
    this.setState({
      currentView: 'Assets',
    });
    // TODO show assets
  }
  switchToContent() {
    this.setState({
      currentView: 'Content',
    });
    // TODO show content
  }

  handleMarketSelection(selectionIndex) {
    this.setState({
      chosenMarketIndex: selectionIndex,
      market: this.state.markets[selectionIndex],
    });
    // TODO change market
  }

  render() {
    return (
      <div className="main">
        <ActionBar
          sidenavOpen={this.props.sidenavOpen}
          toggleSidenav={this.props.toggleSidenav}
          currentView={this.state.currentView}
          switchToAssets={this.switchToAssets}
          switchToContent={this.switchToContent}
          markets={this.state.markets}
          chosenMarketIndex={this.state.chosenMarketIndex}
          changeMarket={this.handleMarketSelection}
        />
        <div className="editor">
          {
            this.state.currentView === 'Assets' ?
              <AssetEditor /> :
              <ContentEditor
                fields={this.state.contentFields}
                market={this.state.market}
              />
          }
        </div>
      </div>
    );
  }
}

// this.state.markets[this.state.chosenMarketIndex]

Editor.propTypes = {
  sidenavOpen: React.PropTypes.bool.isRequired,
  toggleSidenav: React.PropTypes.func.isRequired,
};

export default Editor;
