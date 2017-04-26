import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Grid} from 'semantic-ui-react';


// Import app components
import ManageUsers from 'ManageUsers';
import Account from 'Account';
import AdminNav from 'AdminNav';

// Create admin component class
export default class Admin extends Component {

  render() {

    return (
             <Grid stackable padded columns={2}>
              <Grid.Row>

                <Grid.Column computer={4} tablet="4" mobile="16" floated="left">
                  <AdminNav/>
                </Grid.Column>
                <Grid.Column computer={12} tablet="12" mobile="16" floated="left">
                  <Switch>
                    <Route path="/admin/users" component={ManageUsers}/>
                    <Route path="/admin" component={Account}/>

                  </Switch>
                </Grid.Column>
              </Grid.Row>

             </Grid>

    )

  }

}
