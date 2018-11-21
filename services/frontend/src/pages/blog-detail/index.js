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
    // eslint-disable-next-line react/no-unused-state
    selectionStart: 0,
    // eslint-disable-next-line react/no-unused-state
    selectionEnd: 0,
  }

  componentWillMount() {
    this.props.requestTitle('Title')
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
  // requestError: PropTypes.func.isRequired,
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
