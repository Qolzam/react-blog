// Import general components refrence
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import createHistory from 'history/createBrowserHistory'
var store = require('configureStore').configure()
import { ConnectedRouter} from 'react-router-redux'

// - Import app components
import Master from 'Master'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// - Impport actions
import * as authorizeActions from 'authorizeActions'



store.subscribe(() => {
  var state = store.getState();


});



// App css
require('applicationStyles');
const supportsHistory = 'pushState' in window.history

ReactDOM.render(
 <Provider store={store}>
   <ConnectedRouter history={history}>
      <Master/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
