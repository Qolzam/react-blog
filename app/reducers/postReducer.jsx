// - Import post write page action types
import * as types from 'actionTypes'

// - Default state for reducer
var defaultState = {
    writeStatus: false,
    onHoldWriteStatus:false

}

// - Post reducer
export var postReducer = (state = defaultState, action ) => {
  switch (action.type) {
    case types.OPEN_POST_WRITE_PAGE:
      return {
        ...state,
        writeStatus: action.writeStatus
      }
      case types.ON_HOLD_POST_WRITE:
      return {
        ...state,
        onHoldWriteStatus: action.onHoldWriteStatus,
        writeStatus: !action.onHoldWriteStatus
      }

      break;
    default:
      return state;
  }
}
