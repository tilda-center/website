import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import getStyles from './styles';
import RaisedButton from 'material-ui/RaisedButton';
import Subscribe from 'material-ui/svg-icons/editor/border-color';
import Email from 'material-ui/svg-icons/communication/email';
import IRC from 'material-ui/svg-icons/action/question-answer';
import Template from '../../templates/default';


class Landing extends Component {
  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }
  
  constructor(props) {
    super(props);
    
    this.handleMouseOver = (item) => {
      this.setState({ over: item });
    };
    
    this.handleMouseLeave = () => {
      this.setState({ over: undefined });
    };
  }
  
  state = {}
  
  render() {
    const styles = getStyles(this.context.muiTheme);
    const subscribeStyle = this.state.over === 'subscribe' 
                         ? {...styles.contact.icon, color: 'red'} 
                         : styles.contact.icon;
    const emailStyle = this.state.over === 'email'
                     ? {...styles.contact.icon, color: 'red'}
                     : styles.contact.icon;
    const ircStyle = this.state.over === 'irc'
                   ? {...styles.contact.icon, color: 'red'}
                   : styles.contact.icon;
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
        <a href="https://lists.tilda.center/" target="blank" title="SUBSCRIBE">
          <Subscribe 
            style={subscribeStyle} 
            onMouseOver={() => {this.handleMouseOver('subscribe')}}
            onMouseLeave={this.handleMouseLeave}
          />
        </a>
        <a href="mailto:office@tilda.center" title="EMAIL">
          <Email 
            style={emailStyle}
            onMouseOver={() => {this.handleMouseOver('email')}}
            onMouseLeave={this.handleMouseLeave}
          />
        </a>
        <a href="http://webchat.freenode.net/?channels=tilda.center" target="blank" title="IRC">
          <IRC 
            style={ircStyle}
            onMouseOver={() => {this.handleMouseOver('irc')}}
            onMouseLeave={this.handleMouseLeave}
          />
        </a>
        Working hours may vary! <br />
        Please email us before stopping by to make sure someone is here to greet you. <br />
      </div>
    </div>
    );
  }
}


export default Landing;
