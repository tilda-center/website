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
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import styles from './styles'


const mapStateToProps = () => ({})
const position = [51.505, -0.09]
const map = () => ({})

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
          <Typography component="p" component="h5" style={styles.aboutText.typography}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </Typography>
        </Paper>
          <Map center={position} zoom={13}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={position}>
              <Popup> A pretty CSS3 popup.
                <br />
                Easily customizable.
              </Popup>
            </Marker>
          </Map>
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
