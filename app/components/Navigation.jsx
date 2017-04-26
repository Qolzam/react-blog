// - Import react components
import React, {Component} from 'react';
import {Input, Menu, Search, Segment, Button} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

// - Feilds
const color = 'teal';
const colorKey = 'blue';

// - Create Navigation component class
export default class Navigation extends Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state

    return (
      <Menu color={color} stackable fluid>
        <Menu.Item icon="home" name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
        <Menu.Item name='account' active={activeItem === 'account'} onClick={this.handleItemClick}>
          <NavLink to="/admin/account">Account</NavLink>
        </Menu.Item>
        <Menu.Item name='logout'  active={activeItem === 'Logout'} onClick={this.handleItemClick}>
          <Button primary>Logout</Button>
        </Menu.Item>
        <Menu.Menu position='right' >
          <Menu.Item>
            <Search/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

    )
  }
}
