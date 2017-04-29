// - Import react components
import React, {Component} from 'react'
import {Button, Comment, Form, Input} from 'semantic-ui-react'
import Faker from 'faker'

// - Import app components

// - Define variable
const buttonStyle = {
  marginTop: '5px'
};

// - Create Blog component class
export default class CommentWrite extends Component {
  constructor(props) {
    super(props);

    // Binding functions
    this.handleRef = this.handleRef.bind(this);
    this.focus = this.focus.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
  }

  handleRef = c => {
    this.inputRef = c
  }

  focus = () => {
    this.inputRef.focus()
  }
  handleAddComment = (evt) => {
    this.props.close();
  }

  render() {
    return (
      <div>
        <textarea autoFocus defaultValue={this.props.commentText}/>

        <Button basic style={buttonStyle} onClick={this.handleAddComment} color='teal'>Add Comment</Button>

      </div>
    );
  }
}
