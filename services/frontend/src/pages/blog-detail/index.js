import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import ReactMarkdown from 'react-markdown'
import Template from 'templates/default'
import ProtectedComponent from 'components/atoms/protected'
import Editor from 'components/organisms/editor'
import titleActions from 'templates/default/actions'
import errorActions from 'templates/empty/actions'
import { linkTarget } from 'utils'
import styles from './styles'


const mapStateToProps = (state) => ({
  auth: state.auth.state,
})


class BlogDetail extends Component {
  state = {
    edit: false,
    input: 'Corporis ea neque enim illo cumque eos praesentium. Quam tempore perferendis deserunt est esse. Reiciendis necessitatibus corporis amet quis minima aut. Aliquid sit dolorem autem et sunt et totam dolor. Aut temporibus quia voluptas aut.\n\nReiciendis inventore error necessitatibus quidem neque dolores. Aut ut sit sunt sit in molestiae. Dolorem sit sit est aut voluptate ut doloremque. Iure nihil qui voluptate repellendus.\n\nItaque ut reiciendis et placeat. Iure et dolorem ut consequuntur aut amet. Et aut perferendis et omnis sed. Necessitatibus harum sit dolores.\n\nDolores delectus qui sint eligendi et facilis corporis nostrum. Excepturi laudantium et enim necessitatibus magni. Cupiditate voluptas et ex. Hic quis recusandae perspiciatis aut vel. Distinctio excepturi voluptatem mollitia numquam.\n\nEst occaecati ut nesciunt impedit animi eos ullam. Necessitatibus tempora sit molestiae illum. Voluptatem est repellat sed.',
    // eslint-disable-next-line react/no-unused-state
    selectionStart: 0,
    // eslint-disable-next-line react/no-unused-state
    selectionEnd: 0,
  }

  componentWillMount() {
    this.props.requestTitle('Title')
  }

  handleEdit = () => {
    this.setState(prevState => ({
      edit: true,
      oldInput: prevState.input,
    }))
  }

  handleSave = () => {
    this.setState({
      edit: false,
      oldInput: null,
    })
  }

  handleCancel = () => {
    this.setState(prevState => ({
      edit: false,
      input: prevState.oldInput,
      oldInput: null,
    }))
  }

  render() {
    const editor = this.state.edit
      ? <Editor component={this} value={this.state.input} />
      : ''
    let button
    if (this.props.auth) {
      button = this.state.edit
        ? (
          <div>
            <Button
              onClick={this.handleCancel}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={this.handleSave}
              variant="outlined"
            >
              Save
            </Button>
          </div>
        )
        : (
          <Button
            onClick={this.handleEdit}
            variant="outlined"
          >
            Edit
          </Button>
        )
    }
    return (
      <Template>
        <ProtectedComponent redirect={false} />
        <div style={styles.root}>
          <h1>Title</h1>
          <span style={styles.date}>
            Apr 1, 2019 by meka
          </span>
        </div>
        {editor}
        <img
          src="https://tilda.center/static/images/logo.png"
          alt="logo"
          style={styles.image}
        />
        <ReactMarkdown
          source={this.state.input}
          linkTarget={linkTarget}
        />
        <div style={styles.button}>
          {button}
        </div>
      </Template>
    )
  }
}


BlogDetail.propTypes = {
  auth: PropTypes.bool,
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
