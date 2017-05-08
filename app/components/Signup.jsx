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





// - Create Signup componet class

export class Signup extends Component {

  // Constructor
  constructor(props){
    super(props);

    this.handleFullName = i => {this.fullName = i}
    this.handleEmail = i => {this.email = i}
    this.handlePassword = i => {this.password = i}
    this.handleConfirm = i => {this.confirm = i}



    // Binding function to `this`
    this.handleForm = this.handleForm.bind(this)

  }

  // Handle register form
  handleForm = (evt) => {
    evt.preventDefault();
    this.props.dispatch(authorizeActions.dbSignup({email: this.email.value,
       password: this.password.value,
       fullName: this.fullName.value
     }))

  }

  // Render DOM
  render() {
    return (

      <Grid centered columns={1} padded>

        <Grid.Row>

          <Grid.Column computer={6} tablet={10} mobile={16}>
            <Form className='attached medium segment yellow' onSubmit={this.handleForm}>

              <input ref={this.handleFullName} className="fluid" placeholder='Full Name' type='text'/>
              <Divider hidden/>
              <input ref={this.handleEmail} className="fluid" placeholder='Email' type='email'/>
              <Divider hidden/>
              <input ref={this.handlePassword} className="fluid" placeholder='Password' type='password'/>
              <Divider hidden/>
              <input ref={this.handleConfirm} className="fluid" placeholder='Confirm Password' type='password'/>
              <Divider hidden/>
              <Checkbox ref={this.handleCheck} label='I agree to the terms and conditions'/>
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

export default withRouter(connect()(Signup))
