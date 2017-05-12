// - Import action types
import * as types from 'actionTypes'

// - Default state for reducer
var defaultState = {
  writeStatus: false,
  image: '',
  text: '',
  tags: [],
  type: 0
}

// - Post writing reducer
export var postWritingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.OPEN_POST_WRITE_PAGE:
      return {
        ...state,
        writeStatus: action.writeStatus
      }
    case types.IMAGE:
      return {
        ...state,
        writeStatus: action.writeStatus,
        image: action.image
      }
    case types.TEXT_POST_WRITE:
      return {
        ...state,
        text: action.text
      }
    case types.TAGS_POST_WRITE:
      return {
        ...state,
        tags: [...action.tags]
      }
    case types.TYPE_POST_WRITE:
      return {
        ...state,
        type: action.type
      }
    default:
      return state;
  }
}
