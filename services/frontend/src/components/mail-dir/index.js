import React from 'react'
import PropTypes from 'prop-types'
import {
  Collapse,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'


class MailDir extends React.Component {
  render() {
    const { children } = this.props.data
    const childrenArray = Object.keys(children)
    let childrenView
    if (childrenArray.length > 0) {
      childrenView = (
        <Collapse in timeout="auto" unmountOnExit style={{ marginLeft: 10 }}>
          <List disablePadding>
            {childrenArray.map(childName => (
              <MailDir
                key={childName}
                name={childName}
                data={children[childName]}
              />
            ))}
          </List>
        </Collapse>
      )
    }
    return (
      <div>
        <ListItem>
          <ListItemText primary={this.props.name} />
        </ListItem>
        {childrenView}
      </div>
    )
  }
}


MailDir.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({}).isRequired,
}


export default MailDir
