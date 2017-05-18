// - Import react components
import React, {Component} from 'react'
import { Button, Comment, Form } from 'semantic-ui-react'
import moment from 'moment'

// - Import app components

// - Create PostComment component class
export default class PostComment extends Component {
  render() {
    return (
      <Comment>
        <Comment.Avatar as='a' src={this.props.avatarSrc} />
        <Comment.Content>
          <Comment.Author>{this.props.author}</Comment.Author>
          <Comment.Metadata>
            <div>{moment.unix(this.props.creationDate).format('MMM Do YYYY @ h:mm a')}</div>
          </Comment.Metadata>
          <Comment.Text>{this.props.text}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    );
  }
}
