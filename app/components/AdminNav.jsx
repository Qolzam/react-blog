import React, { Component } from 'react';
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

export default class AdminNav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical fluid >

        <Menu.Item as="div" name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
          <Icon name='home' />
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item as="div" name='manageusers' active={activeItem === 'manageusers'} onClick={this.handleItemClick}>
          <NavLink to="/admin/users">Manage Users</NavLink>
        </Menu.Item>
        <Menu.Item as="div" name='account' active={activeItem === 'account'} onClick={this.handleItemClick}>
          <NavLink to="/admin/account">Account</NavLink>
        </Menu.Item>
        <Menu.Item as="div" name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}>
          <NavLink to="/admin/profile">Profile</NavLink>
        </Menu.Item>
      </Menu>
    )
  }
}
