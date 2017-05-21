// - Import action types
import * as types from 'actionTypes'

// - Default state for reducer
var defaultState = {
    avatar:'',
    summary: '',
    fullName: '',
    contact: '',
    email: ''

}

// - User reducer
export var userReducer = (state = defaultState, action ) => {
  switch (action.type) {
    case types.USER_INFO:
      return {
        ...state,
        ...action.info
      }
    case types.ADD_USER_AVATAR:
    return{
      ...state,
      avatar:action.url
    }
    case types.ADD_USER_INFO:
    return{
      ...state,
      ...action.info
    }
    case types.CLEAR_ALL_DATA_USER:
    return defaultState

    default:
      return state;
  }
}
