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
  Header,
  Popup
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
      readMoreState: false,
      image: require('../dist/images/22.jpg')
    }

    // Binding functions to this
    this.handleReadMore = this.handleReadMore.bind(this);
  }
  // Handle read more event
  handleReadMore(evt, data) {

    if(this.readMoreState)
    {
      this.setState({
        text: Faker.lorem.sentence(),
        readMoreState: false

        });
    }
    else{
      this.setState({
        text: Faker.lorem.paragraphs(),
        readMoreState: true

        });
    }
  }

  componentDidMount(){

  }

  // Render DOM
  render() {
    return (

      <Card fluid>
        {
            this.props.pictureState
              ? <Image src={this.state.image}/>
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

       <Popup
    trigger={<Icon  className="right floated " name='ellipsis vertical' style={{cursor: 'pointer'}} color='teal' size='large' />}
    flowing
    hoverable
    size='tiny'
    position='left center'
  >


      <Button circular icon='edit' as='div'  color="teal"/>
      <Button circular icon='cancel' as='div' />

  </Popup>

          </Card.Header>
          <Card.Meta>
            <span className='post__date'>
              March 30 at 9:58pm
            </span>
          </Card.Meta>
          <Card.Description>
            {this.state.text}

              <Popup
           trigger={<Icon name='ellipsis horizontal' style={{cursor: 'pointer'}} color='teal' size='big' onClick={this.handleReadMore}/>}
           content='Read more...'
           position='right center'
           size='tiny'

         />
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
