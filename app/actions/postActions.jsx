// - Import post action types
import * as types from 'actionTypes'

// - Post actions
export const openPostWritePage = (status) => {
  return{
    type: types.OPEN_POST_WRITE_PAGE,
    status
  }
}
