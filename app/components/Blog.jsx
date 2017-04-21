import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

import Summary from 'Summary'
import Post from 'Post'

const Blog = () => (
  <Grid stackable divided padded>
    <Grid.Row>
       <Grid.Column width={13}>
         <Post/>
          <Post/>
           <Post/>
            <Post/>
       </Grid.Column>
       <Grid.Column width={3}>
         <Summary/>
       </Grid.Column>
     </Grid.Row>
  </Grid>

)

export default Blog
