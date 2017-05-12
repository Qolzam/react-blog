// - Import react components
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, NavLink, withRouter} from 'react-router-dom'
import {firebaseAuth, firebaseRef} from 'app/firebase/'
import {push} from 'react-router-redux'
import { Progress} from 'semantic-ui-react'


// - Import components
import Home from 'Home'
import Signup from 'Signup'
import Login from 'Login'
import Admin from 'Admin'
import BlogHeader from 'BlogHeader'
import MasterLoading from 'MasterLoading'
import Fimg from 'Fimg'
import * as types from 'actionTypes'


// - Import API
import {PrivateRoute, PublicRoute} from 'AuthRouterAPI'


// - Import actions
import * as authorizeActions from 'authorizeActions'
import * as imageGalleryActions from 'imageGalleryActions'


// - Create Master component class
export class Master extends Component {

static isPrivate = true
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


componentDidMount = () => {

var {dispatch} = this.props

  this.removeListener = firebaseAuth().onAuthStateChanged((user) => {

        if (user) {
          dispatch(authorizeActions.login(user.uid));
          this.setState({
            loading: false
          })
          dispatch(imageGalleryActions.downloadForImageGallery())
        } else {
          dispatch(authorizeActions.logout())
          this.setState({
            loading: false
          })
        }
      })

}
componentWillUnmount = () => {
  this.removeListener()
}
// Render app DOM component

  render() {

    return (
      <div id="master">
        <div className='master__progress' style={{
            display: (this.props.global.visible ? 'block' : 'none' )}}>
 <Progress percent={this.props.global.percent} color='teal' size='tiny' active />
 </div>
    <MasterLoading activeLoading={this.state.loading} handleLoading={this.handleLoading}/>
     <BlogHeader/>

      <Switch>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/admin" component={Admin}/>
        <Route path="/" component={Home}/>

      </Switch>
      </div>
    )
  }
}

export default withRouter(connect((state)=>{
  return{
    uid: state.authorize.uid,
    authed: state.authorize.authed,
    global: state.global
  }

})(Master))
