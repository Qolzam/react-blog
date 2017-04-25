import React, {Component} from 'react'
import {Grid, Image, Segment} from 'semantic-ui-react'

import Summary from 'Summary'
import Post from 'Post'
import PopularPosts from 'PopularPosts'
import Tags from 'Tags'

export default class Blog extends Component {
  render() {
    return (
      <Grid stackable divided padded columns={2}>
        <Grid.Row>
          <Grid.Column computer={12} mobile={16} tablet={11}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
          </Grid.Column>
          <Grid.Column computer={4} mobile={16} tablet={5}>
            <Summary/>
            <PopularPosts/>
            <Tags/>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    )
  }
}
