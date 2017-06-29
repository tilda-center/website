import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import getStyles from './styles';
import AppBar from 'material-ui/AppBar';
import Template from '../../templates/default';


class Landing extends Component {
  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  render() {
    const styles = getStyles(this.context.muiTheme);
    return (
    <div style={styles.firstpage}>
      <AppBar title="Tilda Center" />
      <Template>
        <Paper style={styles.root}>
          Tilda Center is an open space in Novi Sad, Serbia <br />
          where people gather to share resources and knowledge, <br />
          work on projects and develop their IT/technical solutions.
        </Paper>
      </Template>
    </div>
    );
  }
}


export default Landing;
