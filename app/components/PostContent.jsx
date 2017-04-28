// - Import react components
import React, {Component} from 'react'
import {Card, Icon, Menu, Image} from 'semantic-ui-react'

const avatarImage = require('../dist/images/15.jpg');
const avatarStyle = {
  backgroundImage: 'url(' + avatarImage + ')'
};

// - Create Post component class
export default class PostContent extends Component {

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
            My love story was out of my imagination. Cupid shot me when I was in pursuit of my dream named Silk road. As a result, instead of exploring an ancient network of trade routes, I followed the call of love. Will you marry me, Green?
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Menu>
            <Menu.Item link name='readmore'>
              <span className="global__color-teal">Read more ...</span>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item link icon="comments outline" name='21'/>
              <Menu.Item link icon="star" name='2'/>

            </Menu.Menu>
          </Menu>
        </Card.Content>
      </Card>

    )
  }
}
