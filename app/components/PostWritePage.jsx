// - Impoer react components
import React, {Component} from 'react'
import {Button, Header, Icon, Modal, Card, Menu, Image  } from 'semantic-ui-react'

// - Import app components
import PhotoSelect from 'PhotoSelect'

// - Create PostWritePage component class
export default class PostWritePage extends Component {

  // Constructor
  constructor(props){
    super(props);

    this.state = {
      active: false
    };

    // Binding function to `this`
    this.close = this.close.bind(this);
  }

  close = () => this.setState({ active: false })

  componentWillReceiveProps= (nextProps) => {
    this.setState({
      active: nextProps.open

    });
  }

  // Render DOM
  render() {
    return (
        <Modal basic size='small' dimmer={'inverted'} open={this.state.active} onClose={this.close}>

        <Modal.Content>

          <Modal.Description>
            <Card centered>
               <Image src={require('../dist/images/22.jpg')} />
               <Card.Content>

                 <Card.Description>
                   <textarea autoFocus='true' placeholder="What's new with you?"></textarea>

                   </Card.Description>
               </Card.Content>
               <Card.Content extra>
                 <Menu icon compact>
                         <Menu.Item link name='camera' >
                           <Icon name='camera' />
                         </Menu.Item>

                         <Menu.Item link name='video' >
                           <Icon name='video' />
                         </Menu.Item>

                  </Menu>
                   <Icon circular color='teal' link name='chevron right' style={{float: 'right'}} size='large' />
               </Card.Content>
           </Card>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}
