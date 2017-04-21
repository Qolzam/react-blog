import React from 'react'
import {Grid, Image, Segment, Divider} from 'semantic-ui-react'


import Navigation from 'Navigation'
import Blog from 'Blog'
import SlideShow from 'SlideShow'

const Main = () => (
  <div id="main">
          <Segment padded>
            <SlideShow/>
            <Divider horizontal>
              Green's Diary
            </Divider>

            <Navigation/>

          </Segment>
    <Segment>
      <Blog/>
    </Segment>
  </div>

)

export default Main
