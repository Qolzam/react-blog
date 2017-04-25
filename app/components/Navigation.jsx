import React, {Component} from 'react'
import {Input, Menu, Search, Segment} from 'semantic-ui-react'

const color = 'teal';
const colorKey = 'blue';

export default class Navigation extends Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state

    return (

      <Menu color={color} stackable>
      
        <Menu.Item icon="home" name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}/>
        <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick}/>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Search/>
          </Menu.Item>

        </Menu.Menu>
        <Menu.Menu>
        <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick}/>
        </Menu.Menu>
      </Menu>

    )
  }
}
