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
import * as postActions from 'postActions'


/* ------------------------------------ */


// - Create Master component class
export class Master extends Component {

static isPrivate = true
// Constructor
constructor(props){
  super(props);
  this.state = {
    loading: true,
    authed:false,
    dataLoaded:false
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
          console.log('User is logged in #');
        this.props.login(user)
          this.setState({
            loading: false
          })
          if (!this.state.dataLoaded) {
            console.log('Data load state #',this.state.dataLoaded);
              this.props.loadData()
            this.setState({
              dataLoded: true
            })
          }
        } else {
          console.log('User is logged out #');
         this.props.logout()
          this.setState({
            loading: false
          })
          if(this.state.dataLoaded){
            console.log('Data load state #',this.state.dataLoaded);
            
            this.props.clearData()
          }
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

// - Map dispatch to props
const mapDispatchToProps = (dispatch,ownProps) => {
  console.log('start');
  return{
    loadData: () => {
      dispatch(imageGalleryActions.downloadForImageGallery())
      dispatch(postActions.dbGetPosts())
    },
    clearData: () => {
      dispatch(imageGalleryActions.deleteAllData())
      dispatch(postActions.deleteAllData())
    },
    login: (user) => {
        dispatch(authorizeActions.login(user.uid))
    },
    logout: () => {
        dispatch(authorizeActions.logout())
    }


  }
    console.log('end');
}

// - Map state to props
const mapStateToProps = (state)=>{
  return{
    uid: state.authorize.uid,
    authed: state.authorize.authed,
    global: state.global
  }

}
// - Connect commponent to redux store
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Master))
