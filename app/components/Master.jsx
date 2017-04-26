// - Import react components
import React, {Component} from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import {Header, Icon} from 'semantic-ui-react';

// - Import components
import Home from 'Home';
import Signup from 'Signup';
import Login from 'Login';
import Admin from 'Admin';


// - Create Master component class
export default class Master extends Component {

  render() {
    return (
      <div id="master">

          <Header as='h2' icon textAlign='center' color="green">
            <Icon name='suitcase' circular/>
            <Header.Content>
              Green's Diary
            </Header.Content>
            <Header.Subheader>

            </Header.Subheader>
          </Header>

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
