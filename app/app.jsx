// Import general components refrence
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

//Import project components refrence
import Main from 'Main';


// Load foundation
$(document).foundation();

// App css
require('./styles/app.scss')

ReactDOM.render(
<Main/>,
  document.getElementById('app')
);
