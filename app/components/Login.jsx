// - Import external components
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
  Input,
  Divider
} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

// - Import actions
import * as authorizeActions from 'authorizeActions'


// - Create Login component class
export class Login extends Component {

  // Constructor
    constructor(props){
      super(props)
      this.handleUsername = i => {this.username = i }
      this.handlePassword = i => {this.password = i }

      // Binding functions to `this`
      this.handleForm = this.handleForm.bind(this)
    }

  // Handle form data on submit
  handleForm = (evt) => {
    evt.preventDefault()

    this.props.dispatch(authorizeActions.dbLogin(this.username.value,this.password.value))

  }
  // Render DOM
  render() {
    return (

      <Grid centered columns={1} padded>

        <Grid.Row>
          <Grid.Column computer={6} tablet={10} mobile={16}>
            <Form className='attached medium segment yellow' onSubmit={this.handleForm}>
              <input ref={this.handleUsername} placeholder='Email' type='email'/>
              <Divider hidden/>
              <input ref={this.handlePassword} placeholder='Password' type='password'/>
              <Divider hidden/>
              <Button color='blue'>Sign in</Button>
            </Form>

            <Message attached="bottom">
              <NavLink to='/signup'>Create an account</NavLink>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default connect()(Login)
