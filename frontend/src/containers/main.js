import React from 'react';
import PropTypes from 'prop-types';
import { Router, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StyleRoot } from 'radium';
import routes from './app';


const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});


function Main(props) {
  return (
    <StyleRoot>
      <MuiThemeProvider muiTheme={props.theme}>
        <Router history={browserHistory} routes={routes} />
      </MuiThemeProvider>
    </StyleRoot>
  );
}


Main.propTypes = {
  theme: PropTypes.object,
};


export default connect(mapStateToProps)(Main);
