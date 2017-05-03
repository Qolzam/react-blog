// - Import post write page action types
import * as types from 'actionTypes'

// - Default state for reducer
var defaultState = {
    writeStatus: false
}

// - Post reducer
export var postReducer = (state = defaultState, action ) => {
  switch (action.type) {
    case types.OPEN_POST_WRITE_PAGE:
      return {
        ...state,
        writeStatus: action.writeStatus
      }


      break;
    default:
      return state;
  }
}
