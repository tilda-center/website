import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Template from '../../templates/default';
import styles from './styles';


class Event extends React.Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    return (
      <Template>
        <Paper style={styles.root}>
          Event {this.props.params.eventId}
        </Paper>
      </Template>
    );
  }
}


export default Event;
