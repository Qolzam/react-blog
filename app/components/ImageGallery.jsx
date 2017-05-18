// - Impoer react components
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
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
import * as postWritingActions from 'postWritingActions'
import * as imageUploaderActions from 'imageUploaderActions'

// - Import app components
import Limg from 'Limg'

// - Create ImageGallery component class
export class ImageGallery extends Component {



  // Constructor
  constructor(props) {
    super(props);

    // Binding function to `this`
    this.close = this.close.bind(this);
    this.handleImageUploader = this.handleImageUploader.bind(this);
    this.imageList = this.imageList.bind(this)
  }
  // Hide component
  close = () => {
    this.props.closeImageGallery()
  }

  // Produce a list of image in image gallery
  imageList = () => {

    var {images} = this.props
   return  images.map((image,index) => <Limg key={image.id} callBack={this.close} id={image.id} src={image.name}/>)

  }

  // When component will receive next props
  componentWillReceiveProps = (nextProps) => {
    this.setState({active: nextProps.open, openCallBack: nextProps.callBack});
  }

  // Handle Image uploader
  handleImageUploader = (evt) => {
    this.props.openImageUploader()
  }

  componentWillUnmount(){
    console.log('Image gallery unmount')
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
              {this.imageList()}

            </ul>
          </div>

        </div>

      </Modal>
    )
  }
}

// - Map dispatch to props
const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    closeImageGallery: () => {
      dispatch(imageGalleryActions.openImageGallery(false))
    },
    openImageGallery: () => {
      dispatch(imageGalleryActions.openImageGallery(true))
    },
    openImageUploader: () => {
      dispatch(imageUploaderActions.openImageUploader(true));
    }

  }
}

// - Map state to props
const mapStateToProps = (state) => {
  return {
           imageGalleryStatus: state.imageGallery.status,
           postWritingStatus: state.postWriting.writeStatus,
           images: state.imageGallery.images
         }
}

// - Connect component to redux store
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ImageGallery))
