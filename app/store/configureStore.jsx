// - Import external components
import * as redux from 'redux'
import thunk from 'redux-thunk'
import {routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import {createLogger} from 'redux-logger';

// - Import reducers
import {imageGalleryReducer} from 'imageGalleryReducer'
import {imageUploaderReducer} from 'imageUploaderReducer'
import {postWritingReducer} from 'postWritingReducer'
import {postReducer} from 'postReducer'
import {commentReducer} from 'commentReducer'
import {authorizeReducer} from 'authorizeReducer'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// - Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)
const logger = createLogger()

// - Config and create store of redux
export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    imageGallery: imageGalleryReducer,
    postWriting: postWritingReducer,
    imageUploader: imageUploaderReducer,
    post: postReducer,
    comment: commentReducer,
    authorize: authorizeReducer,
    router: routerReducer
  })

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(logger,thunk,middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store;
}
