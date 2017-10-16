import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import RichTextEditor from 'react-rte';
import Paper from 'material-ui/Paper';
import Template from '../../templates/default';
import actions from './actions';
import styles from './styles';


const mapStateToProps = (state) => ({
  event: state.event.event,
});


@connect(mapStateToProps, actions)
class Event extends React.Component {
  static propTypes = {
    event: PropTypes.object,
    get: PropTypes.func.isRequired,
    params: PropTypes.object,
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
  }

  state = {
    value: RichTextEditor.createEmptyValue(),
  }

  componentWillMount() {
    this.props.get(this.props.params.eventId);
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
    return (
      <Template>
        <Paper style={styles.root}>
          <div style={styles.meta}>
            <h1>{this.props.event.title}</h1>
            <div>
              date
            </div>
          </div>
          <div>
            <ReactMarkdown source={this.props.event.markdown} />
          </div>
          <RichTextEditor value={this.state.value} onChange={this.handleEditorChange} />
        </Paper>
      </Template>
    );
  }
}


export default Event;
