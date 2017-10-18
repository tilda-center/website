import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import RichTextEditor from 'react-rte';
import Moment from 'react-moment';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Template from '../../templates/default';
import { isLoggedIn } from '../../utils';
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
        const value = this.state.value.toString('markdown');
        console.log(value);
        this.setState({ showEditor: false });
      }
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
