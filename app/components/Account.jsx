// - Import react components
import React,{Component} from 'react'
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
  Divider
} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

// - Import actions
import * as userActions from 'userActions'
import * as authorizeActions from 'authorizeActions'

// - Create Account component class
export class Account extends Component {

  // Constructor
  constructor(props){
    super(props);

    this.state = {
      fullNameInput: props.fullName,
      emailInput: props.email,
      passwordInput:''
    }

    // Binding functions to `this`
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleOnSubmitForm = this.handleOnSubmitForm.bind(this)
  }

  // Handle on submit forms
  handleOnSubmitForm = (evt) => {
    evt.preventDefault()
    switch (evt.target.name) {
      case "info":
        this.props.saveChange({
          fullName: this.state.fullNameInput,
          email: this.state.emailInput
        })
      case "password":
      this.props.changePassword(this.state.passwordInput)
      default:

    }
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

  // Render DOM for component
  render() {
    return (
      <div id="account">
        <Divider horizontal> User information</Divider>
        <Form onSubmit={this.handleOnSubmitForm} name="info" className='attached medium segment yellow'>

          <Form.Input label='Full Name' name="fullNameInput" defaultValue={this.state.fullNameInput} onChange={this.handleInputChange} placeholder='Full Name' type='text'/>
          <Form.Input label='Email' name="emailInput" defaultValue={this.state.emailInput} onChange={this.handleInputChange} placeholder='Email' type='email'/>
          <Button color='blue'>Save Changes</Button>

        </Form>
          <Divider horizontal> Change Password</Divider>
            <Form onSubmit={this.handleOnSubmitForm}  name="password" className='attached medium segment yellow'>
              <Form.Input label='Password' name="passwordInput" onChange={this.handleInputChange} type='password'/>
              <Form.Input label='Confirm Password' name="confirm" onChange={this.handleInputChange} type='password'/>
              <Button color='blue'>Change Password</Button>

            </Form>
          </div>
    )
  }
}

// - Map dispatch to props
const mapDispatchToProps = (dispatch,ownProps) => {
  return{
    saveChange: (info) => {
      dispatch(userActions.dbUpdateUserInfo(info))
    },
    changePassword: (password) => {
      dispatch(authorizeActions.dbUpdatePassword(password))
    }
  }
}

// - Map state to props
const mapStateToProps = (state,ownProps) => {
  return{
    email: state.user.email,
    fullName: state.user.fullName
  }
}

// - Connect component to redux store
export default connect(mapStateToProps,mapDispatchToProps)(Account)
