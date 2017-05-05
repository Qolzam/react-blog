// - Import components
var uuid = require('uuid');
var moment = require('moment');

// - Import action types
import * as types from 'actionTypes'


// - Default state
var defaultState = []


// - Vote reducer
export const voteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case type.ADD_POST_VOTE:
    return[
      ...state,
      {
        id: uuid(),
        postId: state.vote.postId,
        userId: state.vote.userId,
        creationDate: momen.unix(),

      }
    ];

    default:
    return state;

  }

}
