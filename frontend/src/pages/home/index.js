import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import Template from '../../templates/default';
import AuthenticatedComponent from '../../components/atoms/authenticated-component';
import actions from './actions';


const mapStateToProps = (state) => ({
  event: state.eventCreate.event,
  status: state.eventCreate.status,
});


class Home extends AuthenticatedComponent {
  static propTypes = {
    create: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.handleEventClick = () => {
      this.setState({ dialog: true });
    };

    this.handleEventClose = () => {
      this.setState({ dialog: false });
    };

    this.handleEventCreate = () => {
      if (!this.state.title || this.state.title === '') {
        this.setState({ titleError: 'This field is required' });
        return;
      }
      this.props.create(this.state.title, this.state.date, `${this.state.title} content`);
      this.setState({ titleError: undefined });
      this.setState({ dialog: false });
    };

    this.handleTitleChange = (event, title) => {
      this.setState({ title });
    };

    this.handleDateChange = (event, date) => {
      this.setState({ date });
    };
  }

  state = {
    dialog: false,
    date: new Date(),
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.event) {
      this.context.router.history.push(`/events/${nextProps.event.id}`);
    }
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onClick={this.handleEventClose}
      />,
      <FlatButton
        primary
        label="OK"
        onClick={this.handleEventCreate}
      />,
    ];
    return (
      <Template>
        <Paper>
          <RaisedButton
            primary
            label="Create Event"
            onClick={this.handleEventClick}
          />
          <Dialog
            title="Create Event"
            open={this.state.dialog}
            onRequestClose={this.handleEventClose}
            actions={actions}
          >
            <TextField
              autoFocus
              floatingLabelText="Title"
              onChange={this.handleTitleChange}
              errorText={this.state.titleError}
            />
            <DatePicker
              hintText="Date"
              defaultDate={this.state.date}
              onChange={this.handleDateChange}
            />
          </Dialog>
        </Paper>
      </Template>
    );
  }
}


export default connect(mapStateToProps, actions)(Home);
