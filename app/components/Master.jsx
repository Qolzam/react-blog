import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

// Import components
import Home from 'Home'

 const Master = () => (

      <div id="container">
      <Switch>
        <Route path="/" component={Home}/>

      </Switch>
      </div>
)
export default Master
