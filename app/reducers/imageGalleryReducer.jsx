// - Import image gallery action types
import * as types from 'actionTypes'

// - Default state for reducer
var defaultState = {
    status: false

}

// - Image gallery reducer
export var imageGalleryReducer = (state = {}, action ) => {
  switch (action.type) {
    case types.OPEN_IMAGE_GALLERY:
      return {
        ...state,
        status: action.status
      }

      break;
    default:
      return state;
  }
}
