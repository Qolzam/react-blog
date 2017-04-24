// Import general components refrence
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, BrowserRouter, Switch} from 'react-router-dom';



//Import project components refrence
import Master from 'Master';

// App css
require('./styles/app.scss');

ReactDOM.render(
  <BrowserRouter>
    <Route component={Master}/>
  </BrowserRouter>,
  document.getElementById('app')
);
