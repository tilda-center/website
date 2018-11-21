import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import Template from 'templates/default'
import Editor from 'components/organisms/editor'
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

  handleLink = (prefix = '', suffix = '') => () => {
    const { selectionStart, selectionEnd } = this.state
    let selection
    const before = this.state.input.slice(0, selectionStart)
    const after = this.state.input.slice(selectionEnd, this.state.input.length)
    if (selectionEnd - selectionStart > 0) {
      const oldSelection = this.state.input.slice(selectionStart, selectionEnd)
      selection = `${prefix}[${oldSelection}](https://pyser.org/${suffix})`
    } else {
      selection = `${prefix}[link text](https://pyser.org/${suffix})`
    }
    const input = `${before}${selection}${after}`
    this.setState({ input })
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
        <Editor component={this} value={this.state.input} />
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
      year: PropTypes.string.isRequired,
      month: PropTypes.string.isRequired,
      day: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}


export default connect(mapStateToProps, { ...errorActions, ...titleActions })(
  BlogDetail,
)
