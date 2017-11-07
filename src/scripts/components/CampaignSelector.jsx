 import React, { Component } from 'react';
 import PropTypes from 'prop-types';
 import { connect } from 'react-redux';
 import { changeCampaign } from '../actions';

 class SelectCampaign extends Component {

   createCampaignList() {
     return this.props.availableCampaigns.map(campaign =>
       <li key={campaign.id}>
         <btn onClick={() => this.props.changeCampaign(campaign.name)}>{campaign.name}</btn>
       </li>,
     );
   }

   render() {
     return (
       <div>
         <h3>Current Campaign: {this.props.currentCampaign}</h3><hr />
         <h4>Available Campaigns:</h4>
         <ul>
           {this.createCampaignList()}
         </ul>
         <h3>Selected Campaign: {this.props.selectedCampaign}</h3>
       </div>
     );
   }
  }

 const mapStateToProps = state => ({
   currentCampaign: state.currentCampaignName,
   availableCampaigns: state.availableCampaigns,
   selectedCampaign: state.selectedCampaign,
 });

 SelectCampaign.propTypes = {
   currentCampaign: PropTypes.string.isRequired,
   availableCampaigns: PropTypes.arrayOf(PropTypes.object).isRequired,
   changeCampaign: PropTypes.func.isRequired,
   selectedCampaign: PropTypes.string,
 };

 SelectCampaign.defaultProps = state => ({
   selectedCampaign: state.currentCampaignName,
 });

 const mapDispatchToProps = {
   changeCampaign,
 };

 export default connect(mapStateToProps, mapDispatchToProps)(SelectCampaign);
