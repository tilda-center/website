import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Template from 'templates/default'
import Home from '@material-ui/icons/Home'
import Call from '@material-ui/icons/Call'
import Email from '@material-ui/icons/Email'
import Chat from '@material-ui/icons/Chat'
import List from '@material-ui/icons/List'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
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
        <div>
          <Grid>
            <Paper style={styles.aboutText}>
              <Typography variant="h5" style={styles.aboutText.typography}>
                Mission/Vision
              </Typography>
              <Typography component="p" style={styles.aboutText.typography}>
                <font size="4">Mission Statement:</font>
                <p> Our mission is to work for a better society by promoting open <br /> hardware, software, networks, data and knowledge. </p>
                <font size="4">Vision Statement:</font>
                <p> Our Vision is a future where education, digital tools and knowledge <br /> empower people to share ideas and technical skills. </p>
              </Typography>
            </Paper>
            <Paper style={styles.aboutText2}>
              <Typography component="p" style={styles.aboutText2.typography}>
              <Typography variant="h5" style={styles.aboutText2.typography}>
                Value In all its actions and efforts,<br /> Tilda Center is guided by these values:
              </Typography>
              <p><font size="4">Collaboration:</font></p>
                <p> Working effectively across disciplines, organizations and communities to <br />
                  combine efforts and share information in pursuit of shared goals; </p>
                <font size="4">Excellence:</font>
                <p>Maintaining our commitment to quality and pursuit of the highest standards; </p>
                <font size="4">Innovation:</font>
                <p> Constantly seeking and applying leading edge ideas, practices and knowledge; </p>
                <font size="4">Integrity:</font>
                <p> Following standards and best practices for confidentiality, <br /> safety, protection of privacy and ethical conduct; </p>
                <font size="4">Passion:</font>
                <p> Effectively translating unwavering dedication to our mission into practical, <br />relevant,
                  high quality actions that make a positive difference; </p>
                <font size="4">Respect:</font>
                <p> Tilda Center does not discriminate on the basis of age, race, <br />color, sex, national
                  origin, religion, sexual orientation, gender identity, disability, <br /> marital status or socioeconomic status; </p>
              </Typography>
            </Paper>
          </Grid>
        </div>
        <Paper style={styles.contactBox}>
          <Typography variant="h4" gutterBottom>
           CONTACTS
          </Typography>
          <Typography>
            <Home></Home>Address:
            <p>Bulevar Oslobođenja 12, 5th floor, apartment 21</p>
            <Call></Call>Phone:
              <p>+381 (0) 65 2 474 626</p>
            <Email></Email>Email:
            <p>office@tilda.center</p>
            <Chat></Chat>IRC:
            <p>#tilda.center @ irc.freenode.net</p>
            <List></List>List:
            <p>Mailing List</p>
          </Typography>
        </Paper>
        <div style={styles.mapOSM}>
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
