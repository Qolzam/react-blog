// - Import action types
import * as types from 'actionTypes'

// - Default state for reducer
var defaultState = {
    info: {}
}

// - User reducer
export var userReducer = (state = defaultState, action ) => {
  switch (action.type) {
    case types.USER_INFO:
      return {
        ...state,
        info: action.info
      }


    default:
      return state;
  }
}
