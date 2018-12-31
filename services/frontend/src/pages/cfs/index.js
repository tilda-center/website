import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import Template from 'templates/default'
import PriceBox from 'components/organisms/price-box'
import titleActions from 'templates/default/actions'
import styles from './styles'


const mapStateToProps = (/* state */) => ({
  // error: state.cfs.error,
  // status: state.cfs.status,
})


class CfS extends React.Component {
  state = {
    email: '',
    organization: '',
    message: '',
  }

  componentWillMount() {
    this.props.requestTitle('Call for Sponsors')
  }

  handleFieldChange = (event, field) => {
    const result = {}
    result[field] = event.target.value
    this.setState({ ...result })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    const { email, organization, message } = this.state
    this.props.cfs(email, organization, message)
  }

  render() {
    return (
      <Template style={{}}>
        <Paper style={styles.root}>
          <h1 style={styles.h1}>Call for Sponsors</h1>
          <PriceBox
            name="About Us"
            backgroundColor="white"
          >
            <ul style={styles.list}>
              <li style={styles.point}>
              Tilda Center is an open space in Novi Sad, Serbia where people gather to share resources and knowledge, work on projects and develop their IT/technical solutions.
              </li>
              <li style={styles.point}>
              It is a collaborative studio for creative individuals who want to enhance informal education through conversation, exploration and enlargement of experience.
              </li>
              <li style={styles.point}>
              Tilda Center is a combination of a lab for personal projects, open workshop space and a conference room for a community gatherings.
              </li>
              <li style={styles.point}>
              We encourage compelling argumentation on relevant subjects and learning through hands-on exploration.
              </li>
              <li style={styles.point}>
              We embrace arts as well as the sciences, and accelerate a new energy that is building around multidisciplinary collaborative efforts.
              </li>
            </ul>
          </PriceBox>
          <PriceBox
            name="Mission / Statement"
            backgroundColor="#d3af37"
          >
            <ul style={styles.list}>
              <li style={styles.point}>
              Our mission is to work for a better society by promoting open hardware, software, networks, data and knowledge.
              </li>
              <li style={styles.point}>
              Our Vision is a future where education, digital tools and knowledge empower people to share ideas and technical skills.
              </li>
              <li style={styles.point}>
                5 conference passes
              </li>
              <li style={styles.point}>
                You can present the work of your company in the business room
              </li>
              <li style={styles.point}>
                Logo on our t-shirts
              </li>
              <li style={styles.point}>
                We will dristribute your company&amp;s promotional material on our conference
              </li>
            </ul>
          </PriceBox>
          <PriceBox
            name="Value"
            backgroundColor="#adb3c1"
          >
            <ul style={styles.list}>
              <li style={styles.point}>
              Working effectively across disciplines, organizations and communities to
              combine efforts and share information in pursuit of shared goals
              </li>
              <li style={styles.point}>
              Maintaining our commitment to quality and pursuit of the highest standards
              </li>
              <li style={styles.point}>
              Constantly seeking and applying leading edge ideas, practices and knowledge
              </li>
              <li style={styles.point}>
              Following standards and best practices for confidentiality,safety, protection of privacy and ethical conduct
              </li>
              <li style={styles.point}>
              Effectively translating unwavering dedication to our mission into practical, relevant,
              high quality actions that make a positive difference
              </li>
              <li style={styles.point}>
              Tilda Center does not discriminate on the basis of age, race, color, sex, national
              origin, religion, sexual orientation, gender identity, disability, marital status or socioeconomic status
              </li>
            </ul>
          </PriceBox>
          <PriceBox
            name="Contacts"
            backgroundColor="#ffb66e"
          >
            <ul style={styles.list}>
              <li style={styles.point}>
              Address: Bulevar Oslobođenja 12, 5th floor, apartment 21
              </li>
              <li style={styles.point}>
              <p><a href="tel:+381652474626">+381 (0) 65 2 474 626</a></p>
              </li>
              <li style={styles.point}>
              <p><a href="mailto:office@tilda.center">office@tilda.center</a></p>
              </li>
              <li style={styles.point}>
              <p><a href="https://webchat.freenode.net/?channels=tilda.center"> #tilda.center @ irc.freenode.net</a></p>
              </li>
              <li style={styles.point}>
              <p><a href="https://lists.tilda.center">Our Lists</a></p>
              </li>
              <li style={styles.point}>
              <p><a href="https://facebook.com/tildacenter">Facebook</a></p>
              <p><a href="https://twitter.com/tildacenter">Twitter</a></p>
              <p><a href="https://instagram.com/tildacenter">Instagram</a></p>
              </li>
            </ul>
          </PriceBox>
          <PriceBox
            name="Copper"
            backgroundColor="#ffbd8e"
          >
            <ul style={styles.list}>
              <li style={styles.point}>
                We will post an official &quot;thank you&quot; note on social media
              </li>
              <li style={styles.point}>
                You will get one conference pass
              </li>
            </ul>
          </PriceBox>
          <div style={styles.caption}>
            Click on price to open the box.
          </div>
          <div style={styles.text}>
            <p style={styles.paragraph}>
              The main idea of this conference is to bring together experts
              from academia & business with young people who want to lear more
              about Python. Our goal is not just to promote Python but also to
              connect developers with companies who use Python.
            </p>
            <p style={styles.paragraph}>
              We believe that if we get to know each other better and exchange
              ideas we can create a stronger community that can work together
              on different projects.
            </p>
            <p style={styles.paragraph}>
              That is the main reason why we are offering our sponsoring
              companies an opportunity to present their work in the business
              room. Every company that donates more than 300 euros will get one
              business presentation where you can talk about your projects,
              ideas and hiring process. In the end of the business talks we
              highly encourage your HR to continue with the sourcing process if
              you find a desirable candidate.
            </p>
            <p style={styles.paragraph}>
              After the conference we are planning to open a PyDev mailing list.
              Since we strongly believe in privacy of our developers this
              mailing list will only be used to promote job offers from our gold
              and diamond sponsors. The email list will never be used for spam or
              sold to a third party.
            </p>
            <p style={styles.paragraph}>
              To our diamond sponsors we specially offer an opportunity to
              promote their job offers on our job board that will be available
              after the conference.
            </p>
            <p style={styles.paragraph}>
              We are open for any additional ideas you might have on how to
              promote Python and create stronger ties in our community. Contact
              us if you are interested in learning more about the sponsoring
              options.
            </p>
          </div>
        </Paper>
      </Template>
    )
  }
}


CfS.propTypes = {
  cfs: PropTypes.func.isRequired,
  requestTitle: PropTypes.func.isRequired,
}


export default connect(mapStateToProps, titleActions)(CfS)
