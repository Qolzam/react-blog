import React from 'react'
import {Grid, Image, Segment, Divider} from 'semantic-ui-react'
import {Route, Switch} from 'react-router-dom'

import Signup from 'Signup'
import Navigation from 'Navigation'
import Blog from 'Blog'
import SlideShow from 'SlideShow'


const Home = () => (
  <div id="home">
          <Segment>
            <SlideShow/>
            <Divider horizontal>
              Green's Diary
            </Divider>
            <Navigation/>
          </Segment>
          <Segment centered width={7}>
            <Switch>
              <Route path="/signup" component={Signup}/>
              <Route exact={true} patch="/" component={Blog}/>
            </Switch>

          </Segment>
  </div>

)

export default Home
