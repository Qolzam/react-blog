// - Import react components
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

// - Create Signup componet class
export default class Signup extends Component {

  // Constructor
  constructor(props){
    super(props);
  }

  // Render DOM
  render() {
    return (

      <Grid centered columns={1} padded>

        <Grid.Row>

          <Grid.Column computer={6} tablet={10} mobile={16}>
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
