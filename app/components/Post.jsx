// - Import react components
import React, {Component} from 'react'
import {Card, Icon, Menu, Image, Segment, Grid, Divider} from 'semantic-ui-react'
import Faker from 'faker'

const avatarImage = require('../dist/images/15.jpg');
const avatarStyle = {
  backgroundImage: 'url(' + avatarImage + ')'
};

// - Import app components
import CommentGroup from 'CommentGroup'

// - Create Post component class
export default class Post extends Component {
constructor(props){
  super(props)
  this.state = {
    text: Faker.lorem.sentence()
  }
  this.readMore = this.readMore.bind(this);
}
readMore(evt,data){
  this.setState({
    text: Faker.lorem.paragraphs()
  });
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
              <span className='post__date'>
                <Icon name="world"/>
                March 30 at 9:58pm
              </span>
            </div>

          </Card.Header>
          <Card.Meta></Card.Meta>
          <Card.Description>
            {this.state.text}
          </Card.Description>
        </Card.Content>
        <Card.Content extra className="attached">
          <Menu>
            <Menu.Item link name='readmore'>
              <span className="global__color-teal" onClick={this.readMore}>Read more ...</span>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item link icon="comments outline" name='21'/>
              <Menu.Item link icon="star" name='2'/>

            </Menu.Menu>
          </Menu>
        </Card.Content>

 <CommentGroup className="container basic secondary segment"/>
        </Card>



    )
  }
}
