import React from 'react';
import PropTypes from 'prop-types';
import { Style } from 'radium';
import reset from '../../reset.js';
import fonts from '../../fonts/fonts.js';
import Landing from '../../pages/landing';
import Home from '../../pages/home';
import Event from '../../pages/event';
import EventList from '../../pages/event-list';
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
    },
    {
      path: '/login',
      indexRoute: { component: Login },
    },
    {
      path: '/landing',
      indexRoute: { component: Landing },
    },
    {
      path: '/events',
      indexRoute: { component: EventList },
      childRoutes: [
        {
          path: ':eventId',
          component: Event,
        },
      ],
    },
    {
      path: '/gallery',
      indexRoute: { component: Gallery },
    },
    {
      path: '*',
      indexRoute: { component: NotFound },
    },
  ],
};
