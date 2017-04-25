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
             <Grid stackable padded>
              <Grid.Row>
                <Grid.Column width={11}>
                  <Switch>
                    <Route path="/admin/users" component={ManageUsers}/>
                    <Route path="/admin" component={Account}/>

                  </Switch>
                </Grid.Column>
                <Grid.Column width={4}>
                  <AdminNav/>
                </Grid.Column>

              </Grid.Row>

             </Grid>

    )

  }

}
