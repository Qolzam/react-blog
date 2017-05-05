// - Import action types
import * as types from 'actionTypes'


// - Comment actions

export const addComment = (comment) => {
  return{
    type: types.ADD_POST,
    comment

  }
}
