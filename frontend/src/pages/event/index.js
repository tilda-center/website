import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import RichTextEditor from 'react-rte';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';
import Template from '../../templates/default';
import { isLoggedIn } from '../../utils';
import actions from './actions';
import styles from './styles';


const mapStateToProps = (state) => ({
  event: state.event.event,
  eventStatus: state.event.status,
});


class Event extends React.Component {
  static propTypes = {
    event: PropTypes.object,
    eventError: PropTypes.string,
    get: PropTypes.func.isRequired,
    match: PropTypes.object,
    set: PropTypes.func.isRequired,
  }

  static defaultProps = {
    event: {
      markdown: '',
      title: '',
    },
  }

  constructor(props) {
    super(props);

    this.handleEditorChange = (value) => {
      this.setState({ value });
    };

    this.showMarkdownEditor = () => {
      if (isLoggedIn() && !this.state.showEditor) {
        this.setState({ showEditor: true });
      }
    };

    this.hideMarkdownEditor = () => {
      if (this.state.showEditor) {
        this.setState({ showEditor: false });
      }
    };

    this.saveMarkdown = () => {
      if (this.state.showEditor) {
        const fields = {
          markdown: this.state.value.toString('markdown'),
        };
        this.props.set(this.props.match.params.eventId, fields);
        this.props.get(this.props.match.params.eventId);
        this.setState({ showEditor: false });
      }
    };

    this.editTitle = () => {
      if (isLoggedIn()) {
        this.setState({ showTitleEditor: true });
      }
    };

    this.hideTitleEditor = () => {
      this.setState({ showTitleEditor: false });
    };

    this.saveTitle = () => {
      const fields = { title: this.state.title };
      this.props.set(this.props.match.params.eventId, fields);
      this.props.get(this.props.match.params.eventId);
      this.setState({ showTitleEditor: false });
    };

    this.handleTitleChange = (event, title) => {
      this.setState({ title });
    };

    this.saveDate = (event, rawDate) => {
      const fields = {
        date: moment(rawDate).format('YYYY-MM-DD'),
      };
      this.props.set(this.props.match.params.eventId, fields);
    };
  }

  state = {
    showEditor: false,
    showTitleEditor: false,
    value: RichTextEditor.createEmptyValue(),
  }

  componentWillMount() {
    this.props.get(this.props.match.params.eventId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.event) {
      this.setState({
        title: nextProps.event.title,
        value: RichTextEditor.createValueFromString(
          nextProps.event.markdown,
          'markdown',
        ),
      });
    }
  }

  render() {
    const markdownComponent = this.state.showEditor
                            ? (
                              <div>
                                <RichTextEditor
                                  value={this.state.value}
                                  onChange={this.handleEditorChange}
                                />
                                <RaisedButton label="save" primary onClick={this.saveMarkdown} />
                                <RaisedButton label="cancel" onClick={this.hideMarkdownEditor} />
                              </div>
                            ) : (
                             <ReactMarkdown
                               source={this.props.event.markdown}
                             />
                            );
    const titleComponent = this.state.showTitleEditor
                         ? (
                           <div>
                             <TextField
                               autoFocus
                               name="title"
                               defaultValue={this.props.event.title}
                               onChange={this.handleTitleChange}
                             />
                             <RaisedButton label="save" primary onClick={this.saveTitle} />
                             <RaisedButton label="cancel" onClick={this.hideTitleEditor} />
                           </div>
                         ) : (
                           <h1 onClick={this.editTitle}>{this.props.event.title}</h1>
                         );
    const date = this.props.event.date ? new Date(this.props.event.date) : new Date();
    const content = this.props.eventStatus === 'error'
                  ? (
                    <h1>No such event</h1>
                  ) : (
                    <div>
                      <div style={styles.meta}>
                        <div>
                          {titleComponent}
                          <DatePicker
                            hintText="Portrait Inline Dialog"
                            container="inline"
                            defaultDate={date}
                            disabled={!isLoggedIn()}
                            onChange={this.saveDate}
                          />
                        </div>
                      </div>
                      <div onClick={this.showMarkdownEditor}>
                        {markdownComponent}
                      </div>
                    </div>
                  );
    return (
      <Template>
        <Paper style={styles.root}>
          {content}
        </Paper>
      </Template>
    );
  }
}


export default connect(mapStateToProps, actions)(Event);
