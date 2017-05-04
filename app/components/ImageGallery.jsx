// - Impoer react components
import React, {Component} from 'react'
import {
  Button,
  Grid,
  Image,
  Icon,
  Modal,
  Label,
  Segment,
  Container
} from 'semantic-ui-react'
import {connect} from 'react-redux'

// - Import actions
import * as imageGalleryActions from 'imageGalleryActions'
import * as postActions from 'postActions'
import * as imageUploaderActions from 'imageUploaderActions'

// - Import app components


// - Create ImageGallery component class
export class ImageGallery extends Component {

  // Constructor
  constructor(props) {
    super(props);

    // Binding function to `this`
    this.close = this.close.bind(this);
    this.handleImageUploader = this.handleImageUploader.bind(this);
  }
  // Hide component
  close = () => {
    this.props.dispatch(imageGalleryActions.openImageGallery(false))

  }

  // When component will receive next props
  componentWillReceiveProps = (nextProps) => {
    this.setState({active: nextProps.open, openCallBack: nextProps.callBack});
  }

  // Handle Image uploader
  handleImageUploader = (evt) => {
    this.props.dispatch(imageUploaderActions.openImageUploader(true));
  }

  // Render DOM
  render() {

    return (
      <Modal dimmer={'inverted'} open={this.props.imageGalleryStatus} onClose={this.close} size='small' className='imageGallery_parent' style={{
        height: '70%'
      }}>
        <Segment basic style={{
          margin: '0px',
          padding: '14px'
        }} className='container'><Icon size='large' link name="close" onClick={this.close}/>
          <Button floated='right' color='blue' basic compact>DONE</Button>
        </Segment>
        <div className="global__scroll-CH imageGallery">
          <div className="imageGallery__container">
            <ul className="imageGallery__frame">
              <li>
                <div className="imageGallery__image" onClick={this.handleImageUploader} style={{
                  textAlign: 'center'
                }}>
                  <div className='imageGallery__upload'><Icon size='large' name="cloud upload"/>
                    <div>Upload File</div>
                  </div>
                </div>
              </li>
              <li>
                <img className="image2" src={require('../dist/images/22.jpg')}/>
                  <div className="imageCover">
                    <div className="coverContent">Add</div>
                  </div>
              </li>
              <li>
                <img className="image2" src={require('../dist/images/22.jpg')}/>
                  <div className="imageCover">
                    <div className="coverContent">Add</div>
                  </div>
              </li>
              <li>
                <img className="image2" src={require('../dist/images/22.jpg')}/>
                  <div className="imageCover">
                    <div className="coverContent">Add</div>
                  </div>
              </li>
              <li>
                <img className="image2" src={require('../dist/images/22.jpg')}/>
                  <div className="imageCover">
                    <div className="coverContent">Add</div>
                  </div>
              </li>
              <li>
                <img className="image2" src={require('../dist/images/22.jpg')}/>
                  <div className="imageCover">
                    <div className="coverContent">Add</div>
                  </div>
              </li>
              <li>
                <img className="image2" src={require('../dist/images/22.jpg')}/>
                  <div className="imageCover">
                    <div className="coverContent">Add</div>
                  </div>
              </li>
              <li>
                <img className="image2" src={require('../dist/images/22.jpg')}/>
                  <div className="imageCover">
                    <div className="coverContent">Add</div>
                  </div>
              </li>
              <li>
                <img className="image2" src={require('../dist/images/22.jpg')}/>
                  <div className="imageCover">
                    <div className="coverContent">Add</div>
                  </div>
              </li>
              <li>
                <img className="image2" src={require('../dist/images/22.jpg')}/>
                  <div className="imageCover">
                    <div className="coverContent">Add</div>
                  </div>
              </li>
              <li>
                <img className="image2" src={require('../dist/images/22.jpg')}/>
                  <div className="imageCover">
                    <div className="coverContent">Add</div>
                  </div>
              </li>
              <li>
                <img src={require('../dist/images/22.jpg')}/>
                <div className="imageCover">
                  <div className="coverContent">Add</div>
                </div>
              </li>

            </ul>
          </div>

        </div>

      </Modal>
    )
  }
}

// - Connect component to redux state
export default connect((state) => {
  return {imageGalleryStatus: state.imageGallery.status}
})(ImageGallery)
