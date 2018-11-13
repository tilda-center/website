import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Template from 'templates/default'
import titleActions from 'templates/default/actions'
import errorActions from 'templates/empty/actions'
import styles from './styles'


const mapStateToProps = () => ({})


class BlogDetail extends Component {
  componentWillMount() {
    this.props.requestTitle('Blog Title (slug)')
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
        <img
          src="https://tilda.center/static/images/logo.png"
          alt="logo"
          style={styles.image}
        />
        <p>
          Vero hic ab quia deleniti blanditiis facilis quod quod. Voluptatem
          amet accusamus velit earum. Voluptates fugit veritatis quia libero
          sit deserunt aperiam velit. Dolore nostrum facere molestiae
          consequuntur accusantium sunt. Et sed libero eaque quod laboriosam
          est. Nobis commodi est molestiae modi voluptatum.
        </p>
        <p>
          Dolor aut non voluptatum officia velit et voluptas. Enim maxime
          veniam quis libero autem et quo animi. Vitae eligendi et voluptatem
          occaecati. Pariatur voluptatem sit aspernatur non hic consequatur.
        </p>
        <p>
          Officiis commodi nam accusantium sint dolor quidem tenetur aut.
          Voluptatem non odio dolor. Similique cum natus distinctio atque amet.
          Sit et unde fugit voluptas aliquid accusantium qui numquam. Ratione
          aut ea quo consequatur iste iusto earum.
        </p>
        <p>
          Et quasi porro quaerat in earum rerum ab. Dolorem voluptatem tempore
          illo rem voluptate voluptatibus a consequuntur. Nihil quia rerum non
          repellat rerum hic eligendi esse. Id pariatur praesentium occaecati.
          Velit aut nesciunt error incidunt et ipsa sit quae.
        </p>
        <p>
          Soluta odio culpa debitis dolore corporis. Et repudiandae explicabo
          facilis sapiente dolor omnis quo necessitatibus. Et non occaecati
          inventore ut eaque accusantium dolor.
        </p>
        <div style={styles.comment}>
          <form style={styles.comment.form}>
            <TextField label="email" required fullWidth />
            <TextField label="comment" required multiline rows={4} fullWidth />
            <Button
              type="submit"
              variant="outlined"
              style={styles.comment.button}
            >
              Send
            </Button>
          </form>
        </div>
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
