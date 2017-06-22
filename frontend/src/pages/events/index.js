import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import getStyles from './styles';
import Template from '../../templates/default';


class Events extends Component {
  render() {
    const styles = getStyles(this.context.muiTheme);
    return (
      <Template>
        <Paper style={styles.root}>
          Events
        </Paper>
      </Template>
    );
  }
}


Events.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};


export default Events;
