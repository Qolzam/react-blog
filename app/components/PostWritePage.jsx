// - Impoer react components
import React, {Component} from 'react'
import {Button, Header, Icon, Modal, Card, Menu, Image, Label  } from 'semantic-ui-react'

// - Import app components
import ImageGallery from 'ImageGallery'

// - Create PostWritePage component class
export default class PostWritePage extends Component {

  // Constructor
  constructor(props){
    super(props);

    this.state = {
      active: false,
      imageState:false,
      videoState:false
    };

    // Binding function to `this`
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleVideo = this.handleVideo.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);

  }

  // Hide componet
  close = () => this.setState({ active: false })

  // Show component
  open = () => this.setState({ active: true })

  // Handle event on close component
  handleOnClose = (evt) => {

  }

  // Handle click to add image on post
  handleImage= ()=> {
    this.setState({
      imageState: true
    });

  }

  //Handle click to add video on post
  handleVideo = () => {
    this.setState({
      videoState: true
    });
  }


  // When component will receive next props
  componentWillReceiveProps= (nextProps) => {
    this.setState({
      active: nextProps.open
    });
  }

  // Render DOM
  render() {
    return (
        <Modal basic size='small' dimmer={'inverted'} open={this.state.active} onClose={this.handleOnClose}>

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
