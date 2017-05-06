import * as redux from 'redux'
import thunk from 'redux-thunk'

import {imageGalleryReducer} from 'imageGalleryReducer'
import {imageUploaderReducer} from 'imageUploaderReducer'
import {postWritingReducer} from 'postWritingReducer'
import {postReducer} from 'postReducer'
import {commentReducer} from 'commentReducer'
import {authorizeReducer} from 'authorizeReducer'

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    imageGallery: imageGalleryReducer,
    postWriting: postWritingReducer,
    imageUploader: imageUploaderReducer,
    post: postReducer,
    comment: commentReducer,
    authorize: authorizeReducer
  })

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store;
}
