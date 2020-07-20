import React from 'react'
import PropTypes from 'prop-types'
import {
  Checkbox,
  ListItem,
  ListItemText,
} from '@material-ui/core'


class MailThread extends React.Component {
  render() {
    return (
      <ListItem>
        <Checkbox color="primary" />
        <ListItemText
          primary={this.props.from}
          secondary={this.props.subject}
        />
      </ListItem>
    )
  }
}


MailThread.propTypes = {
  from: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
}


export default MailThread
