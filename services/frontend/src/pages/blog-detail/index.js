import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import BoldIcon from '@material-ui/icons/FormatBold'
import StrikeThroughIcon from '@material-ui/icons/StrikethroughS'
import ItalicIcon from '@material-ui/icons/FormatItalic'
import Template from 'templates/default'
import titleActions from 'templates/default/actions'
import errorActions from 'templates/empty/actions'
import styles from './styles'


const mapStateToProps = () => ({})


class BlogDetail extends Component {
  state = {
    input: '# This is a header\n\nAnd this is a paragraph',
    selectionStart: 0,
    selectionEnd: 0,
  }

  componentWillMount() {
    this.props.requestTitle('Title')
  }

  handleFormat = (formatString) => () => {
    const { selectionStart, selectionEnd } = this.state
    if (selectionEnd - selectionStart > 0) {
      const before = this.state.input.slice(0, selectionStart)
      const selection = this.state.input.slice(selectionStart, selectionEnd)
      const after = this.state.input.slice(selectionEnd, this.state.input.length)
      const input = `${before}${formatString}${selection}${formatString}${after}`
      this.setState({ input })
    }
  }

  handleSelect = (event) => {
    const { selectionStart, selectionEnd } = event.target
    this.setState({ selectionStart, selectionEnd })
  }

  handleEdit = (event) => {
    this.setState({ input: event.target.value })
  }

  render() {
    return (
      <Template>
        <div style={styles.root}>
          <h1>Title</h1>
          <span style={styles.date}>
            Apr 1, 2019 by meka
          </span>
        </div>
        <div>
          <Button variant="outlined" onClick={this.handleFormat('**')}>
            <BoldIcon />
          </Button>
          <Button variant="outlined" onClick={this.handleFormat('*')}>
            <ItalicIcon />
          </Button>
          <Button variant="outlined" onClick={this.handleFormat('~~')}>
            <StrikeThroughIcon />
          </Button>
          <TextField
            value={this.state.input}
            onChange={this.handleEdit}
            onSelect={this.handleSelect}
            multiline
            fullWidth
          />
        </div>
        <img
          src="https://tilda.center/static/images/logo.png"
          alt="logo"
          style={styles.image}
        />
        <ReactMarkdown source={this.state.input} />
      </Template>
    )
  }
}


BlogDetail.propTypes = {
  requestError: PropTypes.func.isRequired,
  requestTitle: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}


export default connect(mapStateToProps, { ...errorActions, ...titleActions })(
  BlogDetail,
)
