// - Impoer react components
import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

// - Create PostSelectPhoto component class
export default class PostSelectPhoto extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  // Render DOM
  render() {
    const { open } = this.state

    return (
      <Modal
        dimmer={false}
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={<Button primary icon>Proceed <Icon name='right chevron' /></Button>}
      >
        <Modal.Header>Modal #2</Modal.Header>
        <Modal.Content>
          <p>That's everything!</p>
        </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content='All Done' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}
