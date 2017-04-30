// - Import react components
import React, {Component} from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import {Header, Icon, Dimmer, Loader} from 'semantic-ui-react';

// - Import components
import Home from 'Home';
import Signup from 'Signup';
import Login from 'Login';
import Admin from 'Admin';
import BlogHeader from 'BlogHeader';




// - Create Master component class
export default class Master extends Component {

// Constructor
constructor(props){
  super(props);
  this.state = {
    active: true
  };

  // Binding finctions to `this`
  this.handleShow = this.handleShow.bind(this);
}

// Ha
handleShow = () => this.setState({ active: true })




// Render app DOM component
  render() {
    return (
      <div id="master">


                 <Dimmer page active={this.state.active} style={{background: "white"}}  inverted onClickOutside={this.handleShow}>

                     <i className="huge icons" >
                       <i className="big loading global__color-gold circle notched icon"></i>
                       <i className="suitcase teal icon"></i>
                     </i>
                     <Header as='h2'>
                      Green's Diary
                      <Header.Subheader>
                      Loding...
                      </Header.Subheader>
                    </Header>
                  </Dimmer>


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
