import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import getStyles from './styles';
import AppBar from 'material-ui/AppBar';
import Template from '../../templates/default';


class Landing extends Component {
  render() {
    const styles = getStyles(this.context.muiTheme);
    return (
    <div style={styles.firstpage}>
      <AppBar title="Tilda Center" />
      <Template>
        <Paper style={styles.root}>
          Land
        </Paper>
      </Template>
    </div>
    );
  }
}


Landing.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};


export default Landing;
