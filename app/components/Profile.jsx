// - Import react components
import React, {Component} from 'react';
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

// - Import app components
import {NavLink} from 'react-router-dom';
import ImageUp from 'ImageUploader';

// - Create Profile component class
export default class Profile extends Component {

  // Render DOM
  render() {
    return (
      <div id="account">
        <Form className='attached medium segment yellow'>
          <Divider horizontal>About</Divider>
          <Form.TextArea label='Summary' placeholder='Tell us a summary about you...'/>
          <Form.Input label='Contact' placeholder='Your contact'/>
          <Divider horizontal>Upload Avater</Divider>
          <ImageUp border="20" iconColor="teal"/>
          <Divider horizontal> Upload Backgound</Divider>
          <ImageUp height="150" width="200" border="20"iconColor="teal"/>
         <Divider/>
          <Button color='blue'>Save Changes</Button>

        </Form>
      </div>
    )
  }
}
