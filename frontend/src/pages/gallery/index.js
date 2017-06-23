import React from 'react';
import PropTypes from 'prop-types';
import Gall from 'react-photo-gallery';
import Lightbox from 'react-images';

const PHOTO_SET = [
  {
    src: 'http://tilda.center/static/images/album-tilda/01a.jpg',
    width: 1680,
    height: 1050,
    alt: 'image 1',
  },
  {
    src: 'http://tilda.center/static/images/album-tilda/02a.jpg',
    width: 1680,
    height: 1050,
    alt: 'image 1',
  },
  {
    src: 'http://tilda.center/static/images/album-tilda/04a.jpg',
    width: 1680,
    height: 1050,
    alt: 'image 2',
  },
  {
    src: 'http://tilda.center/static/images/album-tilda/05a.jpg',
    width: 1680,
    height: 1050,
    alt: 'image 2',
  },
  {
    src: 'http://tilda.center/static/images/album-tilda/06a.jpg',
    width: 1680,
    height: 1050,
    alt: 'image 2',
  },
  {
    src: 'http://tilda.center/static/images/album-tilda/07a.jpg',
    width: 1680,
    height: 1050,
    alt: 'image 2',
  },
  {
    src: 'http://tilda.center/static/images/album-tilda/08a.jpg',
    width: 1680,
    height: 1050,
    alt: 'image 2',
  },
];


class Gallery extends React.Component {
  state = { isLigthboxOpen: false, currentPhoto: 1 };

  openLightbox = (index, event) => {
    event.preventDefault();
    this.setState({ isLigthboxOpen: true, currentPhoto: index });
  }
  closeLightbox = () => this.setState({ isLigthboxOpen: false });
  nextPhoto = () => this.setState({ currentPhoto: this.state.currentPhoto + 1 });
  prevPhoto = () => this.setState({ currentPhoto: this.state.currentPhoto - 1 });

  render() {
    return (
      <div>
        <Gall photos={PHOTO_SET} onClickPhoto={this.openLightbox} />
        <Lightbox
          images={PHOTO_SET}
          isOpen={this.state.isLigthboxOpen}
          onClose={this.closeLightbox}
          onClickNext={this.nextPhoto}
          onClickPrev={this.prevPhoto}
          currentImage={this.state.currentPhoto}
        />
      </div>
    );
  }
}

Gallery.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};


export default Gallery;
