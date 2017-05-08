// Import general components refrence
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {configure, history} from 'configureStore'
import { ConnectedRouter} from 'react-router-redux'

// - Import app components
import Master from 'Master'

// - Impport actions
import * as authorizeActions from 'authorizeActions'

var store = configure()

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
