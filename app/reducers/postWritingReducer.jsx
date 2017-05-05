// - Import action types
import * as types from 'actionTypes'

// - Default state for reducer
var defaultState = {
    writeStatus: false
}

// - Post writing reducer
export var postWritingReducer = (state = defaultState, action ) => {
  switch (action.type) {
    case types.OPEN_POST_WRITE_PAGE:
      return {
        ...state,
        writeStatus: action.writeStatus
      }


    default:
      return state;
  }
}
