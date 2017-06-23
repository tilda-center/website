import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Style } from 'radium';
import Snackbar from 'material-ui/Snackbar';
import reset from '../../reset.js';
import fonts from '../../fonts/fonts.js';
import Landing from '../../pages/landing';
import Home from '../../pages/home';
import Events from '../../pages/events';
import Login from '../../pages/login';
import Gallery from '../../pages/gallery';
import NotFound from '../../pages/not-found';
import actions from './actions';


const mapStateToProps = (state) => ({
  notifications: state.notifications.notifications,
  notificationsOpen: state.notifications.open,
  socketUrl: state.backend.socketUrl,
});


@connect(mapStateToProps, actions)
class App extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    notifications: PropTypes.node,
    notificationsOpen: PropTypes.bool,
    close: PropTypes.func.isRequired,
    setBackendUrl: PropTypes.func.isRequired,
  }

  componentWillMount() {
    // eslint-disable-next-line no-undef
    const hostname = window.location.hostname;
    this.props.setBackendUrl(hostname);
  }

  handleNotificationClose() {
    this.props.close();
  }

  render() {
    return (
      <div>
        <Style rules={fonts} />
        <Style rules={reset} />
        {this.props.children}
        <Snackbar
          open={this.props.notificationsOpen}
          message={this.props.notifications}
          autoHideDuration={5000}
          action="close"
          onActionTouchTap={this.handleNotificationClose}
          onRequestClose={this.handleNotificationClose}
        />
      </div>
    );
  }
}

App.childContextTypes = {
  socket: PropTypes.object,
};


export default {
  component: App,
  childRoutes: [
    {
      path: '/',
      component: 'div',
      indexRoute: {
        component: Home,
      },
      childRoutes: [
        {
          path: '/login',
          component: Login,
        },
        {
          path: '/landing',
          component: Landing,
        },
        {
          path: '/events',
          component: Events,
        },
        {
          path: '/gallery',
          component: Gallery,
        },
      ],
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
};
