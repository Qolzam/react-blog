// - Impoer react components
import React, { Component } from 'react'
import { Button, Grid, Image, Icon, Modal, Label } from 'semantic-ui-react'

// - Create ImageGallery component class
export default class ImageGallery extends Component {

  // Constructor
  constructor(props){
    super(props);

    this.state = {
      active: false
    };

    // Binding function to `this`
    this.close = this.close.bind(this);
  }
  // Hide component
  close = () => {
    this.setState({ active: false });
    this.state.openCallBack();

  }

  // When component will receive next props
  componentWillReceiveProps= (nextProps) => {
    this.setState({
      active: nextProps.open,
      openCallBack: nextProps.callBack

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
          <Modal.Header>
            <Label size='small' as='a' floating onClick={this.close}> X</Label>
          </Modal.Header>
          <Grid doubling columns={4}>
            <Grid.Column style={{padding: '0'}}>
              <Image src={require('../dist/images/22.jpg')} />
            </Grid.Column>
            <Grid.Column>
              <Image src={require('../dist/images/22.jpg')} />
            </Grid.Column>
            <Grid.Column>
              <Image src={require('../dist/images/22.jpg')} />
            </Grid.Column>
            <Grid.Column>
              <Image src={require('../dist/images/22.jpg')} />
            </Grid.Column>
            <Grid.Column>
              <Image src={require('../dist/images/22.jpg')} />
            </Grid.Column>
            <Grid.Column>
              <Image src={require('../dist/images/22.jpg')} />
            </Grid.Column>
            <Grid.Column>
              <Image src={require('../dist/images/22.jpg')} />
            </Grid.Column>
            <Grid.Column>
              <Image src={require('../dist/images/22.jpg')} />
            </Grid.Column>
            <Grid.Column>
              <Image src={require('../dist/images/22.jpg')} />
            </Grid.Column>
            <Grid.Column>
              <Image src={require('../dist/images/22.jpg')} />
            </Grid.Column>
            <Grid.Column>
              <Image src={require('../dist/images/22.jpg')} />
            </Grid.Column>
            <Grid.Column>
              <Image src={require('../dist/images/22.jpg')} />
            </Grid.Column>
            <Grid.Column>
              <Image src={require('../dist/images/22.jpg')} />
            </Grid.Column>
            <Grid.Column>
              <Image src={require('../dist/images/22.jpg')} />
            </Grid.Column>
            <Grid.Column>
              <Image src={require('../dist/images/22.jpg')} />
            </Grid.Column>
            <Grid.Column>
              <Image src={require('../dist/images/22.jpg')} />
            </Grid.Column>
            <Grid.Column>
              <Image src={require('../dist/images/22.jpg')} />
            </Grid.Column>
            <Grid.Column>
              <Image src={require('../dist/images/22.jpg')} />
            </Grid.Column>

          </Grid>
        </Modal.Content>
      </Modal>
    )
  }
}
