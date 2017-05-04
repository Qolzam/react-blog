// - Impoer react components
import React, {Component} from 'react'
import {Button, Header, Icon, Modal, Card, Menu, Image, Label, Divider  } from 'semantic-ui-react'
import {connect} from 'react-redux'
// - Import app components
import ImageGallery from 'ImageGallery'
import * as imageGalleryActions from 'imageGalleryActions'
import * as postActions from 'postActions'

// Define variables
const avatarImage = require('../dist/images/15.jpg');
const avatarStyle = {
  backgroundImage: 'url(' + avatarImage + ')'
};

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

           
            <Card centered fluid>
               <Image src={require('../dist/images/22.jpg')} />
               <Card.Content>
                 <Card.Header>
                   <div className="post__avatar" style={avatarStyle}></div>
                   {' '}<div className="post__meta">
                     <span className="post__avatar-title">Nguyen Thuy{' '}</span>
                     <span className="post__public-status"> > Public </span>

                     <Icon name="world"/>

                   </div>
                 </Card.Header>
                 <Divider hidden/>
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
                  <Button floated='right' color='blue' basic>POST</Button>
                  <Button floated='right' basic onClick={this.close}>CANCEL</Button>

               </Card.Content>
           </Card>

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
