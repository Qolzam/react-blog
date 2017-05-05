import * as redux from 'redux';
import {imageGalleryReducer} from 'imageGalleryReducer';
import {imageUploaderReducer} from 'imageUploaderReducer';
import {postWritingReducer} from 'postWritingReducer';
import {postReducer} from 'postReducer';
import {commentReducer} from 'commentReducer';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    imageGallery: imageGalleryReducer,
    postWriting: postWritingReducer,
    imageUploader: imageUploaderReducer,
    post: postReducer,
    comment: commentReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
