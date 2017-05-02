import * as redux from 'redux';
import {imageGalleryReducer} from 'imageGalleryReducer';
import {postReducer} from 'postReducer';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    imageGallery: imageGalleryReducer,
    post: postReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
