// - Import react components
import React, {Component} from 'react'
import {Button, Comment, Form, Input} from 'semantic-ui-react'
import Faker from 'faker'

// - Import app components
import PostComment from 'PostComment'

// - Create Blog component class
export default class CommentGroup extends Component {
  constructor(props){
    super();
    this.state = {
      
    }
  }
  render() {
    return (
      <Comment.Group {...this.props}>

        <PostComment date={Faker.date.weekday()} avatarSrc={Faker.image.avatar()} author={Faker.name.findName()} text={Faker.lorem.paragraph()}/>
        <PostComment date={Faker.date.weekday()} avatarSrc={Faker.image.avatar()} author={Faker.name.findName()} text={Faker.lorem.paragraph()}/>
        <PostComment date={Faker.date.weekday()} avatarSrc={Faker.image.avatar()} author={Faker.name.findName()} text={Faker.lorem.paragraph()}/>
        <PostComment date={Faker.date.weekday()} avatarSrc={Faker.image.avatar()} author={Faker.name.findName()} text={Faker.lorem.paragraph()}/>

        <Form reply onSubmit={e => e.preventDefault()} >

          <Input fluid icon={{
            name: 'comment',
            circular: true,
            link: true
          }} placeholder='Comment...'/>
          <div className="global__hidden">
          <Form.TextArea/>
          <Button content='Add Comment' labelPosition='left' primary/>
          </div>
        </Form>
      </Comment.Group>

    );
  }
}
