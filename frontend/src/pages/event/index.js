import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import RichTextEditor from 'react-rte';
import Moment from 'react-moment';
import Paper from 'material-ui/Paper';
import Template from '../../templates/default';
import actions from './actions';
import styles from './styles';


const mapStateToProps = (state) => ({
  event: state.event.event,
  eventError: state.event.error,
});


class Event extends React.Component {
  static propTypes = {
    event: PropTypes.object,
    eventError: PropTypes.string,
    get: PropTypes.func.isRequired,
    match: PropTypes.object,
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
      this.setState({ showEditor: true });
    };
  }

  state = {
    showEditor: false,
    value: RichTextEditor.createEmptyValue(),
  }

  componentWillMount() {
    this.props.get(this.props.match.params.eventId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.event) {
      this.setState({
        value: RichTextEditor.createValueFromString(
          nextProps.event.markdown,
          'markdown',
        ),
      });
    }
  }

  render() {
    const markdownWidget = this.state.showEditor
                         ? (
                           <RichTextEditor
                             value={this.state.value}
                             onChange={this.handleEditorChange}
                           />
                         ) : (
                          <ReactMarkdown
                            source={this.props.event.markdown}
                          />
                         );
    const content = this.props.eventError
                  ? (
                    <h1>No such event</h1>
                  ) : (
                    <div>
                      <div style={styles.meta}>
                        <h1>{this.props.event.title}</h1>
                        <div>
                          <Moment interval={0} format="DD.MM.YYYY HH:mm">
                            {this.props.event.date}
                          </Moment>
                        </div>
                      </div>
                      <div onClick={this.showMarkdownEditor}>
                        {markdownWidget}
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
