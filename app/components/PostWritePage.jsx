// - Impoer react components
import React, {Component} from 'react'
import {Button, Header, Icon, Modal, Card, Menu, Image, Label  } from 'semantic-ui-react'
import {connect} from 'react-redux'
// - Import app components
import ImageGallery from 'ImageGallery'
import * as imageGalleryActions from 'imageGalleryActions'
import * as postActions from 'postActions'

// - Create PostWritePage component class
export class PostWritePage extends Component {

  // Constructor
  constructor(props){
    super(props);

    this.state = {
      videoState:false
    };

    // Binding function to `this`
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleVideo = this.handleVideo.bind(this);

  }

  // Hide componet
  close = () => this.props.dispatch(postActions.openPostWritePage(false))

  // Show component
  open = () => this.props.dispatch(postActions.openPostWritePage(true))


  // Handle click to add image on post
  handleImage= ()=> {
    this.props.dispatch(imageGalleryActions.openImageGallery(true))

  }

  //Handle click to add video on post
  handleVideo = () => {
    this.setState({
      videoState: true
    });
  }


  // When component will receive next props
  componentWillReceiveProps= (nextProps) => {
  
  }

  // Render DOM
  render() {
    return (
        <Modal basic size='small' dimmer={'inverted'}
           open={(this.props.postWriteStatus)} onClose={this.close}>

        <Modal.Content>
          <Modal.Header>
          </Modal.Header>
          <Modal.Description>
            <Card centered fluid>
               <Image src={require('../dist/images/22.jpg')} />
               <Label size='small' as='a' floating onClick={this.close}> X</Label>
               <Card.Content>
                 <Card.Description>
                   <textarea autoFocus='true' placeholder="What's new with you?"></textarea>
                   </Card.Description>
               </Card.Content>
               <Card.Content extra>
                 <Menu icon compact>
                         <Menu.Item link name='camera' onClick={this.handleImage} >
                           <Icon name='camera' />
                         </Menu.Item>
                         <Menu.Item link name='video' onClick={this.handleVideo} >
                           <Icon name='video' />
                         </Menu.Item>
                  </Menu>
                   <Icon circular color='teal' link name='chevron right' style={{float: 'right'}} size='large' />
               </Card.Content>
           </Card>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect(
  (state) => {
      return {
        postWriteStatus: state.post.writeStatus,
        imageGalleryStaus: state.imageGallery.status
      }
})(PostWritePage)
