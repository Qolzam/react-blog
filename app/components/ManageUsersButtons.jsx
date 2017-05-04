// - Import react components
import React, {Component} from 'react'
import {
  Button,
  Image,
  List,
  Segment,
  Popup,
  Menu,
  Input,
  Label
} from 'semantic-ui-react'
import Faker from 'faker'

// - Create ManageUsersButtons component class
export default class ManageUsersButtons extends Component {

  // Render DOM
  render() {
    return (
      <div>
  <Button icon='delete' circular/>
  <Button icon='minus circle' color='red' circular/>
    <Popup
       trigger={<Button circular color='yellow' icon='privacy'/>}
       flowing
       hoverable
       size='tiny'
       position='left center'
        >
       <Menu size='small' vertical>
         <Menu.Item link name='inbox' >
           <Label color='teal'>1</Label>
           Group one
         </Menu.Item>

         <Menu.Item link name='spam' >
           <Label>51</Label>
           Group two
         </Menu.Item>

         <Menu.Item link name='updates' >
           <Label>1</Label>
           Group three
         </Menu.Item>
         <Menu.Item>
           <Input icon='add' placeholder='New group' />
         </Menu.Item>
       </Menu>
     </Popup>
     </div>
   )
  }
}
