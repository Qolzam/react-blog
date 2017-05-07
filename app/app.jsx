// Import general components refrence
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
var store = require('configureStore').configure();



// - Impport actions
import * as authorizeActions from 'authorizeActions'



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
