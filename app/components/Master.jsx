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
    loading: true,
    authed:false
  };
  this.handleLoading = this.handleLoading.bind(this)

}
handleLoading = (status) => {
  this.setState({
    loading: status,
    authed:false
  })
}
componentDidMount = ()=> {

var {dispatch} = this.props

  this.removeListener = firebaseAuth().onAuthStateChanged((user) => {

        if (user) {
          dispatch(authorizeActions.login(user.uid));
          console.log("On auth changed : ", user)
          this.setState({
            loading: false,
            authed: true
          })
        } else {
          dispatch(authorizeActions.logout())
            console.log("On auth changed !#: ", user)
            this.setState({
              loading: false,
              authed: false
            })
        }
      })

}
componentWillUnmount () {
  this.removeListener()
}
// Render app DOM component

  render() {

    return (
      <div id="master">

    <MasterLoading activeLoading={this.state.loading} handleLoading={this.handleLoading}/>
     <BlogHeader/>
        {
          console.log(this.props.authed)

        }
      <Switch>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute pashm={this.props.authed} path="/admin" component={Admin}/>
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
