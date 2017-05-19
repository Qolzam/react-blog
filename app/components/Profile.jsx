// - Import react components
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Button,
  Checkbox,
  Form,
  Icon,
  Message,
  Segment,
  Header,
  Grid,
  Divider,
  Image
} from 'semantic-ui-react'
import {NavLink, withRouter} from 'react-router-dom'
import Faker from 'faker'

// - Import app components
import ImageUp from 'ImageUploader'
import ImageGallery from 'ImageGallery'

// - Import actions
import * as imageGalleryActions from 'imageGalleryActions'
import * as userActions from 'userActions'



// - Create Profile component class
export class Profile extends Component {

// Constructor of component
constructor(props){
  super(props);
  this.state = {
    imageSelect: {
      url: this.props.avatar,
      name: ''
    }
  }

  // Binding funstions to this
  this.handleChooseAvatar = this.handleChooseAvatar.bind(this)
}

  // Handle open image gallery
  handleChooseAvatar  = () => {
    this.props.openImageGallery()
  }

  // Render DOM
  render() {
    return (
      <div id="profile">
        <Form className='attached medium segment yellow'>
          <Divider horizontal>About</Divider>
          <Form.TextArea label='Summary' placeholder='Tell us a summary about you...'/>
          <Form.Input label='Contact' placeholder='Your contact'/>
          <Divider horizontal>Avater</Divider>

          <div style={{textAlign:'center'}}>
          <div className="profile__avatar">
          <img src={this.props.avatar} style={{width: '100%'}}/>
          <div className="avatar-container">
            <Button as='div' onClick={this.handleChooseAvatar}>CHOOSE AVATAR</Button>
          </div>
          </div>
          </div>

       <Divider/>
          <Button color='blue'>Save Changes</Button>
        </Form>
        <ImageUp border="20" iconColor="teal"/>
        <ImageGallery select={this.props.saveAvatar}/>
      </div>
    )
  }
}

// - Map dispatch to props
const mapDispatchToProps = (dispatch,ownProps) => {
  return{
    saveAvatar: (url) => {dispatch(userActions.dbSetAvatar(url))},
    openImageGallery: () => {
      dispatch(imageGalleryActions.openImageGallery(true))
    }
  }
}

// - Map state to props
const mapStateToProps = (state,ownProps) => {
  return{
    postImageState: state.imageGallery.status,
    avatar: state.user.avatar
  }
}

// - Connect commponent to redux store
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Profile))
