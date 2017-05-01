// - Import react components
import React, {Component} from 'react'
import {
  Card,
  Icon,
  Menu,
  Image,
  Segment,
  Grid,
  Divider,
  Button,
  Label,
  Container
} from 'semantic-ui-react'

// Define variables
const avatarImage = require('../dist/images/15.jpg');
const avatarStyle = {
  backgroundImage: 'url(' + avatarImage + ')'
};

// - Import app components
import PostWritePage from 'PostWritePage';

// - Create PostWrite component class
export default class PostWrite extends Component {

  // Constructor
  constructor(props) {
    super(props)

    this.state = {
      postWriteOpen: false
    };
    // Binding functions to `this`
    this.handleWriteClick = this.handleWriteClick.bind(this);
  }

  // Handle write post event
  handleWriteClick = (evt) => {
    this.setState({
      postWriteOpen: true
    });

  }
  // Render app DOM
  render() {

    return (
      <Container fluid textAlign='center' className='segment'>
        <div className="post__avatar" style={avatarStyle}>  </div>
          <span className='global__color-lightGrey'>What's new with you?</span>
          <Icon link onClick={this.handleWriteClick} name='write' color='grey' size='large' circular style={{
        marginLeft: '10px'
      }}/>
    <PostWritePage open={this.state.postWriteOpen}/>
      </Container>

    );
  }
}
