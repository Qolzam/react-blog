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
  Input,
  Divider
} from 'semantic-ui-react'
import {NavLink, withRouter} from 'react-router-dom'

// - Import actions
import *  as authorizeActions from 'authorizeActions'
import * as globalActions from 'globalActions'




// - Create Signup componet class

export class Signup extends Component {

  // Constructor
  constructor(props){
    super(props);

    this.state = {
      fullNameInput: '',
      fullNameInputError: false,
      emailInput: '',
      emailInputError: false,
      passwordInput: '',
      passwordInputError: false,
      confirmInput: '',
      confirmInputError: false,
      checkInput: false,
      checkInputError: false

    }
    // Binding function to `this`
    this.handleForm = this.handleForm.bind(this)

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


   switch (name) {
     case 'fullNameInput':
        this.setState({
          fullNameInputError: false,
        })
      case 'emailInput':
       this.setState({
         emailInputError: false
       })
     case 'passwordInput':
      this.setState({
        confirmInputError: false,
        passwordInputError: false
      })
    case 'confirmInput':
     this.setState({
       confirmInputError: false,
       passwordInputError: false
     })
     case 'checkInput':
      this.setState({
        checkInputError: false
      })
       break;
     default:

   }
 }

  // Handle register form
  handleForm = (evt) => {
    evt.preventDefault();

     var error= false
     if (this.state.fullNameInput === '') {
       this.setState({
         fullNameInputError: true
       })
       error = true
     }
     if (this.state.emailInput === '') {
       this.setState({
         emailInputError: true
       })
       error = true
     }
     if (this.state.passwordInput === '') {
       this.setState({
         passwordInputError: true
       })
       error = true
     }
     if (this.state.confirmInput === '') {
       this.setState({
         confirmInputError: true
       })
       error = true
     }

     if (error) {
       this.props.showError("Fields are required")
     }
     else if(this.state.confirmInput !== this.state.passwordInput){
       this.setState({
         passwordInputError: true,
         confirmInputError: true
       })
       this.props.showError("Password and confirm are not equal")
       error = true
     }
     else if (this.state.checkInput === false) {
       this.setState({
         checkInputError: true
       })
       this.props.showError("You should agree our rules :)")
       error = true

     }
     if (!error) {
       this.props.register({
          email: this.state.emailInput,
          password: this.state.passwordInput,
          fullName: this.state.fullNameInput
        })
     }
  }

  // Render DOM
  render() {
    return (

      <Grid centered columns={1} padded>

        <Grid.Row>

          <Grid.Column computer={6} tablet={10} mobile={16}>
            <Form className='attached medium segment yellow' onSubmit={this.handleForm}>

              <Form.Input name="fullNameInput" onChange={this.handleInputChange} error={this.state.fullNameInputError} placeholder='Full Name' type='text'/>
              <Divider hidden/>
              <Form.Input name="emailInput" onChange={this.handleInputChange} placeholder='Email' error={this.state.emailInputError} type='email'/>
              <Divider hidden/>
              <Form.Input name="passwordInput" onChange={this.handleInputChange} placeholder='Password' error={this.state.passwordInputError} type='password'/>
              <Divider hidden/>
              <Form.Input name="confirmInput" onChange={this.handleInputChange} placeholder='Confirm Password' error={this.state.confirmInputError} type='password'/>
              <Divider hidden/>
                <div className="field">
                  <div className="ui checkbox">
                    <input type="checkbox" name="checkInput" onChange={this.handleInputChange} value="I agree to the terms and conditions"/>
                    <label>I agree to the terms and conditions</label>
                  </div>
                </div>
            <Divider/>
              <Button color='blue' >Create</Button>

            </Form>

            <Message attached="bottom">

              Already signed up?&nbsp;<NavLink to='/login'>Login here</NavLink>&nbsp;instead.
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}


// - Map dispatch to props
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    showError: (message) => {
      dispatch(globalActions.showNotificationError(message))
    },
    register: (data) => {
      dispatch(authorizeActions.dbSignup(data))
    }
  }
}

// - Map state to props
const mapStateToProps = (state,ownProps) => {
  return{

  }
}

// - Connect component to redux store
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Signup))
