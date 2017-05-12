// - Import action types
import * as types from 'actionTypes'

// - User info
export const userInfo = (info) => {
  return{
    type: types.USER_INFO,
    info
  }
}
