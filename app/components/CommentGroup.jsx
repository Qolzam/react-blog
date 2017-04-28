// - Import react components
import React, {Component} from 'react'
import { Button, Comment, Form } from 'semantic-ui-react'
import Faker from 'faker'

// - Import app components
import PostComment from 'PostComment'

// - Create Blog component class
export default class CommentGroup extends Component {
  render() {
    return (
      <Comment.Group {...this.props}>
          <PostComment
            date={Faker.date.weekday()}
            avatarSrc={Faker.image.avatar()}
            author={Faker.name.findName()}
            text={Faker.lorem.paragraph()}/>
            <PostComment
              date={Faker.date.weekday()}
              avatarSrc={Faker.image.avatar()}
              author={Faker.name.findName()}
              text={Faker.lorem.paragraph()}/>
              <PostComment
                date={Faker.date.weekday()}
                avatarSrc={Faker.image.avatar()}
                author={Faker.name.findName()}
                text={Faker.lorem.paragraph()}/>
                <PostComment
                  date={Faker.date.weekday()}
                  avatarSrc={Faker.image.avatar()}
                  author={Faker.name.findName()}
                  text={Faker.lorem.paragraph()}/>
          <Form reply onSubmit={e => e.preventDefault()}>
            <Form.TextArea />
            <Button content='Add Comment' labelPosition='left' icon='edit' primary />
          </Form>
        </Comment.Group>


    );
  }
}
