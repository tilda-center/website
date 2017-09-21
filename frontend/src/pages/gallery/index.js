import React from 'react';
import PropTypes from 'prop-types';
import Gall from 'react-photo-gallery';
import Lightbox from 'react-images';
import Template from '../../templates/default';
import first from './01a.jpg';
import second from './02a.jpg';
import third from './03a.jpg';
import fourth from './04a.jpg';
import fifth from './05a.jpg';
import sixth from './06a.jpg';
import seventh from './07a.jpg';
import eighth from './08a.jpg';
import nineth from './09a.jpg';


const PHOTO_SET = [
  {
    src: first,
    width: 1680,
    height: 1050,
    alt: 'image 1',
  },
  {
    src: second,
    width: 1680,
    height: 1050,
    alt: 'image 1',
  },
  {
    src: third,
    width: 1680,
    height: 1050,
    alt: 'image 2',
  },
  {
    src: fourth,
    width: 1680,
    height: 1050,
    alt: 'image 2',
  },
  {
    src: fifth,
    width: 1680,
    height: 1050,
    alt: 'image 2',
  },
  {
    src: sixth,
    width: 1680,
    height: 1050,
    alt: 'image 2',
  },
  {
    src: seventh,
    width: 1680,
    height: 1050,
    alt: 'image 2',
  },
  {
    src: eighth,
    width: 1680,
    height: 1050,
    alt: 'image 2',
  },
  {
    src: nineth,
    width: 1680,
    height: 1050,
    alt: 'image 2',
  },
];


class Gallery extends React.Component {
  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  state = {
    isLigthboxOpen: false,
    currentPhoto: 1,
  }

  openLightbox = (index, event) => {
    event.preventDefault();
    this.setState({ isLigthboxOpen: true, currentPhoto: index });
  }

  closeLightbox = () => this.setState({ isLigthboxOpen: false })

  nextPhoto = () => this.setState({ currentPhoto: this.state.currentPhoto + 1 })

  prevPhoto = () => this.setState({ currentPhoto: this.state.currentPhoto - 1 })

  render() {
    return (
      <Template>
        <Gall photos={PHOTO_SET} onClickPhoto={this.openLightbox} />
        <Lightbox
          images={PHOTO_SET}
          isOpen={this.state.isLigthboxOpen}
          onClose={this.closeLightbox}
          onClickNext={this.nextPhoto}
          onClickPrev={this.prevPhoto}
          currentImage={this.state.currentPhoto}
        />
      </Template>
    );
  }
}

export default Gallery;
