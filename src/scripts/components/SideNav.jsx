import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import PublicIcon from 'material-ui/svg-icons/social/public';
import { List, ListItem } from 'material-ui/List';

import conf from '../../conf';
import { avatar } from '../assets';

/*
ListItem: primaryTogglesNestedList={true}
ListItem: disabled={true}
Subheader: inset={true}
*/
const SideNav = props => (
  <Drawer
    containerClassName="sidenav"
    docked={false}
    open={props.opened}
    onRequestChange={props.toggleSidenav}
  >
    <List>
      <ListItem
        primaryText={conf.projectName}
      />
      <Divider />
      <ListItem
        leftAvatar={<Avatar src={avatar} />}
        primaryText={conf.user.name}
        secondaryText={conf.user.group}
        initiallyOpen={false}
        nestedItems={[
          <ListItem
            key={1}
            primaryText="Logout"
          />,
        ]}
      />
      <Divider />
      <Subheader>Recent campaigns</Subheader>
      {/* Close sidenav on click */}
      <ListItem primaryText="Campaign 1" leftIcon={<PublicIcon />} />
      <ListItem primaryText="Campaign 2" leftIcon={<PublicIcon />} />
    </List>
  </Drawer>
);

SideNav.propTypes = {
  opened: PropTypes.bool.isRequired,
  toggleSidenav: PropTypes.func.isRequired,
};


export default SideNav;
