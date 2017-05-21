// - Import react components
import React, {Component} from 'react'
import {connect} from 'react-redux'
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
import Faker from 'faker'



// - Import app components
import PostWritePage from 'PostWritePage'


// - Import API
import * as AuthAPI from 'AuthAPI'

// - Import actions
import * as imageGalleryActions from 'imageGalleryActions'
import * as postWritingActions from 'postWritingActions'

// - Create PostWrite component class
export class PostWrite extends Component {

  // Constructor
  constructor(props) {
    super(props)

    // Binding functions to `this`
    this.handlePostWrite = this.handlePostWrite.bind(this);
  }

  // Handle write post event
  handlePostWrite = (evt) => {
    this.props.dispatch(postWritingActions.openPostWritePage(true))
  }

  // Render app DOM
  render() {


      // - Define variables
      const avatarImage = this.props.avatar
      const avatarStyle = {
        backgroundImage: 'url(' + avatarImage + ')'
      };

    return (
      <Container fluid textAlign='center' className='segment'>
        <div className="post__avatar" style={avatarStyle}></div>
        <div onClick={this.handlePostWrite} style={{
          cursor: 'pointer'
        }}>
          <span className='global__color-lightGrey'>What's new with you?</span>
          <Icon link name='write' color='grey' size='large' circular style={{
            marginLeft: '5px'
          }}/>
        </div>

       <PostWritePage/>
      </Container>

    );
  }
}

// - Connect component to redux store
export default connect((state) => {
  return {
    postImageState: state.imageGallery.status,
    postWriteState: state.postWriting.writeStatus,
    avatar: state.user.avatar
  }
})(PostWrite)
