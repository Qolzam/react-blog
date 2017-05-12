// Import external components refrence
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store, {history} from 'configureStore'
import { ConnectedRouter} from 'react-router-redux'
import Faker from 'faker'

// - Import app components
import Master from 'Master'

// - Impport actions
import * as authorizeActions from 'authorizeActions'
import * as globalActions from 'globalActions'
import * as userActions from 'userActions'

// Set default data
store.dispatch(globalActions.setAvatar(Faker.image.avatar()))
store.dispatch(userActions.userInfo({name: Faker.name.findName()}))


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
