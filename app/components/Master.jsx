import React, {Component} from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';

// Import components
import Home from 'Home';
import Signup from 'Signup';
import Login from 'Login';

export default class Master extends Component {

  render() {
    return (
      <div>
    
      <Switch>
        <Route path="/signup" component={Signup}/>
        <Route path="/Login" component={Login}/>
        <Route path="/" component={Home}/>
      </Switch>
      </div>
    )
  }
}
