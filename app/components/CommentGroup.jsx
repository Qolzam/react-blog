// - Import react components
import React, {Component} from 'react'
import {Button, Comment, Form, Input} from 'semantic-ui-react'
import Faker from 'faker'

// - Import app components
import PostComment from 'PostComment'
import CommentWrite from 'CommentWrite'

// - Create CommentGroup component class
export default class CommentGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentWriteShow: false,
      commentText: ""

    }

    // Binding functions
    this.onCommentChange = this.onCommentChange.bind(this);
    this.closeWriteComment = this.closeWriteComment.bind(this);

  }
  onCommentChange(evt, data) {
    var text = data.value;

    this.setState({commentWriteShow: true, commentText: text});

    data.value = "";

  }
  closeWriteComment = () => {
    this.setState({
      commentWriteShow: false
    });
  }

// Render DOM
  render() {
    return (
      <Comment.Group size="mini" minimal{...this.props}>

        {/*<PostComment date={Faker.date.weekday()} avatarSrc={Faker.image.avatar()} author={Faker.name.findName()} text={Faker.lorem.paragraph()}/>*/}
        {/*<PostComment date={Faker.date.weekday()} avatarSrc={Faker.image.avatar()} author={Faker.name.findName()} text={Faker.lorem.paragraph()}/>*/}
        {/*<PostComment date={Faker.date.weekday()} avatarSrc={Faker.image.avatar()} author={Faker.name.findName()} text={Faker.lorem.paragraph()}/>*/}
        <PostComment date={Faker.date.weekday()} avatarSrc={Faker.image.avatar()} author={Faker.name.findName()} text={Faker.lorem.paragraph()}/>

        <Form reply onSubmit={e => e.preventDefault()}>

          {!this.state.commentWriteShow
            ? <Input fluid onChange={this.onCommentChange} icon={{
                name: 'comment',
                circular: true,
                link: true
              }} placeholder='Comment...'/>
            : <CommentWrite commentText={this.state.commentText} close={this.closeWriteComment}/>

          }
        </Form>
      </Comment.Group>

    );
  }
}
