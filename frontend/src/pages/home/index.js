import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import ReorderIcon from 'material-ui/svg-icons/action/reorder';
import HomeIcon from 'material-ui/svg-icons/action/home';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import Settings from '../../components/molecules/settings';
import actions from './actions.js';


const mapStateToProps = (state) => ({
  settingsOpen: state.settingsOpen.open,
});

@connect(mapStateToProps, actions)
class Home extends React.Component {
  static propTypes = {
    settingsOpen: PropTypes.bool,
    toggleSettings: PropTypes.func.isRequired,
  }

  static defaultProps = {
    settingsOpen: false,
  }

  render() {
    return (
      <Paper>
        <Drawer
          openSecondary
          open={this.props.settingsOpen}
        >
          <MenuItem
            primaryText="&nbsp;"
            rightIcon={<CloseIcon onClick={this.props.toggleSettings} />}
          />
          <Settings />
        </Drawer>

        <AppBar
          title="Tilda Center"
          iconElementLeft={
            <IconButton onTouchTap={this.handleHomeTouchTap} >
              <HomeIcon />
            </IconButton>
          }
          iconElementRight={
            <IconButton onTouchTap={this.props.toggleSettings} >
              <ReorderIcon />
            </IconButton>
          }
        />
        Home
      </Paper>
    );
  }
}


export default Home;
