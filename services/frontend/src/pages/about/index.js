import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Template from 'templates/default'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import titleActions from 'templates/default/actions'
import errorActions from 'templates/empty/actions'
import styles from './styles'


const mapStateToProps = () => ({})


class About extends Component {
  state = {
    email: '',
    message: '',
  }

  componentWillMount() {
    this.props.requestTitle('About')
  }

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  handleMessage = (event) => {
    this.setState({ message: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // this.props.requestError(`Message from ${this.state.email} containing ${this.state.message} sent`)
    this.props.requestError('Sending your message')
    // this.props.requestSendMessage(
    //   this.state.email,
    //   this.state.message,
    // )
    this.setState({
      email: '',
      message: '',
    })
  }


  render() {
    return (
      <Template>
        <Paper style={styles.aboutText}>
          <Typography variant="h5" component="h3" style={styles.aboutText.typography}>
          This is a sheet of paper.
          </Typography>
          <Typography component="p" style={styles.aboutText.typography}>
           Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>
        <div style={styles.mapGoogle}>
          <iframe
            title="map"
            width={425}
            height={350}
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://www.openstreetmap.org/export/embed.html?bbox=19.829316437244415%2C45.26147803261633%2C19.83229905366898%2C45.262544704742105&amp;layer=mapnik&amp;marker=45.26201231514193%2C19.830807745456696"
          />
          <div>
            <small>
              <a href="https://www.openstreetmap.org/?mlat=45.26201&amp;mlon=19.83081#map=19/45.26201/19.83081">
                View Larger Map
              </a>
            </small>
          </div>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <TextField
                label="Your Email"
                value={this.state.email}
                type="email"
                margin="large"
                onChange={this.handleEmail}
              />
            </div>
            <div>
              <TextField
                label="Your Message"
                value={this.state.message}
                multiline
                rowsMax="20"
                margin="large"
                onChange={this.handleMessage}
              />
            </div>
            <Button variant="contained" color="primary" type="submit">
               Send
            </Button>
          </form>
        </div>
      </Template>
    )
  }
}


About.propTypes = {
  requestError: PropTypes.func.isRequired,
  requestTitle: PropTypes.func.isRequired,
}


export default connect(mapStateToProps, { ...errorActions, ...titleActions })(
  About,
)
