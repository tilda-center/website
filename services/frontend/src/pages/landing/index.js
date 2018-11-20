import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Template from 'templates/default'
import titleActions from 'templates/default/actions'
import errorActions from 'templates/empty/actions'


const mapStateToProps = () => ({})


class Landing extends Component {
  componentWillMount() {
    this.props.requestTitle('Landing')
  }

  handleError = () => {
    this.props.requestError('Landing')
  }

  render() {
    return (
      <Template>
        <Button variant="contained" onClick={this.handleError}>
          Landing
        </Button>
      </Template>
    )
  }
}


Landing.propTypes = {
  requestError: PropTypes.func.isRequired,
  requestTitle: PropTypes.func.isRequired,
}


export default connect(mapStateToProps, { ...errorActions, ...titleActions })(
  Landing,
)
