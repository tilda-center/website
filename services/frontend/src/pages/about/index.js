import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
//import Button from '@material-ui/core/Button'
import Template from 'templates/default'
import titleActions from 'templates/default/actions'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import styles from './styles'


const mapStateToProps = () => ({})


class About extends Component {
  componentWillMount() {
    this.props.requestTitle('About')
  }

  constructor(props) {
    super(props);
    this.state = {value:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
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
            <label>
              Send us a massage:
              <textarea type="text" value={this.state.value} onChange={this.handleChange} style={styles.textarea} />
            <input type="submit" value="Send" />
            </label>
          </form>
        </div>
      </Template>
    )
  }
}


About.propTypes = {
  requestTitle: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}


export default connect(mapStateToProps, titleActions)(
  About,
)
