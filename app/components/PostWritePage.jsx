// - Impoer react components
import React, {Component} from 'react'
import {Button, Header, Icon, Modal, Card, Menu, Image, Label, Divider  } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Faker from 'faker'

// - Import app components
import ImageGallery from 'ImageGallery'
import Fimg from 'Fimg'

// - Import actions
import * as imageGalleryActions from 'imageGalleryActions'
import * as postWritingActions from 'postWritingActions'
import * as postActions from 'postActions'

// - Import API
import * as PostAPI from 'PostAPI'


/* ------------------------------ */

// - Create PostWritePage component class
export class PostWritePage extends Component {

  // Constructor
  constructor(props){
    super(props);

    this.state = {
      videoState:false,
      body:'',


    };

    // Binding function to `this`
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleVideo = this.handleVideo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleForm = this.handleForm.bind(this);

  }

  // Hide componet
  close = () => {
    var dispatch = this.props.dispatch
    dispatch(imageGalleryActions.clearSelectData())
    dispatch(postWritingActions.clearePostWritePage())
    this.setState({
      body: ''
    })
    dispatch(postWritingActions.openPostWritePage(false))

  }

  // Show component
  open = () => this.props.dispatch(postWritingActions.openPostWritePage(true))


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

  // Handle data on input change
  handleInputChange = (evt) => {
    const target = evt.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })

  }

  // Handle form data
  handleForm = (evt) => {
    evt.preventDefault()
    var {dispatch} = this.props
    var imageURL = this.props.selectURL
    var tags = PostAPI.getContentTags(this.state.body)
    if (imageURL) {
      dispatch(postActions.dbAddImagePost({
        body : this.state.body,
        tags : tags,
        image:  imageURL,
        avatar: this.props.avatar,
        name: this.props.name
      }, this.close))
    }
    else {
    dispatch(postActions.dbAddPost({
      body : this.state.body,
      tags : tags,
      avatar: this.props.avatar,
      name: this.props.name
    },this.close))
  }


  }

  // When component will receive next props
  componentWillReceiveProps= (nextProps) => {

  }

  // Render DOM
  render() {

    // Define variables
    const avatarImage = this.props.avatar
    const avatarStyle = {
      backgroundImage: 'url(' + avatarImage + ')'
    };

    const postImage = this.props.selectURL
    const postImageStyle = {
      backgroundImage: 'url(' + postImage + ')'
    };
    return (
        <Modal basic size='small' dimmer={'inverted'}
           open={(this.props.postWriteStatus)} onClose={this.close}>

           <form onSubmit={this.handleForm}>
            <Card centered fluid>
              <div className={this.props.selectURL ? 'postWrite__image' : ''} style={postImageStyle}></div>

               <Card.Content>
                 <Card.Header>
                   <div className="post__avatar" style={avatarStyle}></div>
                   {' '}<div className="post__meta">
                     <span className="post__avatar-title">{this.props.name}{' '}</span>
                     <span className="post__public-status"> > Public </span>

                     <Icon name="world"/>

                   </div>
                 </Card.Header>
                 <Divider hidden/>
                 <Card.Description>
                   <textarea name='body' value={this.state.body} onChange={this.handleInputChange} autoFocus='true' placeholder="What's new with you?"></textarea>
                   </Card.Description>
               </Card.Content>
               <Card.Content extra>
                 <Menu icon compact borderless>
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
        </form>
      </Modal>
    );
  }
}

export default withRouter(connect(
  (state) => {
      return {
        postWriteStatus: state.postWriting.writeStatus,
        imageGalleryStaus: state.imageGallery.status,
        selectImage: state.imageGallery.selectImage,
        avatar: state.global.avatar,
        name: state.user.info.name,
        selectURL: state.imageGallery.selectURL,
        selectImage: state.imageGallery.selectImage
      }
})(PostWritePage))
