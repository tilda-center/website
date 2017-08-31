import React from 'react';
import PropTypes from 'prop-types';
import { Style } from 'radium';
import reset from '../../reset.js';
import fonts from '../../fonts/fonts.js';
import Landing from '../../pages/landing';
import Home from '../../pages/home';
import Events from '../../pages/events';
import Login from '../../pages/login';
import Gallery from '../../pages/gallery';
import NotFound from '../../pages/not-found';
import { requireAuth } from '../../utils';


class App extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <div>
        <Style rules={fonts} />
        <Style rules={reset} />
        {this.props.children}
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
      onEnter: requireAuth,
      indexRoute: { component: Home },
      childRoutes: [
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
      path: '/login',
      component: Login,
    },
    {
      path: '/landing',
      component: Landing,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
};
