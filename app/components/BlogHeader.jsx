// - Import react components
import React, {Component} from 'react'
import {Header, Icon} from 'semantic-ui-react'
import {NavLink}  from 'react-router-dom'

// - Import components

// - Create BlogHeader component class
export default class BlogHeader extends Component {

  // Render app DOM component
  render() {
    return (
      <Header as='h2' icon textAlign='center' color="green">
        <NavLink to='/' style={{color:"#21ba45"}}>  <Icon name='suitcase' circular/></NavLink>
        <Header.Content>
      <NavLink to='/' style={{color:"#21ba45"}}>  Green's Diary </NavLink>
        </Header.Content>
        <Header.Subheader>

        </Header.Subheader>
      </Header>

    );
  }
}
