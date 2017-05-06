// Import general components refrence
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
var store = require('configureStore').configure();
import {firebaseAuth, firebaseRef} from 'app/firebase/'


// - Impport actions
import * as authorizeActions from 'authorizeActions'

firebaseAuth().onAuthStateChanged((user) => {

      if (user) {
        store.dispatch(authorizeActions.login(user.uid));
        console.log("On auth changed : ", user)
        store.dispatch(authorizeActions.login(user.uid))
      } else {
        store.dispatch(authorizeActions.logout())
          console.log("On auth changed : ", user)
      }
    })

store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);

});



//Import project components refrence
import Master from 'Master';

// App css
require('applicationStyles');

ReactDOM.render(
 <Provider store={store}>
    <BrowserRouter>
      <Route component={Master}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
