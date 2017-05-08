// - Import react components
import React, {Component} from 'react'
import {Input, Menu, Search, Segment, Button} from 'semantic-ui-react'
import {NavLink, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

// - Import API
import * as AuthAPI from 'AuthAPI'

// - Feilds
const color = 'teal';
const colorKey = 'blue';

// - Create Navigation component class
export class Navigation extends Component {

  // Counstructor
  constructor(props){
    super(props)

    // Binding functions to `this`
    this.handleLogout = this.handleLogout.bind(this)

  }

  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

 // Handle logout process
 handleLogout = () => {
   this.props.dispatch(push('/login'))
 }

  // Render DOM
  render() {
    const {activeItem} = this.state

    return (
      <Menu color={color} stackable fluid>
        <Menu.Item as="div" icon="home" name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
        <Menu.Item as="div" name='account' active={activeItem === 'account'} onClick={this.handleItemClick}>
          <NavLink as="div" to="/admin/account">Account</NavLink>
        </Menu.Item>
        <Menu.Item name='logout'  active={activeItem === 'Logout'} onClick={this.handleItemClick}>
        { AuthAPI.isAuthorized() ? <Button primary onClick={this.handleLogout}>Logout</Button> : <NavLink to="/login"/> }
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

export default withRouter(connect()(Navigation))
