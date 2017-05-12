// - Impport react components
import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';
import Faker from 'faker'
// - Create SlideShow component class
export default class SlideShow extends Component {

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  // Render DOM
  render() {

    const images = [
      {
        original: Faker.image.image()
      },
      {
        original: Faker.image.image()
      },
      {
        original: Faker.image.image()
      },
      {
        original: Faker.image.image()
      },
      {
        original: Faker.image.image()
      },
      {
        original: Faker.image.image()
      },
      {
        original: Faker.image.image()
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
