// - Import react components
import React, { Component } from 'react';
import { Dropdown, Icon, Input, Menu, Button } from 'semantic-ui-react';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

// - Import actions
import * as authorizeActions from 'authorizeActions'

// Create AdminNav component class
export class AdminNav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  // Constructor
  constructor(props){
    super(props)

    // Binding function to `this`
    this.handleLogout = this.handleLogout.bind(this)
  }


  // Handle logout process
  handleLogout = () => {
    var {dispatch} = this.props
    dispatch(authorizeActions.dbLogout())


  }

  // Render DOM
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
        <Menu.Item as="div" name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick}>
          <Button onClick={this.handleLogout}>Logout</Button>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(connect((state)=>{
  return{
    router: state.router
  }
})(AdminNav))
