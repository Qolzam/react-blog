// - Import react components
import React, {Component} from 'react';
import {Header, Icon} from 'semantic-ui-react';

// - Import components

// - Create BlogHeader component class
export default class BlogHeader extends Component {

  // Render app DOM component
  render() {
    return (
      <Header as='h2' icon textAlign='center' color="green">
        <Icon name='suitcase' circular/>
        <Header.Content>
          Green's Diary
        </Header.Content>
        <Header.Subheader>

        </Header.Subheader>
      </Header>

    );
  }
}
