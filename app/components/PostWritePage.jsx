// - Impoer react components
import React, {Component} from 'react'
import {Button, Header, Icon, Modal} from 'semantic-ui-react'

// - Import app components
import PostSelectPhoto from 'PostSelectPhoto'

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
      <Modal dimmer={'inverted'} open={this.state.active} onClose={this.close}>
        <Modal.Header>Modal #1</Modal.Header>
        <Modal.Content image>
          <div className='image'>
            <Icon name='right arrow'/>
          </div>
          <Modal.Description>
            <p>We have more to share with you. Follow us along to modal 2</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <PostSelectPhoto/>
        </Modal.Actions>
      </Modal>
    );
  }
}
