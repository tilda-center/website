import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Template from '../../templates/default';
import actions from './actions';
import getStyles from './styles';


const mapStateToProps = (state) => ({
  events: state.eventList.events,
  headers: state.eventList.headers,
});


class EventList extends React.Component {
  static propTypes = {
    get: PropTypes.func.isRequired,
    events: PropTypes.array,
    headers: PropTypes.object,
  }

  static defaultProps = {
    events: [],
  }

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.get();
  }

  render() {
    const styles = getStyles(this.context.muiTheme);
    let pagination = null;
    if (this.props.headers) {
      const firstPage = Number(this.props.headers.get('X-First-Page'));
      const lastPage = Number(this.props.headers.get('X-Last-Page'));
      const currentPage = Number(this.props.headers.get('X-Current-Page'));
      pagination = [];
      for(let i = firstPage; i <= lastPage; ++i) {
        pagination.push(
          <RaisedButton
            key={i}
            label={i}
            primary={i === currentPage}
            onClick={() => this.props.get(i)}
          />
        );
      }
    }
    return (
      <Template>
        <Paper style={styles.root}>
          <div style={styles.grid}>
            {
              this.props.events.map((event) => (
                <Card key={event.id} style={styles.event}>
                  <CardMedia>
                    <img src="http://www.material-ui.com/images/nature-600-337.jpg" alt="" style={{ height: 100 }} />
                  </CardMedia>
                  <CardTitle
                    title={event.title}
                    subtitle={
                      <Moment interval={0} format="DD.MM.YYYY HH:mm">
                        {event.date}
                      </Moment>
                    }
                  />
                  <CardText>
                    <ReactMarkdown
                      source={event.markdown.substring(0, 100)}
                    />
                  </CardText>
                  <CardActions>
                    <Link to={`/events/${event.id}`}>
                      <FlatButton label="read more" />
                    </Link>
                  </CardActions>
                </Card>
              ))
            }
          </div>
          <div style={styles.pagination}>
            {pagination}
          </div>
        </Paper>
      </Template>
    );
  }
}


export default connect(mapStateToProps, actions)(EventList);
