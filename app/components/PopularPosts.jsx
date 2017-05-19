// - Import react components
import React, {Component} from 'react'
import {Card, Item, Divider} from 'semantic-ui-react'
import Faker from 'faker'
import {connect} from 'react-redux'

// - Create PopularPosts component class
export class PopularPosts extends Component {

  // Render DOM
  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            Popular Posts
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' src={Faker.image.nature()} />

              <Item.Content>
                <Item.Header>{this.props.name}</Item.Header>
                <Item.Meta content='1 month ago' />
                <Item.Description>{Faker.lorem.sentence()}</Item.Description>
              </Item.Content>
            </Item>

    <Item>
      <Item.Image size='tiny' src={Faker.image.nature()} />

      <Item.Content>
        <Item.Header>{this.props.name}</Item.Header>
        <Item.Meta content='2 days ago' />
        <Item.Description>{Faker.lorem.sentence()}</Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src={Faker.image.nature()} />

      <Item.Content>
        <Item.Header>{this.props.name}</Item.Header>
        <Item.Meta content='6 days ago' />
        <Item.Description>{Faker.lorem.sentence()}</Item.Description>
      </Item.Content>
    </Item>

  </Item.Group>
        </Card.Content>
      </Card>
    )
  }
}

export default connect((state)=>{
  return{
    name: state.user.fullName
  }
})(PopularPosts)
