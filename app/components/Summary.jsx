// - Import react components
import React, {Component} from 'react'
import {Card, Icon, Image} from 'semantic-ui-react'
import Faker from 'faker'
import {connect} from 'react-redux'

// - Create Summary component class
export class Summary extends Component {

  // Render DOM
  render() {
    return (

      <Card fluid>
        <Image src={Faker.image.image()}/>
        <Card.Content>
          <Card.Header>
           {this.props.name}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
           Born in {Faker.date.month()}
            </span>
          </Card.Meta>
          <Card.Description>
          {Faker.lorem.sentence()}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user'/>
            Contact Me
          </a>

        </Card.Content>
      </Card>
    )
  }
}

export default connect((state)=>{
  return{
    name: state.user.info.name
  }
})(Summary)
