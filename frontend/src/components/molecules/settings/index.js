import React from 'react';
import PropTypes from 'prop-types';
import LogoutIcon from 'material-ui/svg-icons/action/input';
import MenuItem from 'material-ui/MenuItem';
import { postLogoutURL } from '../../../constants';


const styles = {
  settings: {
    item: {
      cursor: 'pointer',
    },
  },
};


class Settings extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.handleLogout = () => {
      window.localStorage.removeItem('auth');
      this.context.router.push(postLogoutURL);
    };
  }

  render() {
    return (
      <MenuItem
        primaryText="Logout"
        leftIcon={<LogoutIcon />}
        onTouchTap={this.handleLogout}
        style={styles.settings.item}
      />
    );
  }
}

export default Settings;
