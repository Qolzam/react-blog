// - Import react components
import React, {Component} from 'react'
import {Icon, Label, Segment, Header} from 'semantic-ui-react'

// - Create Tags component class
export default class Tags extends Component {

  // Render DOM
  render() {
    return (
      <div>
        <Header as='h2' attached='top'>
          Tags
        </Header>
        <Segment attached>
          <Label.Group color='teal'>
            <Label as='a'>
              Happy
              <Label.Detail>22</Label.Detail>
            </Label>
            <Label as='a'>Smart
              <Label.Detail>3</Label.Detail>
            </Label>
            <Label as='a'>Insane
              <Label.Detail>10</Label.Detail>
            </Label>
            <Label as='a'>Exciting
              <Label.Detail>19</Label.Detail>
            </Label>
          </Label.Group>
        </Segment>
      </div>
    )
  }
}
