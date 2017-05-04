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
  Embed,
  Rail
} from 'semantic-ui-react'
import Faker from 'faker'

// Define variables
const avatarImage = require('../dist/images/15.jpg');
const avatarStyle = {
  backgroundImage: 'url(' + avatarImage + ')'
};

// - Import app components
import CommentGroup from 'CommentGroup'

// - Create Post component class
export default class Post extends Component {

  // Constructor
  constructor(props) {
    super(props)
    this.state = {
      text: Faker.lorem.sentence(),
      readMoreState: false
    }

    // Binding functions to this
    this.handleReadMore = this.handleReadMore.bind(this);
  }
  // Handle read more event
  handleReadMore(evt, data) {

    this.setState({
      text: Faker.lorem.paragraphs(),
      readMoreState: !this.readMoreState

    });
  }

  // Render DOM
  render() {
    return (

      <Card fluid>
        {
            this.props.pictureState
              ? <Image src={require('../dist/images/22.jpg')}/>
              : <Embed id='O6Xo21L0ybE' placeholder='/assets/images/image-16by9.png' source='youtube'/>
          }


        <Card.Content>
          <Card.Header>

            <div className="post__avatar" style={avatarStyle}></div>
            {' '}<div className="post__meta">
              <span className="post__avatar-title">Nguyen Thuy{'  '}</span>
              <span className="post__public-status"> > Public </span>
              <Icon name="world"/>

            </div>

          </Card.Header>
          <Card.Meta>
            <span className='post__date'>
              March 30 at 9:58pm
            </span>
          </Card.Meta>
          <Card.Description>
            {this.state.text}
            <Icon name='ellipsis horizontal' color='teal' size='big' onClick={this.handleReadMore}/>
            <Label pointing='left'>Read More</Label>
          </Card.Description>
        </Card.Content>
        <Card.Content extra className="attached">
          <Menu secondary>
            <Button color='red' icon='heart' labelPosition='right' label={{
              basic: true,
              color: 'red',
              pointing: 'left',
              content: '248'
            }}/>

            <Menu.Menu position="right">
              <Button color='grey' icon='comment' labelPosition='right' label={{
                basic: true,
                color: 'grey',
                pointing: 'left',
                content: '24'
              }}/>

            </Menu.Menu>
          </Menu>
        </Card.Content>
        <Divider fitted/>
        <CommentGroup className="container basic segment"/>
      </Card>

    )
  }
}
