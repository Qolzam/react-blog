// - Import components
var uuid = require('uuid');
var moment = require('moment');

// - Import action types
import * as types from 'actionTypes'


// - Default state
var defaultState = []


// - Comment actions
export var commentReducer = (state = defaultState, action ) =>{
  switch (action.type) {
    case types.ADD_COMMENT:
    return[
      ...state,
      {
        id: uuid(),
        postId: state.comment.postId,
        score:0,
        text: state.comment.text,
        creationDate: moment.unix(),
        userDisplayName: state.comment.userDisplayName,
        userId: state.comment.userId
      }
    ]

      break;
    default:
    return state;

  }


}
