// - Impport react components
import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

// - Create SlideShow component class
export default class SlideShow extends Component {

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  // Render DOM
  render() {

    const images = [
      {
        original: require('../dist/images/1.jpg')
      },
      {
        original: require('../dist/images/2.jpg')
      },
      {
        original: require('../dist/images/3.jpg')
      },
      {
        original: require('../dist/images/4.jpeg')
      },
      {
        original: require('../dist/images/5.jpg')
      },
      {
        original: require('../dist/images/6.jpeg')
      },
      {
        original: require('../dist/images/7.jpeg')
      }
    ]

    return (

      <ImageGallery
        items={images}
        slideInterval={4000}
        onImageLoad={this.handleImageLoad}
        showThumbnails={false}
        autoPlay={true}
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={true}
        />

    );
  }

}
