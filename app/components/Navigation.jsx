// - Import react components
import React, {Component} from 'react'
import {Input, Menu, Search, Segment, Button} from 'semantic-ui-react'
import {NavLink, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

// - Import API
import * as AuthAPI from 'AuthAPI'

// - Import actions
import * as authorizeActions from 'authorizeActions'

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
  var {dispatch} = this.props
  dispatch(authorizeActions.dbLogout())

 }

  // Render DOM
  render() {
    const {activeItem} = this.state

    return (
      <Menu color={color} stackable fluid>
        <Menu.Item as="div" icon="home" name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
{ AuthAPI.isAuthorized() ?
      <Menu.Item as="div" name='account' active={activeItem === 'account'} onClick={this.handleItemClick}>
           <NavLink to="/admin/account">Account</NavLink>
        </Menu.Item>
        : '' }
        <Menu.Item name='logout' as='div' active={activeItem === 'Logout'} onClick={this.handleItemClick}>
        { AuthAPI.isAuthorized() ? <Button as="div" primary onClick={this.handleLogout}>LOGOUT</Button> : <NavLink className="ui blue button" to="/login">LOGIN</NavLink> }
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Search/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

    )
  }
}

export default withRouter(connect()(Navigation))
