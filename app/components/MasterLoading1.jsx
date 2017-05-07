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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (evt) => {
    this.props.handleLoading(false)
  }

  // Handle show loading
  handleShow = () => this.setState({active: true})

  // Render app DOM component
  render() {
    return (

      <Dimmer page active={this.props.activeLoading} style={{
        background: "white"
      }} inverted onClickOutside={this.handleShow}>

        <i className="huge icons" onClick={this.handleClick}>
          <i className="big loading global__color-gold circle notched icon"></i>
          <i className="suitcase teal icon"></i>
        </i>
        <Header as='h2'>
          <span style={{fontSize: '60px', marginRight: '15px' }}>I</span>

      <svg className="heart" viewBox="0 0 32 29.6">
      <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
      c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
      </svg>

    <span style={{fontSize: '60px', marginLeft: '15px' }}>MY WIFE</span>
          <Header.Subheader style={{marginTop: '15px' }}>
            Loading...
          </Header.Subheader>
        </Header>

      </Dimmer>
    );
  }

}
