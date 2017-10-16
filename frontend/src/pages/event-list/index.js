import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import Paper from 'material-ui/Paper';
import Template from '../../templates/default';
import actions from './actions';
import styles from './styles';


const mapStateToProps = (state) => ({
  events: state.eventList.events,
});


@connect(mapStateToProps, actions)
class EventList extends React.Component {
  static propTypes = {
    get: PropTypes.func.isRequired,
    events: PropTypes.array,
  }

  static defaultProps = {
    events: [],
  }

  componentWillMount() {
    this.props.get();
  }

  render() {
    return (
      <Template>
        <Paper style={styles.root}>
          {
            this.props.events.map((event) => (
              <div key={event.id} style={styles.event}>
                <h1>{event.title}</h1>
                <ReactMarkdown source={event.markdown} />
              </div>
            ))
          }
        </Paper>
      </Template>
    );
  }
}


export default EventList;
