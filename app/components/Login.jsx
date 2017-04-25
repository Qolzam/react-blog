import React, {Component} from 'react';
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

export default class Login extends Component {

    constructor(props){
      super(props);

    }

  render() {
    return (

      <Grid centered columns={1} padded>

        <Grid.Row>

          <Grid.Column computer={6} tablet={10} mobile={16}>
            <Form className='attached medium segment yellow'>
              <Form.Input label='Email' placeholder='Email' type='email'/>
              <Form.Input label='Password' type='password'/>
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
