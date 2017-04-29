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
  Label
} from 'semantic-ui-react'
import Faker from 'faker'

const avatarImage = require('../dist/images/15.jpg');
const avatarStyle = {
  backgroundImage: 'url(' + avatarImage + ')'
};

// - Import app components
import CommentGroup from 'CommentGroup'

// - Create Post component class
export default class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: Faker.lorem.sentence()
    }
    this.readMore = this.readMore.bind(this);
  }
  readMore(evt, data) {

    this.setState({text: Faker.lorem.paragraphs()});
  }

  render() {
    return (

      <Card fluid>
        <Image src={require('../dist/images/22.jpg')}/>
        <Card.Content>
          <Card.Header>

            <div className="post__avatar" style={avatarStyle}></div>
            {' '}<div className="post__meta">
              <span className="post__avatar-title">Nguyen Thuy{'  '}</span>

                <Icon name="world"/>


            </div>

          </Card.Header>
          <Card.Meta> <span className='post__date'> March 30 at 9:58pm  </span></Card.Meta>
          <Card.Description>
            {this.state.text} <Icon name='ellipsis horizontal' color='teal' size='big' onClick={this.readMore}/><Label pointing='left'>Read More</Label>
          </Card.Description>
        </Card.Content>
        <Card.Content extra className="attached">
          <Menu secondary >
            <Button
               color='red'
               icon='heart'
               labelPosition='right'
               label={{ basic: true, color: 'red', pointing: 'left', content: '248' }}
             />

            <Menu.Menu position="right">
              <Button

       color='grey'
       icon='comment'
       labelPosition='right'
       label={{ basic: true, color: 'grey', pointing: 'left', content: '24' }}
     />


            </Menu.Menu>
          </Menu>
        </Card.Content>
        <Divider fitted />
        <CommentGroup className="container basic segment"/>
      </Card>

    )
  }
}
