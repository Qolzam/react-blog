import * as redux from 'redux';
import {imageGalleryReducer} from 'imageGalleryReducer';
import {postWritePageReducer} from 'postWritePageReducer';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    imageGallery: imageGalleryReducer,
    postWritePage: postWritePageReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
