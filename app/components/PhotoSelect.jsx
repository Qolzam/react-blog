// - Impoer react components
import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

// - Create PhotoSelect component class
export default class PhotoSelect extends Component {

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
      <Modal
        dimmer={false}
        open={this.state.active}
        onClose={this.close}
        size='small'
      >
        <Modal.Content>
          <p>That's everything!</p>
        </Modal.Content>
      </Modal>
    )
  }
}
