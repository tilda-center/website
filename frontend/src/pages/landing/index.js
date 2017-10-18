import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import getStyles from './styles';
import RaisedButton from 'material-ui/RaisedButton';
import Template from '../../templates/default';


class Landing extends Component {
  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  render() {
    const styles = getStyles(this.context.muiTheme);
    return (
    <div>
      <div style={styles.welcome}>
        <Template>
          <Paper style={styles.root}>
            <div>
              <span style={styles.title}>Welcome to  Tilda Center!</span>
              <div style={styles.rootsmall}>
                We are an open space in Novi Sad, Serbia<br />
                where people gather to share resources and knowledge, <br />
                work on projects and develop their IT/technical solutions.
              </div>
              <RaisedButton style={styles.firstbutton} label="Learn more" primary />
            </div>
          </Paper>
        </Template>
      </div>
      <div style={styles.about}>
        <div style={styles.about.text}>
         As a collaborative space for creative individuals
         we want to enhance informal education through mentoring, workshops,
         open source projects and personal development.<br />
          <div style={styles.firstbutton.flexbox}>
            <RaisedButton style={styles.firstbutton} label="Join us" default />
          </div>
        </div>
        <div style={styles.about.image}>
         slika
        </div>
      </div>
      <div style={styles.address}>
        <div style={styles.address.osm}>
          <iframe
            title="Tilda Center"
            width="100%"
            height="95%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="http://www.openstreetmap.org/export/embed.html?bbox=19.82783317565918%2C45.260894658321625%2C19.833819866180423%2C45.26323944678294&amp;layer=mapnik&amp;marker=45.26206517674392%2C19.8308265209198"
            style={styles.iframe}
          >
          </iframe>
          <br />
          <small>
            <a href="https://www.openstreetmap.org/?mlat=45.26207&amp;mlon=19.83083#map=18/45.26207/19.83083">
              View Larger Map
            </a>
          </small>
        </div>
        <div style={styles.address.addr}>
          <div style={styles.address.text}>
            Visit us @ <br />
            COUNTRY: Serbia <br />
            CITY: Novi Sad <br />
            STREET: Bulevar Oslobodjenja <br />
            BUILDING NUMBER: 12 <br />
            APPARTMENT NUMBER: 21 <br />
          </div>
        </div>
      </div>
      <div style={styles.contact}>
        <div style={styles.contact.overlay}>
          <a href="mailto:info@lists.tilda.center">Subscribe to our info mailing list!</a><br />
          EMAIL: office@tilda.center <br />
          IRC: #tilda.center @ irc.freenode.net <br />
          Working hours may vary! <br />
          Please email us before stopping by to make sure someone is here to greet you. <br />
        </div>
      </div>
    </div>
    );
  }
}


export default Landing;
