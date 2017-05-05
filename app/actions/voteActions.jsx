// - Import action types
import * as types from 'actionTypes'


// - Vote actions

export const addPostVote = (vote) => {
  return{
    type: types.ADD_POST_VOTE,
    vote

  }
}

export const addCommentVote = (vote) => {
  return{
    type: types.ADD_COMMENT_VOTE,
    vote
  }
}
