var redux = require('redux');
var {} = require('reducers');

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({});

  var store = redux.createStore(reducer, initialState, redux.compose(window.devToolsExtension
    ? window.devToolsExtension()
    : f => f));

  return store;
};
