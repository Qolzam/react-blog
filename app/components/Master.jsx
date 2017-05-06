// - Import react components
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, NavLink} from 'react-router-dom'
import {firebaseAuth, firebaseRef} from 'app/firebase/'


// - Import API
import {PrivateRoute, PublicRoute} from 'AuthRouterAPI'

// - Import actions
import {authorizeActions} from 'authorizeActions'

// - Import components
import Home from 'Home'
import Signup from 'Signup'
import Login from 'Login'
import Admin from 'Admin'
import BlogHeader from 'BlogHeader'
import MasterLoading from 'MasterLoading'
import * as types from 'actionTypes'



// - Create Master component class
export class Master extends Component {

// Constructor
constructor(props){
  super(props);
  this.state = {
    loading: true
  };

}

componentDidMount = ()=> {

  this.setState({
    loading: false
  })

}
componentWillUnmount () {
  this.removeListener()
}
// Render app DOM component
  render() {
    return (
      <div id="master">
              <MasterLoading activeLoading={this.state.loading}/>
             <BlogHeader/>

      <Switch>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute authed={this.props.authed} path="/admin" component={Admin}/>
        <Route path="/" component={Home}/>
      </Switch>
      </div>
    )
  }
}

export default connect((state)=>{
  return{
    uid: state.authorize.uid,
    authed: state.authorize.authed
  }

})(Master)
