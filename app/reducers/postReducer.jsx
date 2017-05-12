// - Import components
var uuid = require('uuid');
var moment = require('moment');

// - Import action types
import * as types from 'actionTypes'


// - Default State
var defaultState = []

// - Post reducer

export var postReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.ADD_IMAGE_POST:
    return[
      ...state,
      {
        ...action.post
      }
    ];

    case types.ADD_VIDEO_POST:
    return[
      ...state,
          {
            ...action.post

          }
    ];
    case types.ADD_POST:
    return[
      ...state,
          {
            ...action.post
        }
    ];

    default:
    return state;

  }
}
