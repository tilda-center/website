import React from 'react';
import Paper from 'material-ui/Paper';
import Template from '../../templates/default';
import styles from './styles';


class EventList extends React.Component {
  render() {
    return (
      <Template>
        <Paper style={styles.root}>
          Events
        </Paper>
      </Template>
    );
  }
}


export default EventList;
