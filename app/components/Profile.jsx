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

      url: props.avatar,
      name: '',
      contactInput: props.contact,
      summaryInput: props.summary

  }

  // Binding funstions to this
  this.handleChooseAvatar = this.handleChooseAvatar.bind(this)
  this.handleInputChange = this.handleInputChange.bind(this)
  this.handleOnSubmitForm = this.handleOnSubmitForm.bind(this)
  this.setSelectAvatar = this.setSelectAvatar.bind(this)

}

  // Set selected avatar
  setSelectAvatar = (url) => {
  this.setState({
        url:url
      })
  }

  // Handle save change
  handleOnSubmitForm = (evt) => {
    evt.preventDefault()
    this.props.saveChange({
      avatar: this.state.url || ' ',
      contact: this.state.contactInput,
      summary: this.state.summaryInput || ' '
    })
  }

  // Handle open image gallery
  handleChooseAvatar  = () => {
    this.props.openImageGallery()
  }

  // Handle data on input change
  handleInputChange = (evt) => {
   const target = evt.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   console.log('Name: ',name,' value: ', value);
   this.setState({
     [name]: value
   });
 }

  // Render DOM
  render() {
    return (
      <div id="profile">
        <Form className='attached medium segment yellow' onSubmit={this.handleOnSubmitForm}>
          <Divider horizontal>About</Divider>
          <Form.TextArea label='Summary' name="summaryInput" defaultValue={this.state.summaryInput} onChange={this.handleInputChange} placeholder='Tell us a summary about you...'/>
          <Form.Input label='Contact' name="contactInput" defaultValue={this.state.contactInput} onChange={this.handleInputChange} placeholder='Your contact'/>
          <Divider horizontal>Avater</Divider>

          <div style={{textAlign:'center'}}>
          <div className="profile__avatar">
          <img src={this.state.url} style={{width: '100%'}}/>
          <div className="avatar-container">
            <Button as='div' onClick={this.handleChooseAvatar}>CHOOSE AVATAR</Button>
          </div>
          </div>
          </div>

       <Divider/>
          <Button color='blue'>Save Changes</Button>
        </Form>
        <ImageUp border="20" iconColor="teal"/>
        <ImageGallery select={this.setSelectAvatar}/>
      </div>
    )
  }
}

// - Map dispatch to props
const mapDispatchToProps = (dispatch,ownProps) => {
  return{
    openImageGallery: () => {
      dispatch(imageGalleryActions.openImageGallery(true))
    },
    saveChange: (info) => {
      dispatch(userActions.dbUpdateUserInfo(info))
    }
  }
}

// - Map state to props
const mapStateToProps = (state,ownProps) => {
  return{
    postImageState: state.imageGallery.status,
    avatar: state.user.avatar,
    summary: state.user.summary,
    contact: state.user.contact || state.user.email
  }
}

// - Connect commponent to redux store
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Profile))
