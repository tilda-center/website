import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
//import Button from '@material-ui/core/Button'
import Template from 'templates/default'
import titleActions from 'templates/default/actions'


const mapStateToProps = () => ({})


class About extends Component {
  componentWillMount() {
    this.props.requestTitle('About')
  }

  render() {
    return (
      <Template>
        <div>
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
      </Template>
    )
  }
}


About.propTypes = {
  requestTitle: PropTypes.func.isRequired,
}


export default connect(mapStateToProps, titleActions)(
  About,
)
