// - Impoer react components
import React, { Component } from 'react'
import { Button, Grid, Image, Icon, Modal, Label } from 'semantic-ui-react'
import {connect} from 'react-redux'

// - Import app components
import * as imageGalleryActions from 'imageGalleryActions'
import * as postActions from 'postActions'

// - Create ImageGallery component class
export class ImageGallery extends Component {

  // Constructor
  constructor(props){
    super(props);

    // Binding function to `this`
    this.close = this.close.bind(this);
  }
  // Hide component
  close = () => {
    this.props.dispatch(imageGalleryActions.openImageGallery(false))

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
        open={this.props.imageGalleryState}
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

// - Connect component to redux state
export default connect(
  (state) => {
    return{
      imageGalleryState: state.imageGallery.status
  }
  }
)(ImageGallery)
