import React,{Component} from 'react';
import {
  Button,
  Checkbox,
  Form,
  Icon,
  Message,
  Segment,
  Header,
  Grid
} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

export default class Account extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div id="account">
            <Form className='attached medium segment yellow'>

              <Form.Input label='Full Name' placeholder='Full Name' type='text'/>
              <Form.Input label='Email' placeholder='Email' type='email'/>
              <Form.Input label='Password' type='password'/>
              <Form.Input label='Confirm Password' type='password'/>
              <Form.Checkbox inline label='I agree to the terms and conditions'/>
              <Button color='blue'>Create</Button>

            </Form>

            <Message attached="bottom">

              Already signed up?&nbsp;<NavLink to='/login'>Login here</NavLink>&nbsp;instead.
            </Message>
              </div>
    )
  }
}
