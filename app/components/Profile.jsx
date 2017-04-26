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

              <Form.TextArea label='Summary' placeholder='Tell us a summary about you...' />
              <Button color='blue'>Save Changes</Button>

            </Form>
              </div>
    )
  }
}
