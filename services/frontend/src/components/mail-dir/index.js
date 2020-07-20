import React from 'react'
import PropTypes from 'prop-types'
import {
  ListItem,
  ListItemText,
} from '@material-ui/core'


class MailDir extends React.Component {
  render() {
    return (
      <ListItem>
        <ListItemText primary={this.props.name} />
      </ListItem>
    )
  }
}


MailDir.propTypes = {
  name: PropTypes.string.isRequired,
}


export default MailDir
