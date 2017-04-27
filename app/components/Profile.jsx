import React,{Component} from 'react';
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

export default class Account extends Component {

  render() {
    return (
      <div id="account">
            <Form className='attached medium segment yellow'>
              <Header as='h3' dividing>
                About
              </Header>
              <Form.TextArea label='Summary' placeholder='Tell us a summary about you...' />
              <Form.Input label='Contact' placeholder='Your contact' />
                <Header as='h3' dividing>
                  Upload Avatar
                </Header>
                <Grid>
                  <Grid.Row centered>
                    <label htmlFor="file-upload">
                      <Button inverted as="div" color="blue">  <Icon name="cloud upload"/>Upload Photo</Button>
                    </label>
                    <input id="file-upload" type="file"/>
                  </Grid.Row>
                </Grid>
                 <Divider />
              <Button color='blue'>Save Changes</Button>

            </Form>
              </div>
    )
  }
}
