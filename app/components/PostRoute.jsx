// - Import react components
import React, {Component} from 'react';
import {Button, Header, Icon, Image, Modal} from 'semantic-ui-react'

// - Import app components

// - Create PostRoute component class
export default class PostRoute extends Component {
  render() {
    return (
      <Modal dimmer="blurring" trigger={< Button > Long Modal < /Button>}>
        <Modal.Header>Profile Picture</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='/assets/images/wireframe/image.png'/>
          <Modal.Description>
            <Header>Modal Header</Header>
            <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
            <p>Lorem ipsum dolor sit amet,
               consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                 ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                 velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                 proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 <p>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                     magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>Lorem ipsum dolor sit amet,
                         consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                           ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                           velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                           proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary>
            Proceed
            <Icon name='right chevron'/>
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
