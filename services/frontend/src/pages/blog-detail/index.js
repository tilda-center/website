import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import EditIcon from '@material-ui/icons/Edit'
import ReactMarkdown from 'react-markdown'
import Template from 'templates/default'
import ProtectedComponent from 'components/atoms/protected'
import Editor from 'components/organisms/editor'
import titleActions from 'templates/default/actions'
import errorActions from 'templates/empty/actions'
import {
  linkTarget,
  handleOver,
  handleEdit,
  handleValue,
} from 'utils'
import styles from './styles'


const mapStateToProps = (state) => ({
  auth: state.auth.state,
})


class BlogDetail extends Component {
  state = {
    content: 'Corporis ea neque enim illo cumque eos praesentium. Quam tempore perferendis deserunt est esse. Reiciendis necessitatibus corporis amet quis minima aut. Aliquid sit dolorem autem et sunt et totam dolor. Aut temporibus quia voluptas aut.\n\nReiciendis inventore error necessitatibus quidem neque dolores. Aut ut sit sunt sit in molestiae. Dolorem sit sit est aut voluptate ut doloremque. Iure nihil qui voluptate repellendus.\n\nItaque ut reiciendis et placeat. Iure et dolorem ut consequuntur aut amet. Et aut perferendis et omnis sed. Necessitatibus harum sit dolores.\n\nDolores delectus qui sint eligendi et facilis corporis nostrum. Excepturi laudantium et enim necessitatibus magni. Cupiditate voluptas et ex. Hic quis recusandae perspiciatis aut vel. Distinctio excepturi voluptatem mollitia numquam.\n\nEst occaecati ut nesciunt impedit animi eos ullam. Necessitatibus tempora sit molestiae illum. Voluptatem est repellat sed.',
    editContent: false,
    over: null,
    // eslint-disable-next-line react/no-unused-state
    selectionEnd: 0,
    // eslint-disable-next-line react/no-unused-state
    selectionStart: 0,
    title: 'Title',
  }

  componentWillMount() {
    this.props.requestTitle('Title')
  }

  handleEdit = () => {
    this.setState(prevState => ({
      editContent: true,
      oldContent: prevState.content,
    }))
  }

  handleSave = () => {
    this.setState({
      editContent: false,
      oldContent: null,
    })
  }

  handleCancel = () => {
    this.setState(prevState => ({
      editContent: false,
      content: prevState.oldContent,
      oldContent: null,
    }))
  }

  handleSubmit = (item) => (event) => {
    event.preventDefault()
    handleEdit(item, false, this)()
  }

  render() {
    const editor = this.state.editContent
      ? <Editor component={this} value={this.state.content} />
      : ''
    let button
    if (this.props.auth) {
      button = this.state.editContent
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
    let title
    if (this.state.edit === 'title') {
      title = (
        <form style={styles.title} onSubmit={this.handleSubmit('title')}>
          <TextField
            value={this.state.title}
            onChange={handleValue('title', this)}
            label="title"
            required
            autoFocus
          />
          <Button type="submit">
            Save
          </Button>
          <Button onClick={handleValue('title', this, true)}>
            Cancel
          </Button>
        </form>
      )
    } else {
      title = (
        <div
          onClick={handleEdit('title', true, this)}
          onKeyDown={handleEdit('title', true, this)}
          tabIndex={0}
          role="button"
        >
          <h1
            style={styles.title}
            onMouseOver={handleOver('title', true, this)}
            onFocus={handleOver('title', true, this)}
            onMouseOut={handleOver('title', false, this)}
            onBlur={handleOver('title', false, this)}
          >
            {this.state.title}
          </h1>
          {this.state.over === 'title'
            ? <EditIcon />
            : ''
          }
        </div>
      )
    }
    return (
      <Template>
        <ProtectedComponent redirect={false} />
        <div style={styles.root}>
          {title}
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
          source={this.state.content}
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
