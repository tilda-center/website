import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import ReorderIcon from 'material-ui/svg-icons/action/reorder';
import HomeIcon from 'material-ui/svg-icons/action/home';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import Settings from '../../components/molecules/settings';
import { isLoggedIn } from '../../utils';
import styles from './styles';
import actions from './actions.js';


const mapStateToProps = (state) => ({
  settingsOpen: state.settings.open,
});


class Template extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    close: PropTypes.func.isRequired,
    settingsOpen: PropTypes.bool,
    toggleSettings: PropTypes.func.isRequired,
  }

  static defaultProps = {
    settingsOpen: false,
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.handleHomeClick = () => {
      if (isLoggedIn()) {
        this.context.router.history.push('/');
      } else {
        this.context.router.history.push('/landing');
      }
    };
  }

  componentWillMount() {
    this.props.close();
  }

  render() {
    return (
      <div style={styles.content}>
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
            <IconButton onClick={this.handleHomeClick} >
              <HomeIcon />
            </IconButton>
          }
          iconElementRight={
            <IconButton onTouchTap={this.props.toggleSettings} >
              <ReorderIcon />
            </IconButton>
          }
        />
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(Template)
