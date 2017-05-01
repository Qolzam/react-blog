// - Import react components
import React, {Component} from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';



// - Import components
import Home from 'Home';
import Signup from 'Signup';
import Login from 'Login';
import Admin from 'Admin';
import BlogHeader from 'BlogHeader';
import MasterLoading from 'MasterLoading';
import * as types from 'actionTypes';



// - Create Master component class
export default class Master extends Component {

// Constructor
constructor(props){
  super(props);
  this.state = {
    active: true
  };

}

componentDidMount = ()=> {

  this.setState({
    active: false
  });

}

// Render app DOM component
  render() {
    return (
      <div id="master">
              <MasterLoading activeLoading={this.state.active}/>
             <BlogHeader/>

      <Switch>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/" component={Home}/>
      </Switch>
      </div>
    )
  }
}
