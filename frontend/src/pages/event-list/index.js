import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
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
                <Link to={`/events/${event.id}`}><h1>{event.title}</h1></Link>
                <Moment interval={0} format="DD.MM.YYYY HH:mm">
                  {event.date}
                </Moment>
                <ReactMarkdown
                  source={event.markdown.substring(0, 100)}
                />
              </div>
            ))
          }
        </Paper>
      </Template>
    );
  }
}


export default EventList;
