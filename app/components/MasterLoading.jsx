// - Import react components
import React, {Component} from 'react';
import {Header, Icon, Dimmer, Loader} from 'semantic-ui-react';

// - Import components

// - Create MasterLoading component class
export default class MasterLoading extends Component {

  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };

    // Binding functions to `this`
    this.handleShow = this.handleShow.bind(this);
  }

  // Handle show loading
  handleShow = () => this.setState({active: true})

  // Render app DOM component
  render() {
    return (

      <Dimmer page active={this.props.activeLoading} style={{
        background: "white"
      }} inverted onClickOutside={this.handleShow}>

        <i className="huge icons">
          <i className="big loading global__color-gold circle notched icon"></i>
          <i className="suitcase teal icon"></i>
        </i>
        <Header as='h2'>
          Green's Diary
          <Header.Subheader>
            Loading...
          </Header.Subheader>
        </Header>
      </Dimmer>
    );
  }

}
